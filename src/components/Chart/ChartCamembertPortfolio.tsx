import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const formatPercentage = (value, total) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return `${percentage}%`;
};

const options = {
  cutout: 80,
  spacing: 5, 
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context) => {
          const value = context.parsed;
          const sum = context.dataset.data.reduce((a, b) => a + b, 0);
          return formatPercentage(value, sum);
        },
      },
    },
  },
  animation: {
    animateRotate: true,
    animateScale: true,
  },
};

interface ChartCamembertProps {
  userPortfolioAssets: {
    name: string;
    remainingQuantity: number;
    historicPrice: number;
  }[];
}

const ChartCamembert = ({ userPortfolioAssets }: ChartCamembertProps) => {
  console.log('userPortfolioAssets in ChartCamembert:', userPortfolioAssets);

 
  if (!userPortfolioAssets || userPortfolioAssets.length === 0) {
    return <div>Données indisponibles ou invalides</div>;
  }

  const labels = userPortfolioAssets.map((asset) => asset.name);

  const values = userPortfolioAssets.map((asset) => {
    const value = asset.remainingQuantity * asset.historicPrice;
    return parseFloat(value.toFixed(2));
  });

  const backgroundColors = [
    '#FF5733', '#FFC300', '#36A2EB', '#FF33FF', '#00FF00',
    '#FFFF00', '#FF6600', '#0066CC', '#9900CC', '#009900'
  ];

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors.map((color) => color + '80'),
        borderWidth: 2,
        
      },
    ],
  };

  return (
    <div className="w-21 h-21">
      <Doughnut data={chartData} options={options} />
    </div>
  );
};

export default ChartCamembert;
