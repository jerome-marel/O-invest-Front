import React from 'react';

import './styleLP.css';

function Hero() {
  return (
    <>
    <div className="container mx-auto my-7 flex flex-wrap flex-col md:flex-row items-center">
      {/* Left Col */}
      <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
      <img className='' src="public/jumelle.svg" alt="jumelle de l'investissement" />
        <h1 className="my-4 text-3xl md:text-5xl font-bold text-white opacity-75leading-tight text-center md:text-left">
          Gardez 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 m-5">
           un Oeil 
          </span>
          sur vos <em className='bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-red-400 '>investissements !</em>
        </h1>
        <div>
        <p className="text-white md:text-2xl mt-2 mb-8 text-center md:text-left">
        O'Invest vous accompagne vers le sommet, vous permettant d'atteindre vos objectifs financiers en toute simplicité."
        </p>
        </div>
        
      </div>

      {/* Right Col */}
      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <img
          className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src="public/dash-macos.svg"
          alt="app-dashboard-oinvest"
        />
      </div>
      
    </div>
   
    <div>
      
     </div>
     </>
  );
}

export default Hero;
