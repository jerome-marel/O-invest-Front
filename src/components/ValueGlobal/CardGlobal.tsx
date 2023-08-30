// import NumberDisplay from "../Number/NumberDisplay";
// import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";


// const cardGlobal = () => {

//   const handleAddClick = () => {
//   console.log('click');
//   };

//   return (
//     <div className="bg-white rounded-lg px-5 py-5">
    
//       <h1 className="font-bold text-3xl pb-3">Valorisation Globale</h1>
//       {/*A dynamiser // Portfolio_NAME*/}
//       <p className="font-color text-2xl">
//       54008 $
//       </p>
//       <p className="grid flex grid-cols-2 font-color text-2xl ${textColorClass}">
//         <NumberDisplay value={-5120} />  <NumberPourcentDisplay value={-45} />
//       </p>

//     </div>
//   );
// };

// export default cardGlobal;

import { useState, useEffect } from 'react';
import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";
import {axiosInstance} from '../../utils/axios';

const CardGlobal = () => {
  const [Data, setData] = useState({
    value: 0,
    changeValue: 0,
    changePercentage: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axiosInstance.get('/api/Routeadefinir'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching global data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white rounded-lg px-5 py-5">
      <h1 className="font-bold text-3xl pb-3">Valorisation Globale</h1>
      <p className="font-color text-2xl">
        {Data.value} $
      </p>
      <p className="grid flex grid-cols-2 font-color text-2xl">
        <NumberDisplay value={Data.changeValue} />
        <NumberPourcentDisplay value={Data.changePercentage} />
      </p>
    </div>
  );
};

export default CardGlobal;

