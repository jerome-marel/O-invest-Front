import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";


const cardGlobal = () => {

  const handleAddClick = () => {
  console.log('click');
  };

  return (
    <div className="bg-white rounded-lg px-5 py-5">
    
      <h1 className="font-bold text-3xl pb-3">Valorisation Globale</h1>
      {/*A dynamiser // Portfolio_NAME*/}
      <p className="font-color text-2xl">
      54008 $
      </p>
      <p className="grid flex grid-cols-2 font-color text-2xl ${textColorClass}">
        <NumberDisplay value={-5120} />  <NumberPourcentDisplay value={-45} />
      </p>

    </div>
  );
};

export default cardGlobal;
