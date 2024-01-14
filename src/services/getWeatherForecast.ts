import { WeatherForecastT } from '@/types/weatherForecast';

const BASE_URL = 'https://api.openweathermap.org/data/3.0';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherForecast = (latitude: number, longitude: number) => {
  return new Promise<WeatherForecastT>((resolve, reject) => {
    fetch(
      `${BASE_URL}/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};
