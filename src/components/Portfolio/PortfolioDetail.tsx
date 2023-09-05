import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGlobalPortfolio from '../ValueGlobal/CardGlobalPortfolio';
import ChartCamembert from '../../components/Chart/ChartCamembertPortfolio';
import { axiosInstance } from '../../utils/axios';
import Asset from './Asset';
import GraphPortfolio from './GraphPortfolio';
import NumberDisplay from '../Number/NumberDisplay';

// Créez des types pour portfolio et userPortfolioAssets
interface Portfolio {
  name: string;
  totalInvested: number;
  strategy: string;
  // Autres propriétés du portefeuille
}

interface PortfolioAsset {
  id: number; // L'identifiant unique de l'actif
  name: string; // Le nom de l'actif (par exemple, "ADP")
  remainingQuantity: number; // La quantité restante de l'actif (par exemple, 45)
  value: number; // La valeur de l'actif (par exemple, 1254.58)
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

  const containerStyle = {
    background: 'linear-gradient(169deg, rgba(16,14,36,1) 30%, rgba(23,24,80,1) 52%, rgba(49,75,177,1) 93%, rgba(46,50,173,1) 100%)',
    display: 'flex flex-wrap justify-center gap-10',
    flexDirection: 'column',
  };
  
  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex  ',
    flexDirection: 'column',
  };
  
  return (
      
    <div style={containerStyle} className="grid grid-cols-1 justify-center ">
      {/* Left Column */}
      <div style={containerStyle} className="grid grid-cols-1 lg:grid-cols-[400px,320px,1fr] justify-between round mx-10 border border-indigo-900 rounded-2xl p-5 gap-5 shadow">
        {/* Moitié gauche */}
        <div className="p-3">
          <div style={containerCardStyle} className="border border-indigo-900 p-10 rounded-2xl shadow-lg mb-4">
            <h2 className="text-2xl text-white font-bold mb-4">{portfolio.portfolio.name}</h2>
            <div className="list-disc pl-6 text-lg text-white">Investissement total : <NumberDisplay value={portfolio.portfolio.totalInvested} /></div>
            <div className="list-disc pl-6 text-lg text-white">Stratégie : {portfolio.portfolio.strategy}</div>
          </div>
          <CardGlobalPortfolio portfolio={portfolio} />
        </div>
  
        {/* Middle Column */}
        <div className="lg:col-span-1 flex flex-col justify-center">
  <div className="w-full justify-center items-center"> 
    <ChartCamembert userPortfolioAssets={userPortfolioAssets} />
  </div>
</div>
  
        {/* Right Column */}
        <div className="lg:col-span-1 h-full mt-5">
          <Asset userPortfolioAssets={userPortfolioAssets} portfolioId={portfolioId} averagePrices={averagePrices} onModalClose={() => {}} handleAddAsset={handleAddAsset} />
        </div>
      </div>
  
      {/* Bottom Column */}
      <div style={containerStyle} className="justify-between round mx-10 mt-10 border border-indigo-900 rounded-2xl p-10 shadow">
        <div className="w-full ">
          <GraphPortfolio userPortfolioAssets={userPortfolioAssets} />
        </div>
      </div>
    </div>
  ); 
};
  

export default PortfolioDetail;
