import { useState, useEffect } from 'react';
import Card from "../../components/Portfolio/CardPortfolio";  
import CardGlobalDashboard from "../../components/ValueGlobal/CardGlobalDashboard";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";
import { axiosInstance } from '../../utils/axios';
import GraphDashboard from './GraphDashboard';

const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioValuations, setPortfolioValuations] = useState([]); 
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axiosInstance.get('/api/portfolios');
        setPortfolios(response.data.allPortfolios);
        
        const valuationResponse = await axiosInstance.get('/api/stats/portfolios/weight');
        setPortfolioValuations(valuationResponse.data.portfolioValuations);

        const userName = await axiosInstance.get('/api/users');
        setLastName(userName.data.userInfo.lastName);
        setFirstName(userName.data.userInfo.firstName);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#100e24] via-[#171850] to-[#2d32ad] p-4 min-h-screen">
      <div className="container mx-auto py-10">
        {/* Première ligne */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
         
          <div className="md:col-span-1">
            <div className="bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg mb-5">
              <h2 className="text-4xl text-white font-bold mb-2">WELCOME BACK</h2>
              <h2 className="text-3xl text-white font-bold mb-4">{firstName} {lastName}</h2>
            </div>
          </div>

         
          <div className="md:col-span-1">
            <p className="text-white">Les 2 cases de Alex</p>
          </div>

         
          <div className="md:col-span-1">
            <CardGlobalDashboard />
          </div>

         
          <div className="md:col-span-1">
            <ChartCamembert portfolioValuations={portfolioValuations} />
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="md:col-span-2 pt-5">
          
          <div className="flex flex-wrap justify-center gap-5">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>

        {/* Troisième ligne */}
        <div className="grid grid-cols-1 gap-5 ">
          
          <div className="col-span-1 pt-5">
            
            <div className="bg-gradient-to-b from-[#100e24] via-[#171850] to-[#2d32ad] rounded-2xl p-10 shadow">
              <div className="w-full mb-10">
                <GraphDashboard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
