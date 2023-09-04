import AddAssetButton from "../AddAssetButton";

const Asset = ({ userPortfolioAssets,  averagePrices, portfolioId, handleAddAsset }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow">
      <div className="flex justify-between"> 
      <h3 className="text-lg text-black font-semibold mb-4">Actifs du portefeuille</h3>
      <p><AddAssetButton onModalClose={() => {}} portfolioId={portfolioId} handleAddAsset={handleAddAsset} /> </p>
      </div>
      
      <table className="w-full">
        <thead>
          <tr className=" text-black bg-gray-100">
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Prix actuel</th>
            <th className="px-4 py-2">Quantité</th>
            <th className="px-4 py-2">Prix moyen d'achat</th>
            <th className="px-4 py-2">Valeur</th>
            <th className="px-4 py-2">Valeur latente</th>
            <th className="px-4 py-2">Note</th>
          </tr>
        </thead>
        <tbody>
          {userPortfolioAssets.map((asset) => {
            const averagePrice = averagePrices[asset.symbol] || 0; 
            return (
              <tr key={asset.id}>
                <td className="text-black px-4 py-2">{asset.name}</td>
                <td className="text-black px-4 py-2">{asset.historicPrice.toFixed(2)}</td>
                <td className="text-black px-4 py-2">{asset.remainingQuantity}</td>
                <td className="text-black px-4 py-2">{averagePrice}</td>
                <td className="text-black px-4 py-2">{(asset.historicPrice * asset.remainingQuantity).toFixed(2)}</td>
                <td className="text-black px-4 py-2"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Asset;


