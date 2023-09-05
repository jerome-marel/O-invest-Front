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
    maxHeight: '2rem', // Ajustez la hauteur maximale selon vos besoins
  };

  return (
    <div style={containerCardStyle} className="border border-indigo-900 text-white shadow-md rounded-2xl px-5 py-5 w-72 h-60">
      <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        {portfolioData && (
          <>
            {/* Utilisez le style pour tronquer le nom du portefeuille */}
            <h1 className="font-bold text-3xl pb-3" style={portfolioNameStyle}>
              {portfolioData.portfolio.name}
            </h1>
            <p className="font-color"> Valorisation Global: {portfolioData.portfolioValuation} $</p>
            <div className="grid flex grid-cols-2 font-color">
              <p> Profit / Loss:</p>
              <p> <NumberDisplay value={portfolioData.profitAndLossRounded} /> </p>
              <p> ROI:</p>
              <p> {portfolioData.portfolioROIPercent ? <NumberPourcentDisplay value={portfolioData.portfolioROIPercent} /> : '0 %' }  </p>
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
