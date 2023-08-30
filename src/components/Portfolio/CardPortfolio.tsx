import { useNavigate } from 'react-router-dom';
import NumberDisplay from '../Number/NumberDisplay';
import NumberPourcentDisplay from '../Number/NumberPourcentDisplay';
import AddAssetButton from '../AddAssetButton';

const CardPortfolio = ({ portfolio }) => {
  const Navigate = useNavigate();
  console.log(portfolio)
  const handleCardClick = () => {
    Navigate(`/dashboard/portfolio/${portfolio.id}`);
  };

  return (
    <div className="bg-white rounded-lg px-5 py-5">
      <div onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <h1 className="font-bold text-3xl pb-3">{portfolio.name}</h1>
        <p className="font-color text-2xl">{portfolio.value} $</p>
        <p className="grid flex grid-cols-2 font-color text-2xl">
          <NumberDisplay value={portfolio.changeValue} /> <NumberPourcentDisplay value={portfolio.changePercentage} />
        </p>
      </div>
      <div className="flex justify-end">
        <AddAssetButton portfolioId={portfolio.id} onModalClose={() => {}} />
      </div>
    </div>
  );
};

export default CardPortfolio;
