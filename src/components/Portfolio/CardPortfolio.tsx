import NumberDisplay from "../Number/NumberDisplay";
import NumberPourcentDisplay from "../Number/NumberPourcentDisplay";


const card = () => {

  const handleAddClick = () => {
  console.log('click');
  };

  return (
    <div className="bg-white rounded-lg px-5 py-5">
    
      <h1 className="font-bold text-3xl pb-3">Portefeuille 1</h1>
      {/*A dynamiser // Portfolio_NAME*/}
      <p className="font-color text-2xl">
      14008 $
      </p>
      <p className="grid flex grid-cols-2 font-color text-2xl ${textColorClass}">
        <NumberDisplay value={-5120} />  <NumberPourcentDisplay value={-45} />
      </p>
      
      <div className="flex justify-end">
      <button 
        className="rounded-full w-10 h-10 flex items-center justify-center bg-blue-500 text-white text-4xl hover:bg-blue-600"
        onClick={() => handleAddClick()}
        >
      +
      </button>
      </div>
      

    </div>
  );
};

export default card;
