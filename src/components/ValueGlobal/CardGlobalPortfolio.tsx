import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import NumberDisplay from "../Number/NumberDisplay";

const CardGlobalPortfolio = ({ portfolio }) => {
  console.log("portfolio dans cardglobal", portfolio)
  


  return (
    <div className="bg-white p-4 rounded-2xl shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-black">Valorisation Global du Portfolio</h3>
      <p className=" font-semibold mb-4 text-black">Valorisation Global: {portfolio.portfolioValuation} $</p>
      <p className=" font-semibold mb-4 text-black">ROI: {portfolio.portfolioROIPercent ? <NumberPourcentDisplay value={portfolio.portfolioROIPercent} /> : '0 %'}</p>
      <p className=" font-semibold mb-4 text-black">Profit / Loss: <NumberDisplay value={portfolio.profitAndLossRounded} /></p>
    </div>
  );
};

export default CardGlobalPortfolio;
