import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';

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
  const [modalName, setModalName] = useState(''); // État local pour le nom du portefeuille
  const [modalStrategy, setModalStrategy] = useState(''); // État local pour la stratégie du portefeuille
  const Navigate = useNavigate();
  const [portfolioList, setPortfolioList] = useState([]);

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

  const handleLogout = () => {
    localStorage.removeItem('user');
    Navigate('/');
  };


  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axiosInstance.get('/dashboard/allportfolio'); // Utilisez le bon endpoint
        setPortfolioList(response.data.allPortfolios); // Assurez-vous que le nom de la propriété est correct
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };
  
    fetchPortfolios();
  }, []); 
  

  // Fonction pour gérer la sélection d'un portefeuille
  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);
  };


  const handleCreatePortfolio = async (e) => {
  e.preventDefault();

  const name = modalName;
  const strategy = modalStrategy;

  const userId = JSON.parse(localStorage.getItem('userId'));

  try {
    const response = await axiosInstance.post('/dashboard/portfolio', { name, strategy, userId });
    console.log('Portfolio created:', response.data);

    // Mettez à jour la liste des portefeuilles avec le nouveau portefeuille créé
    setPortfolioList([...portfolioList, response.data.newPortfolio]);

    Navigate(`/dashboard/portfolio/${response.data.newPortfolio.id}`, { state: { name, strategy } });

    toggleModal();
  } catch (error) {
    console.error('Error creating portfolio:', name, strategy, userId, error);
  }
};

  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <NavLink to="/dashboard" className="text-white text-lg font-semibold">
        O'Invest
      </NavLink>

      
      <div className=" flex justfify-center gap-20 "> 
      <div className="text-white cursor-pointer hover:underline text-lg font-semibold">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>

      
     
      <div className="flex justify-between gap-5 text-lg font-semibold"> 
      <div
        className="relative text-white cursor-pointer group hover:underline"
        onClick={togglePortfolioDropdown}
      >
        Portefeuille
        
        {showPortfolioDropdown && (
              <div className="absolute mt-2 py-2 px-4 bg-white rounded shadow-md">
                {portfolioList.map((portfolio) => (
                  <NavLink
                    key={portfolio.id}
                    to={`/dashboard/portfolio/${portfolio.id}`}
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
      <button 
        className="rounded-full w-7 h-7 flex items-center justify-center bg-green-500 text-white text-2xl hover:bg-blue-600"
        onClick={toggleModal}
        >
      +
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

          <form onSubmit={handleCreatePortfolio}>
          <TextField
                label="Nom du portefeuille"
                variant="outlined"
                fullWidth
                margin="normal"
                name="name"
                value={modalName} // Reliez la valeur à l'état local
                onChange={(e) => setModalName(e.target.value)} // Mettez à jour l'état local lorsqu'il y a un changement
              />
              <TextField
                label="Description du portefeuille"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                name="description"
                value={modalStrategy} // Reliez la valeur à l'état local
                onChange={(e) => setModalStrategy(e.target.value)} // Mettez à jour l'état local lorsqu'il y a un changement
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
          <div>Elon Musk</div>
        </NavLink>
        <div className="border-l pl-4">
          <NavLink
            to="/"
            className="text-white hover:underline"
            onClick={handleLogout}
          >
            Se Déconnecter
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
