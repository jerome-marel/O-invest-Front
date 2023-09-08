import './styleLP.css';


function Team() {

  const people = [
    {
      name: 'LE TENSORER Alex',
      role: 'Product Owner, Back End Developpeur, API MASTER ',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lieu: 'La Rochelle, Nouvelle-Aquitaine',
    },
    {
      name: 'ALIBAY Razack ',
      role: 'Back End Developpeur, Manitou de la Doc : Winston et Swagger',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lieu: 'Fontaibleau, Ile-de-France',
    },
    {
      name: 'MAREL Jérôme',
      role: 'Front End Developpeur, Gestionnaire de projet, SRUM MASTER, CSS FRIENDLY ',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lieu: 'Caen, Normandie',
    },
    {
      name: 'BECKER Benjamin',
      role: 'Front End Developpeur, NIGHT CODEUR, ',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        lieu: 'Loin, là ou le soleil se couche',
    },
    {
      name: 'BUFFET Warren',
      role: 'Investisseur de confiance',
      imageUrl:
        'https://advice4finance.com/wp-content/uploads/2018/12/Warren-Buffet-768x1024.jpg',
      lieu: 'Omaha, USA ,',
    },
    // More people...
  ]

  

  return (

<>
<div className="bg-white p-7">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"> L'équipe O'Invest</h2>
            <h2><b className='bg-clip-text text-transparent text-xl bg-gradient-to-r from-blue-400 to-purple-700 ml-2'> Réalise L'impossible, à Distance</b></h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            L'équipe O'Invest est bien plus qu'une équipe virtuelle. C'est un groupe de professionnels dévoués et compétents qui ont relevé des défis uniques pour créer un produit exceptionnel. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            Nous avons prouvé que la distance physique ne peut pas entraver notre détermination pour réussir. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            O'invest est un projet d'apothéose de l'école O'clock, que nous avons réalisé en 4 semaines,
            </p>
          
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold text-indigo-600 mt-3">{person.role}</p>
                    <p className="font-semibold mt-3">{person.lieu}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

</>
);
}

export default Team;



  