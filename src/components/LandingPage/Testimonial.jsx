
function Testimonial() {

  


  

  return (

      <>
        <section class="text-gray-400 body-font">

          
          
          <div class="container px-5 py-24 mx-auto">
            <h1 className="flex text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-700 justify-center">Les avis de nos clients</h1>
            
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-5">
              
              <div className="flex justify-center items-center">
              <video controls player src="public/video/WarrenBuffet.mp4" alt="WarrenBuffet parle de Oinvest" className="w-1/3 ">
               </video>        
               </div>     
                <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-white font-medium title-font tracking-wider text-sm">Joe Rogan</h2>
              <p class="text-gray-500">Plombier dans le New Jersey  </p>
            </div>
          </div>
          <div class="container px-5 py-24 mx-auto">
            <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 mb-8" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p class="leading-relaxed text-lg text-white text-justify">Cette aplication est génial, avant çà me prenait 4 jours pour suivre mes 64 portefeuilles boursiers, et à cause de celà je perdais beaucoup d'argent, maintenant que j'ai découvert O'invest. Je fait cela en un coup d'oeil.</p>
              <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 class="text-white font-medium title-font tracking-wider text-sm">Robert Kiosaky</h2>
              <p class="text-gray-500">Auteur de Père riche, père pauvre </p>
            </div>
          </div>
        </section>

      </>
);
}

export default Testimonial;


