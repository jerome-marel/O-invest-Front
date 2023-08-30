import Card from "../../components/Portfolio/CardPortfolio";  
import CardGlobal from "../../components/ValueGlobal/CardGlobal";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";
import {axiosInstance} from '../../utils/axios';
import { useState, useEffect } from 'react';


const Dashboard = () => {
  const [portfolios, setPortfolios] = useState([]);

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const response = await axiosInstance.get('/api/portfolios');
        setPortfolios(response.data.allPortfolios);
      } catch (error) {
        console.error('Error fetching portfolios:', error);
      }
    };
  
    fetchPortfolios();
  }, []); 

  return (
<>
<div className="flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-wrap justify-center mt-10 gap-10">
  <CardGlobal />
  <ChartCamembert />
  </div>
 
  <div className="flex flex-col items-center mt-10 h-screen bg-gray-100">
          <div className="flex flex-wrap justify-center gap-10">
            {portfolios.map((portfolio) => (
              <Card key={portfolio.id} portfolio={portfolio} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
