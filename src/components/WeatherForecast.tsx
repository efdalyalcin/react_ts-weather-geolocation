import useGeolocation from '@/hooks/useGeolocation';
import { getWeatherForecast } from '@/services/getWeatherForecast';
import { useEffect } from 'react';

export default function WeatherForecast() {
  const { longitude, latitude } = useGeolocation();

  useEffect(() => {
    getWeatherForecast(latitude, longitude);
  }, []);

  return <div>Weather Forecast</div>;
}
