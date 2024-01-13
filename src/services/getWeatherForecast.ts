const BASE_URL = 'https://api.openweathermap.org/data/3.0';
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export const getWeatherForecast = (latitude: number, longitude: number) => {
  return new Promise<string[]>((resolve, reject) => {
    fetch(
      `${BASE_URL}/onecall?lat=${latitude}&lon${longitude}&apiid=${API_KEY}`
      // 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m'
    )
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => resolve(res.data))
      .catch((error) => reject(error));
  });
};
