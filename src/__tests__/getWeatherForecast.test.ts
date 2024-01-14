import { BASE_URL, getWeatherForecast } from '@/services/getWeatherForecast';
import { describe, it, expect, vi } from 'vitest';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

const latitude = 123;
const longitude = 456;

describe('getWeatherForecast', () => {
  it('should make an API call', () => {
    const fetchSpy = vi.spyOn(global, 'fetch');
    getWeatherForecast(latitude, longitude);

    expect(fetchSpy).toHaveBeenCalled();
    fetchSpy.mockRestore();
  });

  it('should use the correct API endpoint with the given latitude and longitude', () => {
    const fetchSpy = vi.spyOn(global, 'fetch');

    return getWeatherForecast(latitude, longitude).then(() => {
      expect(fetchSpy).toHaveBeenCalledWith(
        `${BASE_URL}/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
      );
    });
  });

  it('should handle network errors and reject the promise with the error message', () => {
    vi.spyOn(global, 'fetch').mockRejectedValue(new Error('Network Error'));

    return getWeatherForecast(latitude, longitude).catch((error) => {
      expect(error).toEqual(new Error('Network Error'));
    });
  });

  it('should handle invalid API key and reject the promise with an error message', () => {
    vi.spyOn(global, 'fetch').mockResolvedValue({
      status: 401,
      statusText:
        'Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info.',
    } as Response);

    return getWeatherForecast(latitude, longitude).catch((error) => {
      expect(error).toEqual(
        new Error(
          'Please note that using One Call 3.0 requires a separate subscription to the One Call by Call plan. Learn more here https://openweathermap.org/price. If you have a valid subscription to the One Call by Call plan, but still receive this error, then please see https://openweathermap.org/faq#error401 for more info.'
        )
      );
    });
  });
});
