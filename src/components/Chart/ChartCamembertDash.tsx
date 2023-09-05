



import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const ChartCamembert = ({ portfolioValuations }) => {
  const data = {
    labels: portfolioValuations.map((valuation) => valuation.portfolioName),
    datasets: [
      {
        data: portfolioValuations.map((valuation) => valuation.totalValuation),
        backgroundColor: ['#D73A1C', '#CC9F00', '#2E7FC2', '#CC29CC', '#00CC00',
        '#CCCC00', '#CC5500', '#0054A3', '#7D0099', '#007D00'], 
        
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: 115,
    spacing:5,
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.parsed || 0;
            const dataset = context.dataset || {};
            const total = dataset.data.reduce((acc, current) => acc + current, 0);
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${percentage}%`;
          },
        },
      },
      datalabels: {
        color: '#fff', // Couleur du texte (peut être supprimée ou modifiée)
        formatter: (ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map((data) => {
            sum += data;
          });
          return '';
        },
      },
    },
    animation: {
      animateRotate: true,
      animateScale: true,
    },
    elements: {
      arc: {
        borderRadius: 30,
        
        
      },
    },
  };
  

  return (
    <div className="w-21 h-21">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartCamembert;


