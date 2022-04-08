import { NETWORK_STATUS } from "../../utilities/constants/networkStatus";

export interface WeatherDatabyHour {
  number: number;
  name: string;
  startTime: Date;
  endTime: Date;
  isDaytime: boolean;
  temperature: number;
  temperatureUnit: string;
  temperatureTrend: string;
  windSpeed: string;
  windDirection: string;
  icon: string;
  shortForecast: string;
  detailedForecast: string;
}

export interface WeatherData {
  date: Date;
  icon: string;
  max: number;
  min: number;
  windDirection: string;
  windSpeed: string;
  shortForecast: string;
  isDaytime: boolean;
  byHour: WeatherDatabyHour[];
}

export interface WeatherDataIntialState {
  data: WeatherData[];
  status: NETWORK_STATUS;
  error: string;
  errorMessage: string;
}
