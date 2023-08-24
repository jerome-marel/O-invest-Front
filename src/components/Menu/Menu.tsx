import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

// Style de la fenêtre modale
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  borderRadius: '12px',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  p: 4,
};

// Style pour l'arrière-plan flou de la fenêtre modale
const overlayStyle = {
  backdropFilter: 'blur(8px)',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const Header = () => {
  
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fonction pour basculer l'affichage de la liste déroulante des portefeuilles
  const togglePortfolioDropdown = () => {
    setShowPortfolioDropdown(!showPortfolioDropdown);
  };

  // Fonction pour basculer l'état de la fenêtre modale
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  
  
  // Fonction pour gérer la fermeture de la fenêtre modale en cliquant à l'extérieur
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      toggleModal();
    }
  };

  

  // Liste de portefeuilles factices
  const portfolios = [
    { id: 1, name: 'Portefeuille 1' },
    { id: 2, name: 'Portefeuille 2' },
    { id: 3, name: 'Portefeuille 3' },
  ];

  // Fonction pour gérer la sélection d'un portefeuille
  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };

  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
     
      <NavLink to="/dashboard" className="text-white text-lg font-semibold">
        O'Invest
      </NavLink>
      
      <div className=" flex justfify-center gap-20 "> 
      <div className="text-white cursor-pointer hover:underline">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>

      
      {/* Menu déroulant des portefeuilles */}
      <div className="flex justify-between gap-5"> 
      <div
        className="relative text-white cursor-pointer group hover:underline"
        onClick={togglePortfolioDropdown}
      >
        Portefeuille
        {/* Affichage du menu déroulant si l'état est vrai */}
        {showPortfolioDropdown && (
         <div className="absolute mt-2 py-2 px-4 bg-white rounded shadow-md ">
            {portfolios.map((portfolio) => (
              
              <NavLink
                key={portfolio.id}
                to={`/portfolio/${portfolio.id}`}
                className={`block px-2 py-1 text-black ${
                  selectedPortfolio === portfolio.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => handlePortfolioClick(portfolio)}
              >
                {portfolio.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      
      <button onClick={toggleModal} className="text-white hover:underline ">
        Ajouter
      </button>
      </div>
      </div>
      
      <Modal
        open={isModalOpen}
        onClose={toggleModal}
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
              Créer un portefeuille
            </Typography>
           
            <form>
              <TextField
                label="Nom du portefeuille"
                variant="outlined"
                fullWidth
                margin="normal"
              />
              <TextField
                label="Description du portefeuille"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
              />
              <Button type="submit" variant="contained">
                Créer
              </Button>
            </form>
          </Box>
        </div>
      </Modal>
      <div className="text-white flex items-center space-x-2">
        <NavLink to="/profil" className="hover:underline">
          <div>Nom Prénom</div>
        </NavLink>
        <div className="border-l pl-4">
          <NavLink to="/" className="text-white hover:underline">
            Se Déconnecter
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
