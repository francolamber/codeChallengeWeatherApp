import types from "../types";
import { NETWORK_STATUS } from "../../../utilities/constants/networkStatus";
import { getWeatherData } from "../helpers";

export const getWeather =
  (city) =>
  async (dispatch): Promise<void> => {
    const mokedData = city === "mok" ? true : false;
    const input = encodeURIComponent(city);

    try {
      dispatch({
        type: types.GET_WEATHER,
        payload: {
          status: NETWORK_STATUS.FETCHING,
          data: [],
          error: "",
          errorMessage: "",
        },
      });

      const data = await getWeatherData({ input, mokedData });

      dispatch({
        type: types.GET_WEATHER,
        payload: {
          status: NETWORK_STATUS.READY,
          data,
        },
      });
    } catch (err) {
      dispatch({
        type: types.GET_WEATHER,
        payload: {
          status: NETWORK_STATUS.ERROR,
          data: [],
          error: err,
          errorMessage:
            "An unexpected problem has occurred. Try again later or type mok to get mocked data.",
        },
      });
      console.log(`Error getting weather: ${err}`);
    }
  };
