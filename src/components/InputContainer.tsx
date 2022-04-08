import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getWeather } from "../reduxStore/weather/actions/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { clearWeather } from "../reduxStore/weather/actions/clearWeather";
import * as React from "react";

const InputCity = styled.input`
  background: transparent;
  width: 90%;
  padding: 5px;
  font-size: 18px;
  margin: 8px 0;
  color: white;
  box-sizing: border-box;
  border: none;
  border-bottom: 2px solid white;

  &:focus-visible {
    outline: none;
    }
  }
`;

const ButtonSubmit = styled.button`
  background-color: #445064;
  border: none;
  color: white;
  padding: 10px 15px;
  border-radius: 58%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin: 4px 2px;
  cursor: pointer;
`;

const ContainerForm = styled.div`
  width: 530px;
  display: flex;
  justify-content: space-between;
`;

const FromRevomeIcon = styled.div`
  left: -20px;
  position: relative;
  top: 10px;
`;

interface Props {
  city: string;
  cityHistory: string[];
  setCity: (arg: string) => void;
  setCityHistory: (arg: string[]) => void;
}

const InptuContainer: React.FC<Props> = ({
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
