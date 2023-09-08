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
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }

      try {
        const valuationResponse = await axiosInstance.get('/api/stats/portfolios/weight');
        setPortfolioValuations(valuationResponse.data.portfolioValuations);

      } catch (error) {
        console.error('Error valuationResponse:', error);
      }
        
      try {
        const userName = await axiosInstance.get('/api/users');
        setLastName(userName.data.userInfo.lastName);
        setFirstName(userName.data.userInfo.firstName);
        console.log("usernaqme" , userName)

      } catch (error) {
        console.error('Error userName:', error);
      }
        
      try {
        const rankingresponse = await axiosInstance.get('/api/stats/ranking');
        setTopPerformer(rankingresponse.data.topPerformer);
        setFlopPerformer(rankingresponse.data.worstPerformer);
        console.log("rankingrepsosnse", rankingresponse)

      } catch (error) {
        console.error('Error rankinresponse:', error);
      }
      
    };

    fetchPortfolios();
  }, []);

  
  return (
    <div className=" p-4">
    
    {/* <div style={containerCardStyle} className="m-12 border border-indigo-900 text-white shadow-md rounded-2xl"> */}
    <div className="container mx-auto py-10">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 ">
        <div className="md:col-span-1 l">
          <div className="bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg h-full ">
            <h2 className="text-l text-white mb-2">Bonjour</h2>
            <h3 className="text-5xl text-white font-bold mb-4 " style={{ overflowWrap: 'break-word' }}> {firstName} {lastName} </h3>
            {portfolios.length === 0 ? (
              <p className='text-white'>Vous n'avez pas de portefeuilles. Créez-en un pour commencer.</p>
            ) : (
              <>
                <p className='text-white'>Nous sommes ravis de vous revoir.</p>
                <p className='text-white'>Jetons un coup d'œil à la performance de vos fonds aujourd'hui.</p>
                
              </>
            )}
          </div>
        </div>

         <div className="md:col-span-1 h-full">
            <CardGlobalDashboard />
          </div>



          <div className="md:col-span-1 w-full h-full flex justify-center items-center ">
            <ChartCamembert portfolioValuations={portfolioValuations} />
          </div>


         <div className="md:col-span-1 text-white  flex flex-col justify-between "> 
          <div className='bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg mb-5'>
            {topPerformer && <TopPerformer asset={topPerformer[0]}  />}
          </div >
          <div  className='bg-gradient-to-r from-[#080b29] via-[#1a1c60] to-[#1a1c60] border border-indigo-900 p-10 rounded-2xl shadow-lg '>
          {flopPerformer && <FlopPerformer asset={flopPerformer[0]}  />}
          </div>
          </div>
        </div>
        </div>
        {/* Deuxième ligne */}
        
    {/* </div> */}
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
