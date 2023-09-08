import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import { FaTrash } from 'react-icons/fa'; // Importez l'icône de la poubelle
import './modalDeleteAsset.css'; // Importez votre fichier CSS pour les styles personnalisés

const DeleteAsset = ({ assetSymbol, assetQuantity, portfolioId, handleDelete }) => {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [quantityToRemove, setQuantityToRemove] = useState(0);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      // Vérifiez si la quantité à supprimer est valide
      if (quantityToRemove <= 0 || quantityToRemove > assetQuantity) {
        console.error('Invalid quantity to remove');
        return;
      }
  
      // Supprimez l'actif en utilisant portfolioId
      await axiosInstance.delete(`/api/portfolios/${portfolioId}/deleteasset`, {
        data: { symbol: assetSymbol, quantityToRemove },
      });
  
      if (handleDelete) {
        // Mettez à jour remainingQuantity avec la quantité choisie
        handleDelete(assetSymbol, quantityToRemove);
      }
  
      setShowModal(false);
    } catch (error) {
      console.error('Error deleting asset:', error);
    }
  };
  

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="delete-asset">
      <div
        className={`iconTrash ${hovered ? 'text-red-500' : ''} cursor-pointer`}
        onClick={handleDeleteClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <FaTrash className="text-base" />
      </div>

      {showModal && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="modal-close" onClick={handleCloseModal}>
              &times;
            </span>
            <h2>Choisissez la quantité à supprimer</h2>
            <div className="modal-input">
              <input
                type="range"
                value={quantityToRemove}
                max={assetQuantity}
                onChange={(e) => setQuantityToRemove(parseInt(e.target.value, 10))}
              />
            </div>
            <span>{quantityToRemove}</span>
            <button  className="modal-button" onClick={handleConfirmDelete}>
              Valider
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAsset;
