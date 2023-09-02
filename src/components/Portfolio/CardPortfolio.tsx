import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NumberDisplay from '../Number/NumberDisplay';
import NumberPourcentDisplay from '../Number/NumberPourcentDisplay';
import AddAssetButton from '../AddAssetButton';
import { axiosInstance } from '../../utils/axios';

const CardPortfolio = ({ portfolio }) => { 
  // Utilisez une seule variable pour stocker le portfolio
  const [portfolioData, setPortfolioData] = useState(null);

  const Navigate = useNavigate();

  const handleCardClick = () => {
    if (portfolioData) {
      Navigate(`/dashboard/portfolio/${portfolioData.portfolio.id}`);
    }
  };

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/api/portfolios/${portfolio.id}`);
        setPortfolioData(response.data); 
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, [portfolio.id]);

  return (
    <div className="bg-white rounded-lg px-5 py-5">
      <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        {portfolioData && (
          <>
            <h1 className="font-bold text-3xl pb-3">{portfolioData.portfolio.name}</h1>
            <p className="font-color "> Valorisation Global: {portfolioData.portfolioValuation} $</p>
            <div className="grid flex grid-cols-2 font-color">
              <p> Profit / Loss:</p> 
              <p> <NumberDisplay value={portfolioData.profitAndLossRounded} /> </p>
             <p> ROI:</p>
              <p> <NumberPourcentDisplay value={portfolioData.portfolioROIPercent} />  </p> 
            </div>
          </>
        )}
      </div>
      <div className="flex justify-end">
        {portfolioData && (
          <AddAssetButton portfolioId={portfolio.id} onModalClose={() => {}} />
        )}
      </div>
    </div>
  );
};

export default CardPortfolio;
