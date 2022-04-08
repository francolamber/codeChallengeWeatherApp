import types from "../types";
import { NETWORK_STATUS } from "../../../utilities/constants/networkStatus";

export const clearWeather = () => ({
  type: types.GET_WEATHER,
  payload: {
    status: NETWORK_STATUS.READY,
    data: [],
    error: "",
    errorMessage: "",
  },
});
