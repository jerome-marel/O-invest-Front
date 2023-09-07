import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
const TopPerformer = ({ asset }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h2 className="text-white font-bold ">Top Performer</h2>
      <p className="font-bold">{asset.symbol}</p>
      <p> <NumberPourcentDisplay value={asset.assetROIPercent.toFixed(2)}/> | <NumberDisplay value={asset.assetProfitLoss.toFixed(2)}/></p>
      <p> </p>
    </div>
  );
};

export default TopPerformer;

