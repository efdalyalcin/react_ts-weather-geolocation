import BarGraph from '@/components/BarGraph';
import FormButton from '@/components/FormButton';
import WeatherForecast from '@/components/WeatherForecast';

export default function Home() {
  return (
    <main className="h-screen relative max-w-7xl mx-auto min-w-96">
      <FormButton />
      <div className="max-w-screen-md mx-auto mt-4 px-4">
        <BarGraph />
      </div>
      <WeatherForecast />
    </main>
  );
}
