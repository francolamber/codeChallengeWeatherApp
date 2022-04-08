import { useSelector } from "react-redux";
import { selectDisplayWeatherResults } from "./reduxStore/weather/selectors/selectWeather";
import * as React from "react";
import Header from "./components/Header/Header";
import FormContainer from "./components/FormContainer/FormContainer";
import { AppStyled } from "./App.styles";

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
