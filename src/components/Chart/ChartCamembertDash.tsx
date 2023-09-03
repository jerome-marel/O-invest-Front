// import { Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip);

// const formatPercentage = (value, total) => {
//   const percentage = ((value / total) * 100).toFixed(2);
//   return `${percentage}%`;
// };

// const data = {
//   labels: ['Portefeuille 1', 'Portefeuille 2', 'Portefeuille 3'],
//   datasets: [
//     {
//       data: [60, 25, 15],
//       backgroundColor: ['#FF5733', '#FFC300', '#36A2EB'],
//       hoverBackgroundColor: ['#FF8140', '#FFD233', '#5AC6FA'],
//       borderWidth: 4,
//     },
//   ],
// };

// const options = {
//   cutout: 70,
//   responsive: true,
//   maintainAspectRatio: true,
//   plugins: {
//     datalabels: {
//       color: '#fff',
//       formatter: (value, ctx) => {
//         let sum = 0;
//         let dataArr = ctx.chart.data.datasets[0].data;
//         dataArr.map(data => {
//           sum += data;
//         });
//         return formatPercentage(value, sum);
//       },
//     },
//   },
//   animation: {
//     animateRotate: true,
//     animateScale: true,
//   },
// };


// const ChartCamembert = () => {
//   return (
//     <div className="w-21 h-21">
//       <Doughnut data={data} options={options} />
//     </div>
//   );
// };

// export default ChartCamembert;



import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const ChartCamembert = ({ portfolioValuations }) => {
  const data = {
    labels: portfolioValuations.map((valuation) => valuation.portfolioName),
    datasets: [
      {
        data: portfolioValuations.map((valuation) => valuation.totalValuation),
        backgroundColor: ['#FF5733', '#FFC300', '#36A2EB', '#FF33FF', '#00FF00',
        '#FFFF00', '#FF6600', '#0066CC', '#9900CC', '#009900'], 
        
        borderWidth: 4,
      },
    ],
  };

  const options = {
    cutout: 70,
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
        color: '#fff',
        formatter: ( ctx) => {
          let sum = 0;
          let dataArr = ctx.chart.data.datasets[0].data;
          dataArr.map(data => {
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
  };

  return (
    <div className="w-21 h-21">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ChartCamembert;


