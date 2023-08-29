import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardGlobal from "../../components/ValueGlobal/CardGlobal";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";
import {axiosInstance} from "../../utils/axios";
import AssetList from "./Asset";

const PortfolioDetail = () => {
  const { portfolioId } = useParams();
  const [portfolio, setPortfolio] = useState(null);
  const valorisation = 15000;
  const pourcentage = 17;

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/dashboard/portfolio/${portfolioId}`);
        console.log("id", portfolioId)
        console.log("ddata", response.data.portfolio)
        setPortfolio(response.data.portfolio);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      }
    };
    

    fetchPortfolio();
  }, [portfolioId]);

  if (!portfolio) {
    return <div className="bg-gray-100 p-4">Pas de portefeuille</div>;
  }


  return (
    <>
      <div className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">{portfolio.name}</h2>
        <p className="mb-2">{portfolio.strategy}</p>
        <p> Valorisation Global : {valorisation}€ </p>
        <p> Pourcentage Global : {pourcentage}% </p>
      </div>

      <div className="flex flex-col items-center justify-center bg-gray-100">
        <div className="flex flex-wrap justify-center mt-10 gap-10">
          <CardGlobal />
          <ChartCamembert />
          <AssetList/>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetail;
