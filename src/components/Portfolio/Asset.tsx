import AddAssetButton from "../AddAssetButton";

const Asset = ({ userPortfolioAssets,  averagePrices, portfolioId, handleAddAsset }) => {

  const containerStyle = {
    // background: 'linear-gradient(83deg, rgba(8,11,41,1) 25%, rgba(26,28,96,1) 52%)', // Ajustez la hauteur en fonction de vos besoins
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex',
    flexDirection: 'column',
  };

  const containerCardStyle = {
    background: 'linear-gradient(107deg, rgba(8,11,41,1) 34%, rgba(26,28,96,1) 85%)',
    display: 'flex flex-wrap justify-center gap-10 ',
    flexDirection: 'column',
  };

  return (
    <div style={containerCardStyle} className=" p-4 rounded-2xl shadow border border-indigo-900 ">
      <div className="flex justify-between"> 
      <h3 className="text-lg text-white font-semibold mb-4">Actifs du portefeuille</h3>
      <p><AddAssetButton onModalClose={() => {}} portfolioId={portfolioId} handleAddAsset={handleAddAsset} /> </p>
      </div>
      
      <table  className="w-full">
        <thead>
          <tr  className=" text-white bg-opacity-0">
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
                <td className="text-white ">{asset.name}</td>
                <td className="text-white px-4 py-2">{asset.historicPrice.toFixed(2)}</td>
                <td className="text-white px-4 py-2">{asset.remainingQuantity}</td>
                <td className="text-white px-4 py-2">{averagePrice}</td>
                <td className="text-white px-4 py-2">{(asset.historicPrice * asset.remainingQuantity).toFixed(2)}</td>
                <td className="text-white px-4 py-2"></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Asset;