import NumberDisplayPercent from "../Number/NumberPourcentDisplay";
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
        
       console.log("response api stat", response)
      
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


  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <h3 className="text-lg font-semibold mb-4">Valorisation Globale des Portfolios</h3>
      <p>Total des portfolios : {parseFloat(userPortfolioValuation).toFixed(2)} $</p>
      <p> Total investi :  {totalInvested.toFixed(2)} $</p>
      <div className="grid flex font-color ">
        <p> Profit and Loss : <NumberDisplay value={profitAndloss.toFixed(2)} /></p>
        <p> ROI Global : <NumberDisplayPercent value={ROIglobal.toFixed(2)}/> </p>
      </div>
    </div>
  );
};

export default CardGlobal;

