// const AssetList = () => {
//   // Données d'exemple pour les actifs
//   const assets = [
//     {
//       id: 1,
//       name: 'Bitcoin',
//       currentPrice: 50000,
//       quantity: 2,
//       averagePrice: 48000,
//     },
//     {
//       id: 2,
//       name: 'Ethereum',
//       currentPrice: 3500,
//       quantity: 10,
//       averagePrice: 3200,
//     },
//     {
//       id: 3,
//       name: 'Tesla',
//       currentPrice: 750,
//       quantity: 5,
//       averagePrice: 700,
//     },
//   ];

//   return (
//     <div className="bg-white p-4 rounded shadow">
//       <h3 className="text-lg font-semibold mb-4">Actifs du portefeuille</h3>
//       <table className="w-full">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="px-4 py-2">Nom</th>
//             <th className="px-4 py-2">Prix actuel</th>
//             <th className="px-4 py-2">Quantité</th>
//             <th className="px-4 py-2">Prix moyen d'achat</th>
//             <th className="px-4 py-2">Valeur</th>
//             <th className="px-4 py-2">Valeur latente</th>
//           </tr>
//         </thead>
//         <tbody>
//           {assets.map((asset) => (
//             <tr key={asset.id}>
//               <td className="px-4 py-2">{asset.name}</td>
//               <td className="px-4 py-2">{asset.currentPrice}</td>
//               <td className="px-4 py-2">{asset.quantity}</td>
//               <td className="px-4 py-2">{asset.averagePrice}</td>
//               <td className="px-4 py-2">{asset.currentPrice * asset.quantity}</td>
//               <td className="px-4 py-2">{(asset.currentPrice - asset.averagePrice) * asset.quantity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AssetList;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../../utils/axios';
import NumberDisplay from '../Number/NumberDisplay';

const AssetList = () => {
  const [assets, setAssets] = useState([]);
  const { portfolioId } = useParams(); 

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        const response = await axiosInstance.get(`/portfolio/${portfolioId}/addasset`);
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      }
    };

    fetchAssets();
  }, [portfolioId]); 

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold mb-4">Actifs du portefeuille</h3>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100">
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
          {assets.map((asset) => (
            <tr key={asset.newTransaction.id}>
              <td className="px-4 py-2">{asset.portfolioAsset.asset.name}</td>
              <td className="px-4 py-2">{asset.newTransaction.assetPrice}</td>
              <td className="px-4 py-2">{asset.newTransaction.quantity}</td>
              <td className="px-4 py-2">{/* Utilisez la propriété appropriée ici */}</td>
              <td className="px-4 py-2">
                <NumberDisplay value={parseFloat(asset.newTransaction.assetPrice) * parseInt(asset.newTransaction.quantity)} />
              </td>
              <td className="px-4 py-2">{/* Calcul approprié pour la valeur latente */}</td>
              <td className="px-4 py-2">{asset.newTransaction.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AssetList;

