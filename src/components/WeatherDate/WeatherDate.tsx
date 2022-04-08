import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import WeatherHoursList from "../WeatherHoursList/WeatherHoursList";
import * as React from "react";
import * as moment from "moment";
import { WeatherData } from "../../reduxStore/weather/typings";
import {
  Card,
  DateContainer,
  DayOfWeek,
  IconContainer,
  IconWeather,
  TemperaturText,
  TemperaturesValue,
  TemperaturMax,
  TemperaturMin,
  ForecastContainer,
  WindContainer,
  ArrowButtonContainer,
} from "./WeatherDate.styles";

const WeatherDate: React.FC<WeatherData> = ({
  date,
  icon,
  max,
  min,
  windDirection,
  windSpeed,
  shortForecast,
  isDaytime,
  byHour,
}) => {
  const singleTemperature = !min;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Card isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <DateContainer>
          <DayOfWeek>{moment(date).format("ddd")}</DayOfWeek>
          <div>{moment(date).format("D/M")}</div>
        </DateContainer>
        <IconContainer>
          <IconWeather src={icon} />
        </IconContainer>
        <div>
          {singleTemperature && (
            <TemperaturText>{isDaytime ? "DAY" : "NIGHT"}</TemperaturText>
          )}
          <TemperaturesValue singleTemperature={singleTemperature}>
            <TemperaturMax>{max}º</TemperaturMax>
            <TemperaturMin>{min && <>/ {min}º</>}</TemperaturMin>
          </TemperaturesValue>
        </div>
        <ForecastContainer>{shortForecast}</ForecastContainer>
        <WindContainer>
          <div>{windDirection}</div>
          <div>{windSpeed}</div>
        </WindContainer>
        <ArrowButtonContainer>
          <FontAwesomeIcon icon={faAngleDown} />
        </ArrowButtonContainer>
      </Card>
      {isOpen && <WeatherHoursList byHour={byHour} />}
    </>
  );
};

export default WeatherDate;
