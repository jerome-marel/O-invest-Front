import  { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [showPortfolioDropdown, setShowPortfolioDropdown] = useState(false);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const togglePortfolioDropdown = () => {
    setShowPortfolioDropdown(!showPortfolioDropdown);
  };

  const portfolios = [
    { id: 1, name: 'Portefeuille 1' },
    { id: 2, name: 'Portefeuille 2' },
    { id: 3, name: 'Portefeuille 3' },
  ];

  const handlePortfolioClick = (portfolio) => {
    setSelectedPortfolio(portfolio);

  };

  return (
    <div className="flex justify-between items-center bg-blue-500 p-4">
      <div className="text-white text-lg font-semibold">O'Invest</div>
      <div className="text-white cursor-pointer hover:underline">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </div>
      <div
        className="relative text-white cursor-pointer group"
        onClick={togglePortfolioDropdown}
      >
        Portefeuille
        {showPortfolioDropdown && (
          <div className="absolute mt-2 py-2 px-4 bg-white rounded shadow-md z-10">
            {portfolios.map((portfolio) => (
              <NavLink
                key={portfolio.id}
                to={`/portfolio/${portfolio.id}`}
                className={`block px-2 py-1 text-black ${
                  selectedPortfolio === portfolio ? 'bg-blue-100' : 'hover:bg-gray-100'
                }`}
                onClick={() => handlePortfolioClick(portfolio)}
              >
                {portfolio.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
      <div className="text-white flex items-center space-x-2">
        
        <NavLink to="/profil" className="hover:underline">
          <div>Nom Prénom</div>
        </NavLink>
        <div className="border-l pl-4">
          <button className="text-white hover:underline">Disconnect</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
