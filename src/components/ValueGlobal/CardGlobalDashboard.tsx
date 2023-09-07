import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import NumberDisplay from "../Number/NumberDisplay";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../../utils/axios';

const CardGlobal = () => {
  const [userPortfolioValuation, setUserPortfolioValuation] = useState([]);
  const [totalInvested, setTotalInvested] = useState(0); 
  const [profitAndloss, setProfitAndLoss] = useState(0);
  const [ROIglobal, setROIglobal] = useState(0);
  const { portfolioId } = useParams(); 

    useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
       
        const response = await axiosInstance.get(`/api/stats`);
        
       console.log("response", response)
      
        setUserPortfolioValuation(response.data.portfolioValuation);
        setTotalInvested(response.data.totalInvestedPortfolios);
        setProfitAndLoss(response.data.profitAndLoss);
        setROIglobal(response.data.allPortfolioROIPercent)


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
    <div style={containerStyle} className=" border border-indigo-900 hover:border-dotted p-10 rounded-2xl shadow-lg h-full">
      <div className="relative flex w-full justify-center content-start text-white text-2xl mb-2  p-2 font-bold">Valorisation Globale</div>
        <p className="text-lg text-white font-bold m-2"> <NumberDisplay value={parseFloat(userPortfolioValuation).toFixed(2)} /></p>
      
      
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        <div className="text-lg text-white"> Total investi </div>
        <div className="text-lg text-white">Gains / Pertes</div>
        <div className="text-lg text-white"> <NumberDisplay value={totalInvested.toFixed(2)}/></div>
        <div className="text-lg text-white"> <NumberDisplay value={profitAndloss.toFixed(2)}/></div>
      </div>
       
       
        {ROIglobal !== null && ROIglobal !== undefined ? (
  <p className="text-lg text-white pt-4">
    Retour sur Investissement  <NumberPourcentDisplay value={ROIglobal.toFixed(2)} />
  </p>
) : (
  <p className="text-lg text-white">Retour sur Investissement <span className="text-green-500"> 0% </span></p>
)}
    
    </div>
  );
};

export default CardGlobal;

