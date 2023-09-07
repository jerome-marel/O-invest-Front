import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const formatPercentage = (value, total) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return `${percentage}%`;
};


const options = {
  cutout: 130,
  
  spacing:5,
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
elements: {
  arc: {
    borderRadius: 30,
    
  },
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

  // Vérifier si les données sont valides
  if (!userPortfolioAssets || userPortfolioAssets.length === 0) {
    return <div className='text-white'>Données indisponibles ou invalides</div>;
  }

  const labels = userPortfolioAssets.map((asset) => asset.name);

  // Calculer les valeurs pour chaque actif

  const values = userPortfolioAssets.map((asset) => {
    const value = asset.remainingQuantity * asset.historicPrice;
    return parseFloat(value.toFixed(2));
  });

  const backgroundColors = [

    //'#D73A1C', '#CC9F00', '#2E7FC2', '#CC29CC', '#00CC00',
    //'#CCCC00', '#CC5500', '#0054A3', '#7D0099', '#007D00'

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
        borderWidth: 0,
        
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
