import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGlobalPortfolio from '../ValueGlobal/CardGlobalPortfolio';
import ChartCamembert from '../../components/Chart/ChartCamembertPortfolio';
import { axiosInstance } from '../../utils/axios';
import Asset from './Asset';
import AddAssetButton from '../AddAssetButton';

const PortfolioDetail = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null); // Initial value set to null
  const [userPortfolioAssets, setUserPortfolioAssets] = useState([]); // Initial value set to an empty array

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/api/portfolios/${portfolioId}`);
        setPortfolio(response.data.portfolio);
        setUserPortfolioAssets(response.data.userPortfolioAssets);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, [portfolioId]);

  if (!portfolio) {
    return <div className="bg-gray-100 p-4">Pas de portefeuille</div>;
  }

  const handleAddAsset = (asset) => {
    setUserPortfolioAssets([...userPortfolioAssets, asset]); // Adding the new asset to the existing array
  };

  return (
    <>
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">{portfolio.name}</h2>
        <p className="mb-2">{portfolio.strategy}</p>
        <div className="flex justify-end">
          <AddAssetButton onModalClose={() => {}} portfolioId={portfolioId} handleAddAsset={handleAddAsset} />
        </div>
        {/* Other content */}
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <CardGlobalPortfolio userPortfolioAssets={userPortfolioAssets} portfolio={portfolio} />
          <ChartCamembert portfolioData={{ userPortfolioAssets }} /> 
          <Asset userPortfolioAssets={userPortfolioAssets} portfolioId={portfolioId} />
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
