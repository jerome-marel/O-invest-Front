import Card from "../../components/Portfolio/CardPortfolio";  
import CardGlobal from "../../components/ValueGlobal/CardGlobal";
import ChartCamembert from "../../components/Chart/ChartCamembertDash";

const Dashboard = () => {

  return (
<>
<div className="flex flex-col items-center justify-center bg-gray-100">
  <div className="flex flex-wrap justify-center mt-10 gap-10">
  <CardGlobal />
  <ChartCamembert />
  
  </div>
  

<div className="flex flex-col items-center mt-10 h-screen bg-gray-100">
      <div className="flex flex-wrap justify-center gap-10">
        <Card />
        <Card />
        <Card />
      </div>
      
    </div>

    </div>

</>
    
  );
};

export default Dashboard;
