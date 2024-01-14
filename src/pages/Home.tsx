import BarGraph from '@/components/BarGraph';
import Footer from '@/components/Footer';
import FormButton from '@/components/FormButton';
import WeatherForecast from '@/components/WeatherForecast';

export default function Home() {
  return (
    <main className="h-screen relative max-w-7xl mx-auto min-w-96">
      <FormButton />
      <BarGraph />
      <WeatherForecast />
      <Footer />
    </main>
  );
}
