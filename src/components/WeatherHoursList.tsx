import * as React from "react";
import styled from "styled-components";
import * as moment from "moment";
import { WeatherDatabyHour } from "../reduxStore/weather/typings";

const CardHour = styled.div`
  width: 520px;
  background: white;
  border-top: 1px solid black;
  color: black;
  padding: 5px 4px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconWeather = styled.img`
  border-radius: 15px;
  opacity: 0.8;
  width: 60px;
`;

const IconContainer = styled.div`
  margin: 0 20px;
`;

const ForecastContainer = styled.div`
  width: 150px;
  margin: 0 10px;
`;

const WindContainer = styled.div`
  width: 70px;
`;

const Container = styled.div`
  margin-bottom: 8px;
`;

interface Props {
  byHour: WeatherDatabyHour[];
}

const WeatherHoursList: React.FC<Props> = ({ byHour }) => {
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
