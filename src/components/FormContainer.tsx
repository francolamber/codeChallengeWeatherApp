import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectDisplayWeatherResults,
  selectWeather,
} from "../reduxStore/weather/selectors/selectWeather";
import WeatherDate from "./WeatherDate";
import * as React from "react";
import { selectWeatherStatus } from "../reduxStore/weather/selectors/selectWeatherStatus";
import { NETWORK_STATUS } from "../utilities/constants/networkStatus";
import { selectWeatherErrorMessage } from "../reduxStore/weather/selectors/selectWeatherErrorMessage";
import InptuContainer from "./InputContainer";
import RecentlySearchedCities from "./RecentlySearchedCities";

const Title = styled.h1`
  font-size: 40px;
`;

const ContainerApp = styled.div`
  width: 530px;
`;

const SpinLoader = styled.div`
  border: 5px solid #272c34;
  border-radius: 50%;
  border-top: 5px solid #445064;
  border-left: 5px solid #445064;
  border-right: 5px solid #445064;
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
  margin: 10px;

  /* Safari */
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinLoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff3939;
`;

const FormContainer: React.FC = () => {
  const weatherData = useSelector(selectWeather);
  const weatherDataStatus = useSelector(selectWeatherStatus);
  const weatherErrorMessage = useSelector(selectWeatherErrorMessage);
  const weatherDataLoading = weatherDataStatus === NETWORK_STATUS.FETCHING;
  const displayWeatherResults = useSelector(selectDisplayWeatherResults);
  const [city, setCity] = useState("");
  const [cityHistory, setCityHistory] = useState(
    JSON.parse(localStorage.getItem("cityHistory")) || []
  );
  const showRecentSearchedCities =
    !weatherDataLoading && !displayWeatherResults && cityHistory?.length;

  return (
    <ContainerApp>
      {!displayWeatherResults && <Title>Weather App</Title>}
      <InptuContainer
        city={city}
        setCity={setCity}
        cityHistory={cityHistory}
        setCityHistory={setCityHistory}
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
          setCity={setCity}
          cityHistory={cityHistory}
          setCityHistory={setCityHistory}
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
