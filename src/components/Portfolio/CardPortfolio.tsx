import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NumberDisplay from '../Number/NumberDisplay';
import NumberPourcentDisplay from '../Number/NumberPourcentDisplay';
import AssetListModal from '../assets/AssetListModal';

const CardPortfolio = ({ portfolio }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Navigate = useNavigate();

  const handleAddClick = (e) => {
    e.stopPropagation(); // Empêche la propagation de l'événement
    setIsModalOpen(true);
  };

  const handleCardClick = () => {
    Navigate(`/dashboard/portfolio/${portfolio.id}`);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  return (
    <div
      className="bg-white rounded-lg px-5 py-5"
      >
      <div onClick={handleCardClick}
      style={{ cursor: 'pointer' }}>
      <h1 className="font-bold text-3xl pb-3">{portfolio.name}</h1>
      <p className="font-color text-2xl">
        {portfolio.value} $
      </p>
      <p className="grid flex grid-cols-2 font-color text-2xl">
        <NumberDisplay value={portfolio.changeValue} /> <NumberPourcentDisplay value={portfolio.changePercentage} />
      </p>
      </div>
      <div className="flex justify-end">
        <button
          className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-4xl hover:bg-blue-600"
          onClick={handleAddClick}
        >
          +
        </button>
      </div>
      {isModalOpen && (
        <div className="overlay" onClick={handleOverlayClick}>
          <AssetListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
};

export default CardPortfolio;
