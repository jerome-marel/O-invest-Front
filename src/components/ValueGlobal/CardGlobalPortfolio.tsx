import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';

const CardGlobal = () => {
  
  const [profitloss, setProfitLoss] = useState(0);
  const [ROIPercent, setROIPercent] = useState(0);
  const [valorisation, setValorisation] = useState (0);
  const { portfolioId } = useParams();

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await axiosInstance.get(`/api/portfolios/${portfolioId}/roi`);
        console.log(response.data)
        
        setProfitLoss(response.data.profitAndLoss); 
        setROIPercent(response.data.portfolioROIPercent); 
        setValorisation(response.data.portfolioValuation); 
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      }
    };

    fetchPortfolioData();
  }, [portfolioId]);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Valorisation Global du Portfolio</h3>
      <p>Valorisation Global: {valorisation} $</p> 
      <p>ROI:  <NumberPourcentDisplay value={ROIPercent} /></p>
      <p> Profit / Loss : <NumberDisplay value={profitloss} /></p> 
      
    
    </div>
  );
};

export default CardGlobal;

