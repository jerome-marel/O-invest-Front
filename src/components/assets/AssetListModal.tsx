import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { useParams } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';
import { utcToZonedTime, format } from 'date-fns-tz'; 


const AssetListModal = ({ isOpen, assets, onClose, portfolioId }) => {
  const overlayStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    maxHeight: '60vh',
    overflowY: 'auto',
    bgcolor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    p: 4,
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  // const { portfolioId } = useParams();
  const [note, setNote] = useState('');
  const Navigate = useNavigate();
  const filteredAssets = assets.filter(
    asset =>
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleModalClick = event => {
    event.stopPropagation();
  };

  const handleOpenAssetModal = asset => {
    setSelectedAsset({ ...asset });
    setSelectedDate(new Date());
    setQuantity('');
  };

  const handleCloseAssetModal = () => {
    setSelectedAsset(null);
    setSelectedDate(new Date());
    setQuantity('');
  };

  const handleAddAsset = () => {
    if (!selectedAsset || !selectedDate || !quantity) {
      console.error("Veuillez remplir tous les champs avant d'ajouter l'actif.");
      return;
    }

    const americanTimezone = 'America/New_York';
    const americanDate = utcToZonedTime(selectedDate, americanTimezone);
    const formattedAmericanDate = format(americanDate, 'yyyy-MM-dd HH:mm:ss');

    const newAsset = {
      symbol: selectedAsset.symbol,
      purchaseDatetime: formattedAmericanDate,
      quantity: quantity,
      note: note,
    };

    axiosInstance.post(`/api/portfolios/${portfolioId}/addasset`, newAsset)
      .then(response => {
        console.log("Actif ajouté avec succès", response.data);
        handleCloseAssetModal();
        onClose();
        console.log("data.portfolioAsset",response.data.portfolioAsset )
        console.log("data newtransaction", response.data.newTransaction)
        Navigate(`/portfolio/${portfolioId}`);
      })
      .catch(error => {
        console.log("data.portfolioAsset",response.data.portfolioAsset )
        console.log("data newtransaction", response.data.newTransaction)
        console.error("Erreur lors de l'ajout de l'actif :", error);
        if (error.response) {
          console.log("data.portfolioAsset",response.data.portfolioAsset )
        console.log("data newtransaction", response.data.newTransaction)
          console.error("Réponse du serveur :", error.response.data);
        }
      });
  };

  return (
    <>
      <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
        <div
          className="fixed inset-0 flex justify-center items-center"
          style={overlayStyle}
          onClick={onClose}
        >
          <Box sx={modalStyle} onClick={handleModalClick}>
            <div className="flex justify-end">
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" id="modal-title">
              Liste des actifs
            </Typography>
            <TextField
              label="Rechercher"
              variant="outlined"
              fullWidth
              margin="normal"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <ul>
              {filteredAssets.map(asset => (
                <li
                  key={asset.id}
                  onClick={() => handleOpenAssetModal(asset)}
                  style={{ cursor: 'pointer' }}
                >
                  {asset.symbol} - {asset.name}
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </Modal>
      <Modal
        open={!!selectedAsset}
        onClose={handleCloseAssetModal}
        aria-labelledby="asset-modal-title"
      >
        <div
          className="fixed inset-0 flex justify-center items-center"
          style={overlayStyle}
          onClick={handleCloseAssetModal}
        >
          <Box sx={modalStyle} onClick={handleModalClick}>
            <div className="flex justify-end">
              <IconButton onClick={handleCloseAssetModal}>
                <CloseIcon />
              </IconButton>
            </div>
            <Typography variant="h6" id="asset-modal-title">
              Sélectionner un actif
            </Typography>
            <p>Actif sélectionné : {selectedAsset && selectedAsset.name}</p>
            <div>
              <Typography variant="subtitle1" gutterBottom>
                Sélectionnez la date et l'heure :
              </Typography>
              <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="yyyy-MM-dd HH:mm"
                className="w-full border p-2 rounded-md"
              />
            </div>
            <TextField
              label="Quantité"
              variant="outlined"
              fullWidth
              margin="normal"
              value={quantity}
              onChange={e => setQuantity(e.target.value)}
            />
            <TextField
              label="Note"
              variant="outlined"
              fullWidth
              margin="normal"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
            <Button onClick={handleAddAsset}>Ajouter</Button>
          </Box>
        </div>
      </Modal>
    </>
  );
};

export default AssetListModal;


