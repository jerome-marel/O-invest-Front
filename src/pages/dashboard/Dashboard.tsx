import { useState, useEffect } from 'react';
import Card from "../../components/Portfolio/CardPortfolio";  
import CardGlobalDashboard from "../../components/ValueGlobal/CardGlobalDashboard";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";
import {axiosInstance} from '../../utils/axios';
import GraphDashboard from './GraphDashboard';

const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [portfolioValuations, setPortfolioValuations] = useState([]); 

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axiosInstance.get('/api/portfolios');
        setPortfolios(response.data.allPortfolios);
        console.log("portfoliosss", response.data);

        
        const valuationResponse = await axiosInstance.get('/api/stats/portfolios/weight');
        setPortfolioValuations(valuationResponse.data.portfolioValuations);
        console.log("portfolioValuations", valuationResponse.data);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };

    fetchPortfolios();
  }, []);
  
  const containerStyle = {
    background: 'linear-gradient(169deg, rgba(16,14,36,1) 30%, rgba(23,24,80,1) 52%, rgba(49,75,177,1) 93%, rgba(46,50,173,1) 100%)',
    display: 'flex flex-wrap justify-center gap-10',
    flexDirection: 'column',
  };

  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex  ',
    flexDirection: 'column',
  };
  
  return (
    <div style={containerStyle} className="grid grid-cols-1 justify-center gap-5">
      {/* Première ligne */}
      <div className="grid grid-cols-4 gap-5">
        {/* Colonne 1 */}
        <div className="col-span-1">
          <div style={containerCardStyle} className="border border-indigo-900 p-10 rounded-2xl shadow-lg ml-5 w-full h-full flex flex-col justify-center items-center">
            <h2 className="text-4xl text-white font-bold mb-2">WELCOME BACK</h2>
            <h2 className="text-3xl text-white font-bold mb-4">USERNAME</h2>
          </div>
        </div>
  
        {/* Colonne 2 */}
        <div className="col-span-1">
          
          <p className="text-white">Les 2 cases de Alex</p>
        </div>
  
        {/* Colonne 3 */}
        <div className="col-span-1">
          <CardGlobalDashboard />
        </div>
  
        {/* Colonne 4 */}
        <div className="col-span-1">
          <ChartCamembert portfolioValuations={portfolioValuations} />
          
        </div>
      </div>
  
      {/* Deuxième ligne */}
      
        <div className="col-span-2">
          {/* Liste de cartes de portefeuille */}
          <div className="flex flex-wrap justify-center gap-5">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      
  
      {/* Troisième ligne */}
      <div className="grid grid-cols-1 gap-5">
        {/* Colonne 1 */}
        <div className="col-span-1">
          {/* Camembert */}
          <div style={containerStyle} className="justify-between round m-10 border border-indigo-900 rounded-2xl p-10 shadow">
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


//   return (
//     <>
//       <div style={containerStyle} className="bg-[#131722]  flex flex-col justify-center items-center">
//         <div className="flex flex-wrap justify-center mt-10 gap-10">
//           <CardGlobalDashboard  />
          
//           <ChartCamembert portfolioValuations={portfolioValuations} />
//         </div>
  
//         <div className="flex flex-wrap justify-center gap-10 m-10 ">
//           {portfolios.map((portfolio) => (
//             <Card key={portfolio.id} portfolio={portfolio} />
//           ))}
//         </div>
    
//         <div style={containerStyle} className="  border border-indigo-900 rounded-2xl  shadow w-full p-10 m-10">
//         <div className="w-full mb-10">
//           <GraphDashboard />
//         </div>
//       </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;   



