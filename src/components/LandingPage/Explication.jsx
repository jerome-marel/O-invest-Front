import React from 'react';

function Explication() {
  return (
    <>
 <div className="container mx-auto p-16">

    <div className="rounded-lg bg-neutral-100 shadow-xl">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
        <div className='mr-10'>
  <div className='relative'>
    <video controls player src="public/video/WarrenBuffet.mp4" alt="WarrenBuffet parle de Oinvest">.
    </video>
    <div className="absolute top-2 left-3 justify-center items-center text-white">
      <p className="text-l font-bold">Warren Buffet, USA</p>
      <p className='text-l font-bold'>Investisseur de Confiance</p>
    </div>
  </div>
</div>

        </div>
        <div className="w-full basis-auto lg:w-6/12 xl:w-8/12">
        <div className="text-center font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-700"> LE PROJET O'INVEST </div>
            <div className='p-10 grid text-justify gap-10 items-center justify-center'>
              <p className=''>'' O'Invest est un <b>projet d'école réalisé en seulement 4 semaines</b> , une véritable fin d'apothéose chez <b>O'clock</b>, du cahier des charges jusqu'au Minimum Viable Product (MVP). Le cahier des charges initial définit un objectif ambitieux : <b>développer un tableau de bord en ligne destiné aux investisseurs.</b> Ce tableau de bord révolutionnaire permet aux utilisateurs de suivre et de gérer leurs investissements, même s'ils sont répartis dans différents organismes bancaires. </p>
              <p className=''>Grâce à O'Invest, les investisseurs ont enfin un outil puissant pour <b>analyser la performance globale de leurs portefeuilles</b>, accéder à des informations essentielles telles que la valeur de chaque ligne d'actif, et ainsi prendre des décisions éclairées. C'est le résultat d'une collaboration acharnée et d'un engagement inébranlable envers la simplification de l'expérience d'investissement pour tous, qu'ils soient novices ou experts en la matière.  "</p>
            </div>
        </div>
      </div>
    </div>
</div>
     </>
  );
}

export default Explication;


