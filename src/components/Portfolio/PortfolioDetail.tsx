import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGlobalPortfolio from '../ValueGlobal/CardGlobalPortfolio';
import ChartCamembert from '../../components/Chart/ChartCamembertPortfolio';
import { axiosInstance } from '../../utils/axios';
import Asset from './Asset';

import GraphPortfolio from './GraphPortfolio';

interface Portfolio {
  name: string;
  totalInvested: number;
  strategy: string;
  // Autres propriétés du portefeuille
}

interface PortfolioAsset {
  id: number;
  name: string;
  remainingQuantity: number;
  value: number;
  // Ajoutez d'autres propriétés si nécessaire
}

const PortfolioDetail = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState<Portfolio | null>(null);
  const [userPortfolioAssets, setUserPortfolioAssets] = useState<PortfolioAsset[]>([]);
  const [averagePrices, setAveragePrices] = useState({}); 
  const [addAsset, setAddAsset] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/api/portfolios/${portfolioId}`);
        setPortfolio(response.data);
        console.log("response portfolio", response)

        const userPortfolioAssets = response.data.userPortfolioAssets.map((asset) => ({
          ...asset,
          remainingQuantity: parseFloat(asset.remainingQuantity),
        }));

        setUserPortfolioAssets(userPortfolioAssets);

        
        const averagePricesResponse = await axiosInstance.get(`/api/portfolios/${portfolioId}/avg`);
        setAveragePrices(averagePricesResponse.data.averagePrices);
        console.log("response avg", averagePricesResponse)

        // const AddAssetData = await axiosInstance.get(`/api/portfolios/${portfolioId}/addasset`); 
        
        // setAddAsset(AddAssetData)
        // console.log("Adassetadataa",AddAssetData)


      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };



    fetchPortfolio();
  }, [portfolioId]);

  if (!portfolio) {
    return <div className="bg-gray-100 p-4">Pas de portefeuille</div>;
  }

  const handleAddAsset = (asset: PortfolioAsset) => {
    setUserPortfolioAssets([...userPortfolioAssets, asset]);
  };

  return (
    <div className="bg-[#131722]  min-h-screen flex flex-col justify-center items-center">
      <div className="w-full">
        <div className=" bg-blur bg-[#0c0e15] text-white p-4 rounded-2xl shadow-md  m-6 w-1/3">
          <h2 className="text-xl font-bold mb-4">{portfolio.portfolio.name}
          {console.log("testestssetset",portfolio)}</h2>

          <div className="mt-6 ">
            <h3 className="text-lg font-semibold mb-2">Détails du portefeuille</h3>
            <div className="list-disc pl-6">
              <div>Investissement total : {portfolio.portfolio.totalInvested}</div>
              <div className="mb-2">Stratégie : {portfolio.portfolio.strategy}</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-20 w-full m-6">
          <div className="w-1/3">
            <CardGlobalPortfolio portfolio={portfolio} />
          </div>
          <div>
            <ChartCamembert userPortfolioAssets={userPortfolioAssets} />
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-4 w-full flex-wrap" >
        <Asset userPortfolioAssets={userPortfolioAssets} portfolioId={portfolioId} averagePrices={averagePrices} onModalClose={() => {}} handleAddAsset={handleAddAsset} AddAssets={addAsset} />
        
      </div>

      <div className="mt-auto w-full">
        <GraphPortfolio userPortfolioAssets={userPortfolioAssets} />
      </div>
    </div>
  );
};

export default PortfolioDetail;
