import  { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import assetList from '../../data/assetList';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto',
};

const overlayStyle = {
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};


function AssetListModal({ isOpen, onClose }) {
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [sortedAssets, setSortedAssets] = useState(assetList);

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const handleAssetClick = (asset) => {
    setSelectedAsset(asset);
  };

  const handleSortAlphabetically = () => {
    const sorted = [...sortedAssets].sort((a, b) => a.name.localeCompare(b.name));
    setSortedAssets(sorted);
  };

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div
        className="fixed inset-0 flex justify-center items-center"
        style={overlayStyle}
        onClick={handleOverlayClick}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Ajouter une action
          </Typography>
          <Button onClick={handleSortAlphabetically}>Trier par ordre alphabétique</Button>
          <Divider />
          <List>
            {sortedAssets.map((asset) => (
              <div
                key={asset.id}
                className={`cursor-pointer ${
                  selectedAsset && selectedAsset.id === asset.id ? 'bg-blue-100' : ''
                }`}
                onClick={() => handleAssetClick(asset)}
              >
                <ListItem>
                  <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item xs={8}>
                      <ListItemText
                        primary={asset.name}
                        primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                      />
                    </Grid>
                    <Grid item xs={4} textAlign="right">
                      <ListItemText secondary={asset.ticket} />
                    </Grid>
                  </Grid>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </Box>
      </div>
    </Modal>
  );
}

export default AssetListModal;
