import './styleLP.css';


function Princing() {

  return (

<>
<section className="bg-transparent body-font overflow-hidden text-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Nos Prix</h1>
      <b className='bg-clip-text text-3xl text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'>Investissez dans le meilleur service de gestion de portefeuilles.</b>
    </div>
    <div className="flex flex-wrap justify-center -m-4">
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
          <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-800 leading-none">Gratuit</h1>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Nbre de portefeuille :  2 Max
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Marché Nasdaq
          </p>
          <p className="flex items-center mb-6">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Nbre d'actifs : 8
          </p>
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Valider
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs mt-3">Parfait pour essayer</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-indigo-500 flex flex-col relative overflow-hidden">
          <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAIRE</span>
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>9 €</span>
            <span className="text-lg ml-1 font-normal">/mois</span>
          </h1>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Création de portefeuille <b className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'> illimité</b>
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Marché Mondial
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Nbre d'actifs <b className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'> illimité</b>
          </p>
          
          <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-indigo-600 rounded">Valider
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="5" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs mt-3">L'offre la plus interessante sur le marché</p>
        </div>
      </div>
      <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
        <div className="h-full p-6 rounded-lg border-2 border-gray-700 flex flex-col relative overflow-hidden">
          <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
          <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
            <span>12 €</span>
            <span className="text-lg ml-1 font-normal">/mois</span>
          </h1>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Création de portefeuille <b className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'> illimité</b>
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Marché Mondial
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Nbre d'actifs <b className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'> illimité</b>
          </p>
          <p className="flex items-center mb-2">
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 rounded-full ">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-3 h-3" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>Actifs Numériques <b className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 ml-2'>BTC, ...  </b></p>
          
          <button className="flex items-center mt-auto text-white bg-gray-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-700 rounded">Valider
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
          <p className="text-xs mt-3">Pour les proffessionel de l'investissement </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
);
}

export default Princing;