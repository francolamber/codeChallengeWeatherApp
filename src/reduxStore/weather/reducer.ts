import types from "./types";
import { WeatherDataIntialState } from "./typings";

const initialState: WeatherDataIntialState = {
  data: [],
  status: null,
  error: "",
  errorMessage: "",
};

const weather = (
  state = initialState,
  { type, payload }
): WeatherDataIntialState =>
  Object.hasOwnProperty.call(types, type)
    ? Object.assign({}, state, payload)
    : state;

export default weather;
