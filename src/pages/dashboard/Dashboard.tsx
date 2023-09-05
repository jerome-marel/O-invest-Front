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

  return (
    <>
      <div className="bg-[#131722]  flex flex-col justify-center items-center">
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <CardGlobalDashboard  />
          
          <ChartCamembert portfolioValuations={portfolioValuations} />
        </div>
  
        <div className="flex flex-wrap justify-center gap-10 m-10 ">
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
    
        <div className=" w-full ">
          <GraphDashboard/>
        </div>
      </div>
    </>
  );
};

export default Dashboard;


