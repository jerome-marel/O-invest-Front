import { useState, useEffect } from 'react';
import Card from "../../components/Portfolio/CardPortfolio";  
import CardGlobalDashboard from "../../components/ValueGlobal/CardGlobalDashboard";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";
import { axiosInstance } from '../../utils/axios';
import GraphDashboard from './GraphDashboard';
import TopPerformer from '../../components/Performance/TopPerformance';
import FlopPerformer from '../../components/Performance/FlopPerformance';


const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioValuations, setPortfolioValuations] = useState([]); 
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [topPerformer, setTopPerformer] = useState('');
  const [flopPerformer, setFlopPerformer] = useState('');

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

        const rankingresponse = await axiosInstance.get('/api/stats/ranking');
        setTopPerformer(rankingresponse.data.topPerformer);
        setFlopPerformer(rankingresponse.data.worstPerformer);
        console.log("rankingrepsosnse", rankingresponse)
      
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);

  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex',
    flexDirection: 'column',
  };

 

  return (
    <div className="bg-gradient-to-b from-[#100e24] via-[#171850] to-[#2d32ad] p-4 min-h-screenl">
    
    <div style={containerCardStyle} className="m-12 border border-indigo-900 text-white shadow-md rounded-2xl">
    <div className="container mx-auto py-10">
      {/* Première ligne */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 h-full">
        <div className="md:col-span-1">
          <div className="bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg mb-5">
            <h2 className="text-l text-white mb-2">Bonjour</h2>
            <h3 className="text-5xl text-white font-bold mb-4 " style={{ overflowWrap: 'break-word' }}> {firstName} {lastName} </h3>
            {portfolios.length === 0 ? (
              <p className='text-white'>Vous n'avez pas de portefeuilles. Créez-en un pour commencer.</p>
            ) : (
              <>
                <p className='text-white'>Nous sommes ravis de vous revoir.</p>
                <p className='text-white'>Jetons un coup d'œil à la performance de vos fonds aujourd'hui.</p>
                {/* <p className='text-white pt-8'>N'hésitez pas à explorer vos portefeuilles en détail, à passer en revue vos</p>
                <p className='text-white'>transactions récentes ou à effectuer les ajustements nécessaires.</p> */}
              </>
            )}
          </div>
        </div>

         <div className="md:col-span-1">
            <CardGlobalDashboard />
          </div>



          <div className="md:col-span-1">
            <ChartCamembert portfolioValuations={portfolioValuations} />
          </div>


         <div className="md:col-span-1 text-white h-full  "> 
          <div className='bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg mb-5'>
            {topPerformer && <TopPerformer asset={topPerformer[0]} />}
          </div >
          <div  className='bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg mb-5'>
          {flopPerformer && <FlopPerformer asset={flopPerformer[0]} />}
          </div>
          </div>
        </div>
        </div>
        {/* Deuxième ligne */}
        
    </div>
    <div className="md:col-span-2 ">
        
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
  );
};

export default Dashboard;
