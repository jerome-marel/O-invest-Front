import { useParams } from 'react-router-dom'; 
import CardGlobal from "../../components/ValueGlobal/CardGlobal";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";

const PortfolioDetail = () => {
  const { portfolioId } = useParams();

  const portfolioData = {
    1: { name: 'Portfolio 1', description: 'Description du portfolio 1', value: '10 000$' },
    2: { name: 'Portfolio 2', description: 'Description du portfolio 2', value: '1500$' },
    3: { name: 'Portfolio 3', description: 'Description du portfolio 3', value: '2000$' },
    
  };

  const portfolio = portfolioData[portfolioId];

  if (!portfolio) {
    return <div className="bg-gray-100 p-4">Portefeuille non trouvé.</div>;
  }

  return (
    <> 
    <div className="bg-gray-100 p-4">
      <h2 className="text-xl font-bold mb-4">{portfolio.name}</h2>
      <p className="mb-2">{portfolio.description}</p>
      <p>Valeur : {portfolio.value}</p>
    </div>


<div className="flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-wrap justify-center mt-10 gap-10">
  <CardGlobal />
  <ChartCamembert/>

  
  </div>
  



    </div>

    </>
  );

  
};

export default PortfolioDetail;
