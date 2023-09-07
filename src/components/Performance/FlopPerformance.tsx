import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
const FlopPerformer = ({ asset }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <h2 className="text-white font-bold ">Flop Performer</h2>
      <p className="font-bold">{asset.symbol}</p>
      <p> <NumberPourcentDisplay value={asset.assetROIPercent.toFixed(2)}/> | <NumberDisplay value={asset.assetProfitLoss.toFixed(2)}/></p>
      <p> </p>
    </div>
  );
};

export default FlopPerformer;
