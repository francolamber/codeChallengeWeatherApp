import types from "../types";
import { NETWORK_STATUS } from "../../../utilities/constants/networkStatus";
import { getWeatherData } from "../helpers";
import axios from "axios";

export const getWeather =
  (address) =>
  async (dispatch): Promise<void> => {
    const mokedData = address === "mok" ? true : false;
    const input = encodeURIComponent(address);
    let data = [];

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

      if (mokedData || !process.env.REACT_APP_SERVER) {
        data = await getWeatherData({ input, mokedData });
      } else {
        const dataFromServer = await axios.get(
          `${process.env.REACT_APP_SERVER}?address=${input}`
        );

        data = dataFromServer?.data;
      }

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
            "An unexpected problem has occurred. Type mok to get mocked data or type eg: 654 Market St, San Diego",
        },
      });
      console.log(`Error getting weather: ${err}`);
    }
  };
