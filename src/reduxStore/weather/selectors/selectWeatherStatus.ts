import { NETWORK_STATUS } from "../../../utilities/constants/networkStatus";
import { AppState } from "../../reducer";

export const selectWeatherStatus = ({ weather }: AppState): NETWORK_STATUS =>
  weather.status;
