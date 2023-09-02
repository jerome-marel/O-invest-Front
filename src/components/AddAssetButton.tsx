import  { useState, useEffect } from 'react';
import AssetListModal from '../components/assets/AssetListModal';
import { axiosInstance } from '../utils/axios';

const AddAssetButton = ({ onModalClose, portfolioId, handleAddAsset }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [assets, setAssets] = useState([]);

  const fetchAssets = async () => {
    try {
      const response = await axiosInstance.get('/api/assets');
      setAssets(response.data.cleanedAssets);
    } catch (error) {
      console.error("Erreur lors de la récupération des actifs :", error);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      fetchAssets();
    }
  }, [isModalOpen]);

  const handleAddClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    onModalClose();
  };

  return (
    <div>
      <button
        className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-4xl hover:bg-blue-600"
        onClick={handleAddClick}
      >
        +
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={handleCloseModal}>
          <AssetListModal
            isOpen={isModalOpen}
            assets={assets}
            onClose={handleCloseModal}
            portfolioId={portfolioId} 
            handleAddAsset={handleAddAsset}
          />
        </div>
      )}
    </div>
  );
};

export default AddAssetButton;
