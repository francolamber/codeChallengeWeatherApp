import axios from "axios";
import api_geocoding_onelineaddress from "../mokData/api_geocoding_onelineaddress";
import api_weather_points from "../mokData/api_weather_points";
import api_weather_forecast from "../mokData/api_weather_forecast";
import api_weather_forecast_hourly from "../mokData/api_weather_forecast_hourly";

export const getGeocodingLatLong = async ({ mokedData, input }) => {
  const geocodingOneLineAddressURL = `https://cors-anywhere.herokuapp.com/https://geocoding.geo.census.gov/geocoder/locations/onelineaddress?format=json&benchmark=2020&address=${input}`;

  const geocoding = mokedData
    ? api_geocoding_onelineaddress
    : await axios.get(geocodingOneLineAddressURL);

  const geocodingData = geocoding.data.result;

  const lat = geocodingData?.addressMatches[0]?.coordinates?.y;
  const long = geocodingData?.addressMatches[0]?.coordinates?.x;

  return { lat, long };
};

export const getWeatherPoints = async ({ lat, long, mokedData }) => {
  const weatherPointsURL = `https://api.weather.gov/points/${lat},${long}`;

  const weatherPoints = mokedData
    ? api_weather_points
    : await axios.get(weatherPointsURL);
  return weatherPoints.data.properties;
};

export const getWeatherForecast = async ({
  gridX,
  gridY,
  gridId,
  mokedData,
}) => {
  const weatherForecastURL = `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast/`;

  const weatherDays = mokedData
    ? api_weather_forecast
    : await axios.get(weatherForecastURL);

  return weatherDays?.data?.properties?.periods;
};

export const getWeatherForecastHourly = async ({
  gridX,
  gridY,
  gridId,
  mokedData,
}) => {
  const weatherForecastHourlyURL = `https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast/hourly`;

  const weatherHours = mokedData
    ? api_weather_forecast_hourly
    : await axios.get(weatherForecastHourlyURL);

  return weatherHours?.data?.properties?.periods;
};

export const getGroupsByDay = (weatherDaysData) => {
  return weatherDaysData.reduce((groups, weather) => {
    const date = weather.startTime.split("T")[0];

    groups[date] = groups[date] ?? [];
    groups[date].push(weather);
    return groups;
  }, {});
};

export const getGroupsByHours = (weatherHoursData) => {
  return weatherHoursData.reduce((groups, weather) => {
    const date = weather.startTime.split("T")[0];

    groups[date] = groups[date] ?? [];
    groups[date].push(weather);
    return groups;
  }, {});
};

export const getGroupDayArrays = ({ weatherDaysData, weatherHoursData }) => {
  const groupsByDay = getGroupsByDay(weatherDaysData);
  const groupsHours = getGroupsByHours(weatherHoursData);

  return Object.keys(groupsByDay).map((date) => {
    return {
      date,
      icon: groupsByDay[date][0]?.icon,
      max: groupsByDay[date][0]?.temperature,
      min: groupsByDay[date][1]?.temperature,
      shortForecast: groupsByDay[date][0]?.shortForecast,
      detailedForecast: groupsByDay[date][0]?.detailedForecast,
      temperatureUnit: groupsByDay[date][0]?.temperatureUnit,
      windDirection: groupsByDay[date][0]?.windDirection,
      windSpeed: groupsByDay[date][0]?.windSpeed,
      isDaytime:
        groupsByDay[date][0]?.isDaytime ||
        groupsByDay[date][1]?.isDaytime ||
        false,
      isDayComplete: !!groupsByDay[date][0] && !!groupsByDay[date][1],
      byHour: groupsHours[date],
    };
  });
};

export const getWeatherData = async ({ input, mokedData }) => {
  const geocodingData = await getGeocodingLatLong({ input, mokedData });

  const weatherPointsData = await getWeatherPoints({
    lat: geocodingData?.lat,
    long: geocodingData?.long,
    mokedData,
  });

  const weatherDaysData = await getWeatherForecast({
    gridX: weatherPointsData?.gridX,
    gridY: weatherPointsData?.gridY,
    gridId: weatherPointsData?.gridId,
    mokedData,
  });

  const weatherHoursData = await getWeatherForecastHourly({
    gridX: weatherPointsData?.gridX,
    gridY: weatherPointsData?.gridY,
    gridId: weatherPointsData?.gridId,
    mokedData,
  });

  const groupDayArrays = getGroupDayArrays({
    weatherDaysData,
    weatherHoursData,
  });

  return groupDayArrays;
};
