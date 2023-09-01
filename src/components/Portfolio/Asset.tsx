import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import { axiosInstance } from '../../utils/axios';
// import NumberDisplay from '../Number/NumberDisplay';

const AssetList = ({userPortfolioAssets, portfolioId }) => {
  


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
          {userPortfolioAssets.map((asset) => {
            return (
              <tr key={asset.id}>
                <td className="px-4 py-2">{asset.name}</td>
                <td className="px-4 py-2">{asset.historicPrice}</td>
                <td className="px-4 py-2">{asset.remainingQuantity}</td>
                <td className="px-4 py-2">{asset.averagePrice}</td>
                <td className="px-4 py-2">{asset.historicPrice * asset.remainingQuantity}</td> 
                <td className="px-4 py-2"></td>
                {/* <td className="px-4 py-2">{asset.note}</td> */}
              </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      );
};

export default AssetList;

