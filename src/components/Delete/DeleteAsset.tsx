import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import { PacmanLoader } from 'react-spinners';
import './delete.css';

const DeletePortfolio = ({ portfolioId }) => {
    
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [countdown, setCountdown] = useState(3); // Compte à rebours initial
  const [showYesButton, setShowYesButton] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/api/portfolios/${portfolioId}`);
      
      navigate('/dashboard');
    } catch (error) {
      console.error('Error deleting portfolio:', error);
      console.log(portfolioId)
    }
  }

  const handleOpenModal = () => {
    setIsModalOpen(true);

    // Compte à rebours
    let currentCountdown = 3;
    const countdownInterval = setInterval(() => {
      currentCountdown--;
      setCountdown(currentCountdown);
      if (currentCountdown === 0) {
        clearInterval(countdownInterval); // Arrêtez le compte à rebours lorsque le délai est écoulé
        setShowYesButton(true); // Afficher le bouton "Oui" lorsque le compte à rebours est terminé
      }
    }, 1000); // 1000 millisecondes = 1 seconde
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCountdown(3); // Réinitialiser le compte à rebours
    setShowYesButton(false); // Masquer le bouton "Oui"
  }

  useEffect(() => {
    // Vous pouvez utiliser Axios ici pour effectuer des appels API lors du chargement initial du composant si nécessaire.
  }, []);

  return (
    <div>
      <div className="del">
        <div onClick={handleOpenModal}>
          supprimer le portefeuille
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-700 bg-opacity-50">
          <div>
            <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2 w-64">
              ATTENTION
            </div>
            <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 w-64 flex flex-col items-center">
              <p className='mb-2'>Voulez-vous vraiment supprimer ce Portefeuille ?</p>
              <div className="flex items-center mb-2">
                <PacmanLoader size={18} color={"red"} />
                <div className="ml-12">{countdown}</div>
              </div>
              {showYesButton ? (
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={handleDelete}
                >
                  Oui, je confirme
                </button>
              ) : null}
              <button
                className="bg-gray-300 text-gray-800 px-2 py-1 rounded mt-2"
                onClick={handleCloseModal}
              >
                NON
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeletePortfolio;
