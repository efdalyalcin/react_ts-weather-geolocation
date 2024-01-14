type DailyWeather = {
  dt: number;
  temp: {
    day: number;
  };
};

export type WeatherForecastT = {
  current: {
    dt: number;
    temp: number;
  };
  daily: DailyWeather[];
};
