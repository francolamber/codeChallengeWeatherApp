import { AppState } from "../../reducer";

export const selectWeatherErrorMessage = ({ weather }: AppState): String =>
  weather.errorMessage;
