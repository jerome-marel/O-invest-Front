import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../utils/axios';
import AddIcon from '@mui/icons-material/Add';

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
  const [modalName, setModalName] = useState('');
  const [modalStrategy, setModalStrategy] = useState('');
  const Navigate = useNavigate();
  const [portfolioList, setPortfolioList] = useState([]);
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  let closeDropdownTimeout;

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handlePortfolioHover = () => {
    setShowPortfolioDropdown(true);

    clearTimeout(closeDropdownTimeout);
  };

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
        const response = await axiosInstance.get('/api/portfolios');
        setPortfolioList(response.data.allPortfolios);

        const userName = await axiosInstance.get('/api/users');
        setLastName(userName.data.userInfo.lastName);
        setFirstName(userName.data.userInfo.firstName);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCreatePortfolio = async (e) => {
    e.preventDefault();

    const name = modalName;
    const strategy = modalStrategy;

    const userId = JSON.parse(localStorage.getItem('userId'));

    try {
      const response = await axiosInstance.post('/api/portfolios', {
        name,
        strategy,
        userId,
      });

      setPortfolioList([...portfolioList, response.data.newPortfolio]);

      Navigate(`/dashboard/portfolio/${response.data.newPortfolio.id}`, {
        state: { name, strategy },
      });

      toggleModal();
    } catch (error) {
      console.error(
        'Error creating portfolio:',
        name,
        strategy,
        userId,
        error
      );
    }
  };

  return (
    <div className="flex justify-between items-center bg-[#100e24] p-4">
      <div className="flex items-center">
        <NavLink to="/dashboard" className="text-white text-lg font-semibold">
          O'Invest
        </NavLink>

        {isMobileMenuOpen ? (
          <div className="lg:hidden ml-4">
            <button className="text-white" onClick={closeMobileMenu}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        ) : (
          <div className="lg:hidden ml-4">
            <button
              className="text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        )}
      </div>

      {isMobileMenuOpen ? (
        <div className="lg:hidden fixed inset-x-0 top-0 z-50 bg-[#100e24] text-white">
          <div className="flex flex-col items-start gap-3 p-4">
            <NavLink
              to="/dashboard"
              className="text-white text-lg font-semibold hover:underline"
              onClick={closeMobileMenu}
            >
              Tableau de bord
            </NavLink>
            <NavLink
              to="/dashboard/portfolios"
              className="text-white text-lg font-semibold hover:underline"
              onClick={closeMobileMenu}
            >
              Portefeuilles
            </NavLink>
            <NavLink
              to="/profil"
              className="text-white text-lg font-semibold hover:underline"
              onClick={closeMobileMenu}
            >
              {firstName} {lastName}
            </NavLink>
            <div
              className="text-white text-lg font-semibold hover:underline cursor-pointer"
              onClick={() => {
                handleLogout();
                closeMobileMenu();
              }}
            >
              Se Déconnecter
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex justfify-center gap-10 ">
          <div>
            <div className="flex gap-5">
              <div className="text-white cursor-pointer hover:scale-110 text-lg font-semibold">
                <NavLink to="/dashboard">Tableau de bord</NavLink>
              </div>

              <div className="flex justify-between gap-5 text-lg font-semibold">
                <div
                  className="relative text-white cursor-pointer group hover:scale-110 z-50"
                  onMouseEnter={handlePortfolioHover}
                  onMouseLeave={() => {
                    closeDropdownTimeout = setTimeout(() => {
                      setShowPortfolioDropdown(false);
                    }, 100);
                  }}
                >
                  Portefeuille
                  {showPortfolioDropdown && (
                    <div className="absolute mt-2 py-2 px-4 bg-white rounded shadow-md ">
                      {portfolioList.map((portfolio) => (
                        <NavLink
                          key={portfolio.id}
                          to={`/dashboard/portfolio/${portfolio.id}`}
                          className={`block px-2 py-1 text-black ${
                            selectedPortfolio === portfolio.id
                              ? 'bg-blue-100'
                              : 'hover:bg-gray-100'
                          }`}
                          onClick={() => {
                            setSelectedPortfolio(portfolio);
                            setShowPortfolioDropdown(false);
                          }}
                        >
                          {portfolio.name}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
                <button
                  className="w-6 h-6 rounded-full bg-white text-black flex items-center justify-center hover:rotate-45 transform transition-transform border-none cursor-pointer"
                  onClick={toggleModal}
                >
                  <AddIcon className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
        <NavLink to="/profil" className="hover:scale-110 text-white">
          <div>
            {firstName} {lastName}
          </div>
        </NavLink>
        <div className="border-l pl-4 hover:scale-110">
          <NavLink to="/" className="text-white " onClick={handleLogout}>
            Se Déconnecter
          </NavLink>
        </div>
      </div>
        </div>
      )}

     

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
                value={modalName}
                onChange={(e) => setModalName(e.target.value)}
              />
              <TextField
                label="Description du portefeuille"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                margin="normal"
                name="description"
                value={modalStrategy}
                onChange={(e) => setModalStrategy(e.target.value)}
              />
              <Button type="submit" variant="contained">
                Créer
              </Button>
            </form>
          </Box>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
