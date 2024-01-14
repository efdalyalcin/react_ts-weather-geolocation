import { WeatherForecastT } from '@/types/weatherForecast';

export const BASE_URL = 'https://api.openweathermap.org/data/3.0';

// I am using a .env file to reach the API_KEY, please input yours here
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherForecast = (latitude: number, longitude: number) => {
  return new Promise<WeatherForecastT>((resolve, reject) => {
    fetch(
      `${BASE_URL}/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((res) => resolve(res))
      .catch((error) => reject(error));
  });
};
