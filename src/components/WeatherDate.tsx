import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import WeatherHoursList from "./WeatherHoursList";
import * as React from "react";
import * as moment from "moment";
import { WeatherData } from "../reduxStore/weather/typings";

const Card = styled.div`
  width: 520px;
  height: 86px;
  background: white;
  border-radius: 5px;
  color: black;
  margin: 0.5em 0;
  padding: 0px 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isOpen &&
    css`
      margin-bottom: -4px;
    `};
`;

const DateContainer = styled.div`
  margin-right: 10px;
`;

const DayOfWeek = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const IconWeather = styled.img`
  border-radius: 15px;
  opacity: 0.8;
  width: 60px;
`;

const IconContainer = styled.div`
  margin: 0 20px;
`;

const TemperaturesValue = styled.div`
  display: flex;
  align-items: flex-end;

  ${(props) =>
    props.singleTemperature &&
    css`
      margin: 0 12px 0 24px;
    `};
`;

const TemperaturText = styled.div`
  margin-left: 3px;
  font-weight: 500;
`;

const TemperaturMax = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const TemperaturMin = styled.div`
  margin: 0px 0 7px 6px;
  color: #585858;
`;

const ForecastContainer = styled.div`
  width: 150px;
  margin: 0 10px;
`;

const WindContainer = styled.div`
  width: 70px;
`;

const ArrowButtonContainer = styled.div`
  padding-left: 15px;
`;

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
