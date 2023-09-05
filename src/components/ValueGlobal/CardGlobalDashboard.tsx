
import NumberDisplay from "../Number/NumberDisplay";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../../utils/axios';

const CardGlobal = () => {
  const [userPortfolioValuation, setUserPortfolioValuation] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0); 
  const [profitAndloss, setProfitAndLoss] = useState(0);
  const { portfolioId } = useParams(); 

    useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
       
        const response = await axiosInstance.get(`/api/stats`);
        
       console.log("response", response)
      
        setUserPortfolioValuation(response.data.portfolioValuation);
        setTotalInvested(response.data.totalInvestedPortfolios);
        setProfitAndLoss(response.data.profitAndLoss);


      } catch (error) {
        console.error('Erreur lors de la récupération des données du portfolio :', error);
      }
    };

    fetchPortfolioData();
  }, [portfolioId]); 

  const containerStyle = {
    // background: 'linear-gradient(83deg, rgba(8,11,41,1) 25%, rgba(26,28,96,1) 52%)', // Ajustez la hauteur en fonction de vos besoins
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div style={containerStyle} className=" border border-indigo-900 hover:border-dotted p-10 rounded-2xl shadow-lg">
      <div className="relative flex w-full justify-center content-start text-white text-2xl mb-12 p-2">Valorisation Globale des Portfolios</div>
        <div className="text-lg text-white">Total des portfolios : <NumberDisplay value={parseFloat(userPortfolioValuation).toFixed(2)} /></div>
        <div className="text-lg text-white"> Total investi :  <NumberDisplay value={totalInvested.toFixed(2)} /></div>
        <div className="text-lg text-white"> Profit and Loss : <NumberDisplay value={profitAndloss.toFixed(2)} /></div>
    </div>
  );
};

export default CardGlobal;

