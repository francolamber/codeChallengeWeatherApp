import { useDispatch } from "react-redux";
import { getWeather } from "../../reduxStore/weather/actions/getWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { clearWeather } from "../../reduxStore/weather/actions/clearWeather";
import * as React from "react";
import {
  ContainerForm,
  InputAddress,
  FromRevomeIcon,
  ButtonSubmit,
} from "./InputContainer.styles";
import { InputContainerProps } from "./InputContainer.types";

const InptuContainer: React.FC<InputContainerProps> = ({
  address,
  setAddress,
  addressHistory,
  setAddressHistory,
}) => {
  const dispatch = useDispatch();

  const onChangeAddress = (e): void => {
    setAddress(e.target.value);

    if (address === "") {
      dispatch(clearWeather());
    }
  };

  const handleDeleteInputAddress = (): void => {
    setAddress("");
    dispatch(clearWeather());
  };

  const addAddressHistoryToLocalStorage = (address): void => {
    const cities = addressHistory;
    let newCities = [];

    if (cities.includes(address)) {
      return;
    }

    if (cities.length === 0) {
      newCities = [address];

      localStorage.setItem("addressHistory", JSON.stringify(newCities));
    } else {
      newCities = [...cities, address];
    }

    if (newCities.length > 5) {
      newCities.shift();
    }

    setAddressHistory(newCities);
    localStorage.setItem("addressHistory", JSON.stringify(newCities));
  };

  const handleOnClick = (): void => {
    if (address !== "") {
      dispatch(getWeather(address));
      addAddressHistoryToLocalStorage(address);
    }
  };

  return (
    <ContainerForm>
      <InputAddress
        placeholder="Write city name and press '>' to get weather"
        onChange={onChangeAddress}
        value={address}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleOnClick();
          }
        }}
      />
      {address !== "" && (
        <FromRevomeIcon onClick={() => handleDeleteInputAddress()}>
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
