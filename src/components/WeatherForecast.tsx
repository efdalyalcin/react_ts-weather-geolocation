import useGeolocation from '@/hooks/useGeolocation';
import { getWeatherForecast } from '@/services/getWeatherForecast';
import { useEffect, useState } from 'react';
import { WeatherForecastT } from '@/types/weatherForecast';
import formatDate from '@/helpers/formatDate';
import { mockData } from '@/services/mockData';

import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

//#region Line Chart options => add the degree symbol & date label
const options = {
  scales: {
    y: {
      ticks: {
        callback: (value: string | number) => `${value} °C`, // Add the degree symbol
      },
    },
    x: {
      title: {
        display: true,
        text: 'Date (DD.MM)',
      },
    },
  },
};
//#endregion

const createLineChartDataFromWeatherForecast = (data: WeatherForecastT) => {
  const labels = ['Current'];
  const temperatures = [data.current.temp];

  data.daily.forEach((daily) => {
    labels.push(formatDate(daily.dt));
    temperatures.push(daily.temp.day);
  });

  const datasets = [
    {
      label: 'Weather Forecast',
      data: [...temperatures],
      backgroundColor: ['rgba(179, 205, 224, 0.3)'],
      fill: true,
      borderColor: 'rgb(100, 151, 177)',
      tension: 0.1,
    },
  ];

  return { labels, datasets };
};

export default function WeatherForecast() {
  const { latitude, longitude, error } = useGeolocation();
  const [data, setData] = useState<WeatherForecastT | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getWeatherForecast(latitude, longitude);
        setData(data);
      } catch (error) {
        alert(`Error fetching weather data: ${error}`);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  // Chart JS doesn't let you import types. For type safety reasons this is used outside of useEffect
  const formattedData = data
    ? createLineChartDataFromWeatherForecast(data)
    : null;

  // API sometimes gives cors error, in that case you can use this line of code to see the apps function.
  // const formattedData = createLineChartDataFromWeatherForecast(mockData);

  // geolocation error alert handler
  if (error) {
    alert(error);
  }

  return (
    <div className="max-w-screen-md mx-auto px-4 flex justify-center relative">
      {formattedData ? (
        <Line data={formattedData} options={options} />
      ) : (
        <p className="mt-4 text-slate-600">
          Weather forecast data is not available for now!
        </p>
      )}
    </div>
  );
}
