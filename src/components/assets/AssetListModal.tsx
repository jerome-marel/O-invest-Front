import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import { axiosInstance } from '../../utils/axios';
import { useNavigate } from 'react-router-dom';
import { utcToZonedTime, format } from 'date-fns-tz';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const AssetListModal = ({ isOpen, assets, onClose, portfolioId, handleAddAsset }) => {
  const overlayStyle = {
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '450px',
    bgcolor: 'white',
    borderRadius: '12px',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    p: 4,
    maxHeight: `calc(100vh - 50px)`,
    
  };

  const searchContainerStyle = {
    position: 'sticky',
    top: '0',
    zIndex: '2',
    backgroundColor: 'white',
    padding: '8px 16px',
    borderBottom: '1px solid #ddd',
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [quantity, setQuantity] = useState('');
  const [note, setNote] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const Navigate = useNavigate();

  const uniqueSectors = [...new Set(assets.map(asset => asset.sector))];

  const filteredAssets = assets.filter(
    asset =>
      (asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedSector === '' || asset.sector === selectedSector)
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

  const handleSubmit = () => {
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
        

        handleAddAsset(response.data.newPortfolioAsset);
        handleCloseAssetModal();
        onClose();


        console.log("data.portfolioAsset", response.data.portfolioAsset);
        console.log("data newtransaction", response.data.newTransaction);

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
  
    handleCloseAssetModal(); // Ferme la modal de sélection d'actif
    onClose(); // Ferme la modal principale
  };
  
  return (
    <>
     <Modal open={isOpen} onClose={onClose} aria-labelledby="modal-title">
      
  <div className="fixed inset-0 flex justify-center items-center" style={overlayStyle} onClick={onClose}>
    <Box sx={modalStyle} onClick={handleModalClick}>
      <div className="flex justify-end p-2">
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </div>
      <div className="p-2">
        <Typography variant="h6" id="modal-title">
          Liste des actifs
        </Typography>
        <div className="sticky top-0 bg-white p-2 border-b border-gray-300">
          <TextField
            label="Rechercher"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <div className="mt-4">
            <TextField
              select
              label="Filtrer par secteur"
              variant="outlined"
              fullWidth
              value={selectedSector}
              onChange={e => setSelectedSector(e.target.value)}
            >
              <MenuItem value="">Tous les secteurs</MenuItem>
              {uniqueSectors.map(sector => (
                <MenuItem key={sector} value={sector}>
                  {sector}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        {/* Partie défilante */}
        <div className="max-h-[50vh] overflow-y-auto pt-4 pb-8">
          <List>
            {filteredAssets.map(asset => (
              <div key={asset.id} onClick={() => handleOpenAssetModal(asset)} className="cursor-pointer">
                <ListItem button>
                  <ListItemText
                    primary={
                      <Typography variant="subtitle1" className="font-bold">
                        {asset.name}
                        <span className="text-gray-500"> - {asset.symbol}</span>
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </div>
    </Box>
  </div>
</Modal>

<Modal
        open={!!selectedAsset}
        onClose={handleCloseAssetModal}
        aria-labelledby="asset-modal-title"
      >
         <div className="fixed inset-0 flex justify-center items-center" style={overlayStyle} onClick={handleCloseAssetModal}>
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
  minTime={new Date().setHours(15, 30)}
  maxTime={new Date().setHours(22, 30)}
  className="w-full border p-2 rounded-md"
/>
              
              <div className="flex items-center mt-2 text-orange-500">
                Attention<br />
                Le marché américain est ouvert de 15h30 à 22h30.
              </div>
              
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
              multiline
              rows={4}
              margin="normal"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
            <Button
              onClick={() => {
                handleSubmit();
                handleCloseAssetModal(); // Fermer la modal après l'ajout
              }}
              variant="contained"
              color="primary"
              style={{ float: 'right', marginTop: '16px' }}
            >
              Ajouter
            </Button>
          </Box>
        </div>
      </Modal>
    </>
    
  );
};

export default AssetListModal;
