import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import NumberDisplay from "../Number/NumberDisplay";

const CardGlobalPortfolio = ({ userPortfolioAssets, portfolio }) => {
  const portfolioValuation = userPortfolioAssets.reduce((total, asset) => {
    const assetPrice = parseFloat(asset.historicPrice);
    const remainingQuantity = parseFloat(asset.remainingQuantity);
    return total + assetPrice * remainingQuantity;
  }, 0);

  const portfolioROIPercent = ((portfolioValuation - parseFloat(portfolio.totalInvested)) / parseFloat(portfolio.totalInvested)) * 100;
  const profitloss = portfolioValuation - parseFloat(portfolio.totalInvested);

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Valorisation Global du Portfolio</h3>
      <p>Valorisation Global: {portfolioValuation.toFixed(2)} $</p>
      <p>ROI: <NumberPourcentDisplay value={portfolioROIPercent.toFixed(2)} /></p>
      <p>Profit / Loss: <NumberDisplay value={profitloss.toFixed(2)} /></p>
    </div>
  );
};

export default CardGlobalPortfolio;
