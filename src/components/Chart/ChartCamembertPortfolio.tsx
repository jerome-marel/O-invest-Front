import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';

ChartJS.register(ArcElement, Tooltip);

const formatPercentage = (value: number, total: number) => {
  const percentage = ((value / total) * 100).toFixed(2);
  return `${percentage}%`;
};

const options = {
  cutout: 70,
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: (context: any) => {
          const value = context.parsed as number;
          const sum = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
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
  portfolioData: {
    userPortfolioAssets: {
      name: string;
      remainingQuantity: string;
    }[];
  };
}

const ChartCamembert = ({ portfolioData }: ChartCamembertProps) => {
  if (!portfolioData || !portfolioData.userPortfolioAssets) {
    return <div>Loading...</div>;
  }

  const userPortfolioAssets = portfolioData.userPortfolioAssets;

  const labels = userPortfolioAssets.map(asset => asset.name);
  const dataValues = userPortfolioAssets.map(asset => parseFloat(asset.remainingQuantity));

  const backgroundColors = [
    '#FF5733',
    '#FFC300',
    '#36A2EB',
    '#FF6384',
    '#63FF84',
    '#84FF63',
    '#6384FF',
    '#D563FF',
  ]; // Ajoutez plus de couleurs si nécessaire

  const totalInvestment = dataValues.reduce((total, value) => total + value, 0);

  const percentageValues = dataValues.map(value => (value / totalInvestment) * 100);

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: percentageValues,
        backgroundColor: backgroundColors,
        hoverBackgroundColor: backgroundColors.map(color => color + '80'), // Légèrement plus clair pour effet au survol
        borderWidth: 4,
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
