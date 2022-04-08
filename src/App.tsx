import styled, { css } from "styled-components";
import { useSelector } from "react-redux";
import { selectDisplayWeatherResults } from "./reduxStore/weather/selectors/selectWeather";
import * as React from "react";
import Header from "./components/Header";
import FormContainer from "./components/FormContainer";

const AppStyled = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
  color: white;
  text-align: center;

  ${(props) =>
    props.showResults &&
    css`
      justify-content: center;
    `};
`;

const App: React.FC = () => {
  const displayWeatherResults = useSelector(selectDisplayWeatherResults);

  return (
    <AppStyled showResults={!displayWeatherResults}>
      {displayWeatherResults && <Header />}
      <FormContainer />
    </AppStyled>
  );
};

export default App;
