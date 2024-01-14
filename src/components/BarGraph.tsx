import useBarGraphInputStore from '@/store/barGraphInputStore';
import { Bar } from 'react-chartjs-2';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const createData = (data: number[]) => {
  return {
    labels: ['First Input', 'Second Input', 'Third Input', 'Fourth Input'],
    datasets: [
      {
        label: 'Generated Chart',
        data: [...data],
        backgroundColor: [
          'rgba(3, 57, 108, 0.3)',
          'rgba(0, 91, 150, 0.3)',
          'rgba(100, 151, 177, 0.3)',
          'rgba(179, 205, 224, 0.3)',
        ],
        borderColor: [
          'rgb(3, 57, 108)',
          'rgb(0, 91, 150)',
          'rgb(100, 151, 177)',
          'rgb(179, 205, 224)',
        ],
        borderWidth: 2,
      },
    ],
  };
};

export default function BarGraph() {
  const { inputOne, inputTwo, inputThree, inputFour } = useBarGraphInputStore();

  // this is an external function and runs in every store change. It is already optimized.
  const data = createData([inputOne, inputTwo, inputThree, inputFour]);

  return (
    <div className="max-w-screen-md mx-auto mt-6 px-4 flex justify-center">
      <Bar data={data} />
    </div>
  );
}
