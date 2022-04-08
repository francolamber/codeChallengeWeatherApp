import { AppState } from "../../reducer";
import { createSelector } from "reselect";
import { WeatherData } from "../typings";

export const selectWeather = ({ weather }: AppState): WeatherData[] =>
  weather.data;

export const selectDisplayWeatherResults = createSelector(
  selectWeather,
  (weatherData: WeatherData[]): boolean => {
    return weatherData?.length > 0;
  }
);
