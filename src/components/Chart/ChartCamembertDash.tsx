import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const formatPercentage = (value, total) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return `${percentage}%`;
};

const data = {
  labels: ['Portefeuille 1', 'Portefeuille 2', 'Portefeuille 3'],
  datasets: [
    {
      data: [60, 25, 15],
      backgroundColor: ['#FF5733', '#FFC300', '#36A2EB'],
      hoverBackgroundColor: ['#FF8140', '#FFD233', '#5AC6FA'],
      borderWidth: 4,
    },
  ],
};

const options = {
  cutout: 70,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    datalabels: {
      color: '#fff',
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
          sum += data;
        });
        return formatPercentage(value, sum);
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};


const ChartCamembert = () => {
  return (
    <div className="w-21 h-21">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartCamembert;
