
// import NumberDisplay from "../Number/NumberDisplay";
// import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../../utils/axios';

const CardGlobal = () => {
  const [userPortfolioAssets, setUserPortfolioAssets] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0); // State pour stocker le total investi
  const { portfolioId } = useParams(); 

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axiosInstance.get(`/api/portfolios/${portfolioId}`);
        
        setUserPortfolioAssets( response.data.userPortfolioAssets);
        setTotalInvested( response.data.portfolio.totalInvested); 
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, [portfolioId]); 

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Valorisation Global des Portfolios</h3>
      <p>Total Invested: {totalInvested} $</p> {/* Affichage du total investi */}
      <p className="grid flex grid-cols-2 font-color text-2xl">
        {/* <NumberDisplay value={Data.changeValue} />
        <NumberPourcentDisplay value={Data.changePercentage} /> */}
      </p>
    </div>
  );
};

export default CardGlobal;

