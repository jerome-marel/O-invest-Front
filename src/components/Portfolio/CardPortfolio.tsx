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
        console.log("cardportfolio", response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };

    fetchPortfolio();
  }, [portfolio.id]);

  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex',
    flexDirection: 'column',
  };

  // Ajoutez un style pour tronquer le texte du nom du portefeuille
  const portfolioNameStyle = {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxHeight: '2rem', 
    
  };

  return (
    <div style={containerCardStyle} className="border border-indigo-900 text-white shadow-md rounded-2xl pl-5 pr-1 pt-1 w-72 h-5/6 flex-col justify-between ">
      <div className="flex justify-end">
        {portfolioData && (
          <AddAssetButton portfolioId={portfolio.id} onModalClose={() => {}} />
        )}
      </div>
      
      <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        {portfolioData && (
          <>
           
            <h1 className="font-bold text-3xl pl-3" style={portfolioNameStyle}>
              {portfolioData.portfolio.name}
            </h1>

            <p className="font-color p-3"> Valorisation Total </p> 
            <p className='pl-3'>$ {portfolioData.portfolioValuation} </p>
            <div className="grid flex grid-cols-2 font-color gap-2 p-3">
              <p> Gains / Pertes</p>
              <p> ROI</p>
              <p> <NumberDisplay value={portfolioData.profitAndLossRounded} /> </p>
              <p> {portfolioData.portfolioROIPercent ? <NumberPourcentDisplay value={portfolioData.portfolioROIPercent} /> : '0 %' }  </p>
            </div>
          </>
        )}
      </div>
      
    </div>
  );
};

export default CardPortfolio;
