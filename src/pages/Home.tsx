import BarGraph from '@/components/BarGraph';
import Footer from '@/components/Footer';
import FormButton from '@/components/FormButton';
import WeatherForecast from '@/components/WeatherForecast';

const deviderClassname = 'mt-6';

export default function Home() {
  return (
    <main className="relative max-w-7xl mx-auto min-w-96">
      <FormButton />
      <div className={deviderClassname}>
        <BarGraph />
      </div>
      <div className={deviderClassname}>
        <WeatherForecast />
      </div>
      <div className={deviderClassname}>
        <Footer />
      </div>
    </main>
  );
}
