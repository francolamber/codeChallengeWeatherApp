import styled, { css } from "styled-components";

export const Card = styled.div`
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

export const DateContainer = styled.div`
  margin-right: 10px;
`;

export const DayOfWeek = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export const IconWeather = styled.img`
  border-radius: 15px;
  opacity: 0.8;
  width: 60px;
`;

export const IconContainer = styled.div`
  margin: 0 20px;
`;

export const TemperaturesValue = styled.div`
  display: flex;
  align-items: flex-end;

  ${(props) =>
    props.singleTemperature &&
    css`
      margin: 0 12px 0 24px;
    `};
`;

export const TemperaturText = styled.div`
  margin-left: 3px;
  font-weight: 500;
`;

export const TemperaturMax = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const TemperaturMin = styled.div`
  margin: 0px 0 7px 6px;
  color: #585858;
`;

export const ForecastContainer = styled.div`
  width: 150px;
  margin: 0 10px;
`;

export const WindContainer = styled.div`
  width: 70px;
`;

export const ArrowButtonContainer = styled.div`
  padding-left: 15px;
`;
