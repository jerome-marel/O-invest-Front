import { useState, useEffect } from 'react';
import AssetListModal from '../components/assets/AssetListModal';
import { axiosInstance } from '../utils/axios';
import AddIcon from '@mui/icons-material/Add';


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
  className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:rotate-45 transform transition-transform border-none cursor-pointer"
  onClick={handleAddClick}
>
  <AddIcon className="w-6 h-6" />
</button>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseModal}
        >
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
