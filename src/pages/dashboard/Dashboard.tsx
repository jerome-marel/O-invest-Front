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

  


  return (
    <>
      <div style={containerStyle} className="bg-[#131722]  flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <CardGlobalDashboard  />
          
          <ChartCamembert portfolioValuations={portfolioValuations} />
        </div>
  
        <div className="flex flex-wrap justify-center gap-10 m-10 ">
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
    
        <div style={containerStyle} className="  border border-indigo-900 rounded-2xl  shadow w-full p-10 m-10">
        <div className="w-full mb-10">
          <GraphDashboard />
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;


