import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioDetail = () => {
  const { portfolioId } = useParams();

  const portfolioData = {
    1: { name: 'Portfolio 1', description: 'Description du portfolio 1', value: '1000$' },
    2: { name: 'Portfolio 2', description: 'Description du portfolio 2', value: '1500$' },
    3: { name: 'Portfolio 3', description: 'Description du portfolio 3', value: '2000$' },
    // ...
  };

  const portfolio = portfolioData[portfolioId];

  if (!portfolio) {
    return <div className="bg-gray-100 p-4">Portefeuille non trouvé.</div>;
  }

  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">{portfolio.name}</h2>
      <p className="mb-2">{portfolio.description}</p>
      <p>Valeur : {portfolio.value}</p>
    </div>
  );
};

export default PortfolioDetail;
