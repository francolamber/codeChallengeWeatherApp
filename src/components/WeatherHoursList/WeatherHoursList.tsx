import * as React from "react";
import * as moment from "moment";
import {
  IconContainer,
  IconWeather,
  ForecastContainer,
  WindContainer,
} from "../WeatherDate/WeatherDate.styles";
import { Container, CardHour } from "./WeatherHoursList.styles";
import { WeatherHoursListProps } from "./WeatherHoursList.types";

const WeatherHoursList: React.FC<WeatherHoursListProps> = ({ byHour }) => {
  return (
    <Container>
      {byHour?.length > 0 &&
        byHour.map((weatherByHour, index) => {
          const {
            startTime,
            icon,
            temperature,
            windDirection,
            windSpeed,
            shortForecast,
          } = weatherByHour;
          return (
            <CardHour key={index}>
              <div>{moment(startTime).format("hh a")}</div>
              <IconContainer>
                <IconWeather src={icon} />
              </IconContainer>

              <div>{temperature}º</div>
              <ForecastContainer>{shortForecast}</ForecastContainer>
              <WindContainer>
                <div>{windDirection}</div>
                <div>{windSpeed}</div>
              </WindContainer>
            </CardHour>
          );
        })}
    </Container>
  );
};

export default WeatherHoursList;
