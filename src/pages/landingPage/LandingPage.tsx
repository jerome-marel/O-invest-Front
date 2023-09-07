import { NavLink } from 'react-router-dom';
import Hero from '../../components/LandingPage/Hero';
import Explication from '../../components/LandingPage/Explication';
import Marquee from "react-fast-marquee";
import Princing from '../../components/LandingPage/Pricing';
import Team from '../../components/LandingPage/Team';






//   const containerStyle = {
//     background: 'radial-gradient(circle, rgba(8,11,41,1) 0%, rgba(26,28,96,1) 100%)',
//     display: 'flex',
//   };

//   return (
//     <div>
//        <nav style={containerStyle} className="fixed top-0 flex w-full items-center justify-between py-2 " >
//         <div className="flex w-full flex-wrap items-center justify-between px-6">
//           <div className="flex items-center">
//             <img src='public/Logo Oinvest.svg' alt="logo" className="w-50" />

//             {/* Right elements */}
//             <div className="my-1 flex items-center lg:my-0 lg:ml-auto">
//               <NavLink
//                 to="/login"
//                 className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
//               >
//                 Se connecter
//               </NavLink>
//               <NavLink
//                 to="/register"
//                 className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
//               >
//                 S'enregistrer
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     <section style={containerStyle} className="mt-20 w-full overflow-hidden">
     
//       <Hero />
//       </section>
      
//     <section style={containerStyle} >
    
//     <Explication />
//     </section>
//     </div>
//   );
// };

// export default LandingPage;

const containerStyle = {
  background: 'radial-gradient(circle, rgba(8,11,41,1) 0%, rgba(26,28,96,1) 100%)',
  minHeight: '100vh', // Définissez une hauteur minimale pour le conteneur parent
  display: 'flex', // Utilisez Flexbox pour la mise en page
  flexDirection: 'column', // Disposition en colonne pour que les éléments s'empilent verticalement
};

const nav = {
  background: 'radial-gradient(circle, rgba(8,11,41,1) 0%, rgba(26,28,96,1) 100%)',
};

const LandingPage = () => {
  return (
    <div style={containerStyle}>
      <nav style={nav} className="fixed z-10 top-0 bot h-20 flex w-full items-center justify-between py-2 shadow-sm shadow-neutral-700/10 dark:bg-transparent" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-6">
                 <div className="flex items-center">
      <img src='public/Logo Oinvest.svg' alt="logo" className="w-50" />

           
<div className="my-1 flex items-center lg:my-0 lg:ml-auto">
<NavLink
                to="/login"
                className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
              >
                Se connecter
              </NavLink>
              <NavLink
                to="/register"
                className="right-0 bottom-0 w-50 px-5 py-3 rounded-bg-blue-800 text-white font-semibold rounded hover:bg-blue-600"
              >
                S'enregistrer
              </NavLink>
            </div>
          </div>
        </div>
      
      </nav>
      <section className='mt-20'>
        <Hero />
      </section>
      <section >
      <Marquee>
        
          <img src='public/logo/netflix.png' alt="logo" className="h-28 mr-10" />
          <img src='public/Logo Oinvest.svg' alt="logo" className="h-28" /> 
          <img src='public/logo/coca-cola.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo/apple.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo/google-logo-9826.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo/microsoft-logo-png-2396.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo2/logo-oclock.svg' alt="logo" className="h-28 mr-10" />
          <img src='public/logo/spotify-logo-png-7057.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo/tesla-logo-png-2231.png' alt="logo" className="h-12 mr-10 mt-6" />
          

      </Marquee>
      <div className='mt-5'>
      <Marquee direction="right">
        
          <img src='public/logo2/nvidia.png' alt="nvidia" className="h-28 mr-10" />
          <img src='public/Logo Oinvest.svg' alt="logo" className="h-28" /> 
          <img src='public/logo2/amazon-logo-2.png' alt="amazon" className="h-28 mr-10" />
          <img src='public/logo/apple.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo2/intel-shop-logo-png-13.png' alt="logo" className="h-28 mr-10" />
          <img src='public/logo2/airbnb-logo-10.png' alt="logo-airbnb" className="h-28 mr-10" />
          <img src='public/logo/starbucks-logo-png-1667.png' alt="logo" className="h-28 mr-10" />
      </Marquee>
      </div>
        
      </section>

      <section >
        <Explication />
        
      </section>
      <section >
      <Princing />
      </section>
      <section >
      <Team />
      </section>
    </div>
  );
};

export default LandingPage;
