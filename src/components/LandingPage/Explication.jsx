import React from 'react';

function Explication() {
  return (
    <>
 <div className="container w-2/3 mx-auto p-16">
  <section className="">
    <div className="rounded-lg bg-neutral-100 shadow-xl">
      <div className="flex flex-wrap items-center">
        <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
          <video controls player  src="public/video/WarrenBuffet.mp4" alt="WarrenBuffet parle de Oinvest"
            className=" rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
        </div>
        <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
          <div className="px-6 py-12 md:px-12">
            <h2 className="mb-6 pb-2 text-4xl texte-white font-bold">
              Pourquoi nous choisir ?
            </h2>
            <p className="mb-6 pb-2 text-l text-justify">
            O'Invest se distingue par son interface conviviale et intuitive. Les clients apprécient la facilité avec laquelle ils peuvent gérer leur portefeuille d'investissements, et suivre leurs performances financières, même s'ils n'ont aucune expérience préalable en investissement.
            </p>

            <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
              <div className="mb-6">
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" className="mr-3 h-6 w-6 text-neutral-900 dark:text-neutral-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Support
                  24/7
                </p>
              </div>

             

              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
     </>
  );
}

export default Explication;


