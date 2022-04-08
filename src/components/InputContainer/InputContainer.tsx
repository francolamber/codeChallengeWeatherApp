import { useDispatch } from "react-redux";
import { getWeather } from "../../reduxStore/weather/actions/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { clearWeather } from "../../reduxStore/weather/actions/clearWeather";
import * as React from "react";
import {
  ContainerForm,
  InputCity,
  FromRevomeIcon,
  ButtonSubmit,
} from "./InputContainer.styles";
import { InputContainerProps } from "./InputContainer.types";

const InptuContainer: React.FC<InputContainerProps> = ({
  city,
  setCity,
  cityHistory,
  setCityHistory,
}) => {
  const dispatch = useDispatch();

  const onChangeCity = (e): void => {
    setCity(e.target.value);

    if (city === "") {
      dispatch(clearWeather());
    }
  };

  const handleDeleteInputCity = (): void => {
    setCity("");
    dispatch(clearWeather());
  };

  const addCityHistoryToLocalStorage = (city): void => {
    const cities = cityHistory;
    let newCities = [];

    if (cities.includes(city)) {
      return;
    }

    if (cities.length === 0) {
      newCities = [city];

      localStorage.setItem("cityHistory", JSON.stringify(newCities));
    } else {
      newCities = [...cities, city];
    }

    if (newCities.length > 5) {
      newCities.shift();
    }

    setCityHistory(newCities);
    localStorage.setItem("cityHistory", JSON.stringify(newCities));
  };

  const handleOnClick = (): void => {
    if (city !== "") {
      dispatch(getWeather(city));
      addCityHistoryToLocalStorage(city);
    }
  };

  return (
    <ContainerForm>
      <InputCity
        placeholder="Write city name and press '>' to get weather"
        onChange={onChangeCity}
        value={city}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleOnClick();
          }
        }}
      />
      {city !== "" && (
        <FromRevomeIcon onClick={() => handleDeleteInputCity()}>
          <FontAwesomeIcon icon={faXmark} />
        </FromRevomeIcon>
      )}
      <ButtonSubmit onClick={handleOnClick}>
        <FontAwesomeIcon icon={faAngleRight} />
      </ButtonSubmit>
    </ContainerForm>
  );
};

export default InptuContainer;
