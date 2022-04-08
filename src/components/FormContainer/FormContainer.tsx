import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectDisplayWeatherResults,
  selectWeather,
} from "../../reduxStore/weather/selectors/selectWeather";
import WeatherDate from "../WeatherDate/WeatherDate";
import * as React from "react";
import { selectWeatherStatus } from "../../reduxStore/weather/selectors/selectWeatherStatus";
import { NETWORK_STATUS } from "../../utilities/constants/networkStatus";
import { selectWeatherErrorMessage } from "../../reduxStore/weather/selectors/selectWeatherErrorMessage";
import InptuContainer from "../InputContainer/InputContainer";
import RecentlySearchedCities from "../RecentlySearchedCities/RecentlySearchedCities";
import {
  ContainerApp,
  Title,
  SpinLoaderContainer,
  SpinLoader,
  ErrorMessage,
} from "./FormContainer.styles";

const FormContainer: React.FC = () => {
  const weatherData = useSelector(selectWeather);
  const weatherDataStatus = useSelector(selectWeatherStatus);
  const weatherErrorMessage = useSelector(selectWeatherErrorMessage);
  const weatherDataLoading = weatherDataStatus === NETWORK_STATUS.FETCHING;
  const displayWeatherResults = useSelector(selectDisplayWeatherResults);
  const [address, setAddress] = useState("");
  const [addressHistory, setAddressHistory] = useState(
    JSON.parse(localStorage.getItem("addressHistory")) || []
  );
  const showRecentSearchedCities =
    !weatherDataLoading && !displayWeatherResults && addressHistory?.length > 0;

  return (
    <ContainerApp>
      {!displayWeatherResults && <Title>Weather App</Title>}
      <InptuContainer
        address={address}
        setAddress={setAddress}
        addressHistory={addressHistory}
        setAddressHistory={setAddressHistory}
      />
      {weatherDataLoading && (
        <SpinLoaderContainer>
          <SpinLoader /> Loading data...
        </SpinLoaderContainer>
      )}
      {weatherErrorMessage && (
        <ErrorMessage>{weatherErrorMessage}</ErrorMessage>
      )}
      {showRecentSearchedCities && (
        <RecentlySearchedCities
          setAddress={setAddress}
          addressHistory={addressHistory}
          setAddressHistory={setAddressHistory}
        />
      )}
      {displayWeatherResults &&
        weatherData.map((weather, index) => (
          <WeatherDate key={index} {...weather} />
        ))}
    </ContainerApp>
  );
};

export default FormContainer;
