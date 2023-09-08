import './styleLP.css';


function Team() {

  const people = [
    {
      name: 'LE TENSORER Alex',
      role: 'Back End Developpeur, ',
      role2: 'Product Owner, API MASTER ',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQFHqJq-I6KAGg/profile-displayphoto-shrink_400_400/0/1687181401486?e=1699488000&v=beta&t=r1zYJ1Cp2CJPNltNm2bi0cOskW-kHm-zFneWmnbCk7s',
      lieu: 'La Rochelle, Nouvelle-Aquitaine',
    },
    {
      name: 'ALIBAY Razack ',
      role: 'Back End Developpeur,',
      role2: 'Manitou de la Doc : Winston et Swagger',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      lieu: 'Fontaibleau, Ile-de-France',
    },
    {
      name: 'MAREL Jérôme',
      role: 'Front End Developpeur,',
      role2: 'Gestionnaire de projet,',
      role3: 'Scrum Master, Css Friendly',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D35AQGBTVyvyufJcw/profile-framedphoto-shrink_400_400/0/1686066399408?e=1694782800&v=beta&t=K9u_5ByRC9liBvSMc1SQMDn5fl2g7-f98I8T4lUGS2Q',
      lieu: 'Caen, Basse-Normandie',
    },
    {
      name: 'BECKER Benjamin',
      role: 'Front End Developpeur, ',
      role2: 'NIGHT CODEUR, Super Reactif',
      imageUrl:
        'https://media.licdn.com/dms/image/D4E03AQHWMAQgHqpwHA/profile-displayphoto-shrink_800_800/0/1683797325392?e=1699488000&v=beta&t=QUuXiM-1O3g_H7JtBvTG_xLB-bEWihs47rjmptgU-8E',
        lieu: 'Strasbourg, Alsace',
    },
    {
      name: 'NORRIS Chuck',
      role: 'Killeur de code',
      imageUrl:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Chuck_Norris_May_2015.jpg/330px-Chuck_Norris_May_2015.jpg',
      lieu: 'Université de tatane, USA'
    
    },
    // More people...
  ]

  

  return (

<>
<div className="bg-white p-7">
        <div className="container mx-auto">
          
          </div>
          <div className="mx-auto flex flex-col items-center"> 
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-2xl"> L'équipe O'Invest</h2>
            <h2><b className='bg-clip-text text-transparent text-xl bg-gradient-to-r from-blue-400 to-purple-700'> Réalise L'impossible, ... en full remote </b></h2>
        
        <div className=" flex mt-10">
          <div className='flex flex-col-2'>
            <div className='flex flex-col-2'>
              <ul role="list" className="rounded grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {people.map((person) => (
                    <li className='' key={person.name}>
                      <div className="flex items-center gap-x-6">
                        <img className="h-20 w-20 rounded-full" src={person.imageUrl} alt="" />
                        <div className="border-black border rounded-3xl border-rounded-3xl p-5 w-full">
                          <h3 className="text-base  font-semibold tracking-tight text-gray-900">{person.name}</h3>
                          <p className="text-sm font-semibold text-indigo-600 mt-3">{person.role}</p>
                          <p className="text-sm font-semibold text-indigo-600">{person.role2}</p>
                          <p className="text-sm font-semibold text-indigo-600">{person.role3}</p>
                          <p className="font-semibold mt-3">{person.lieu}</p>
                        </div>
                      </div>
              </li>
            ))}
          </ul>
          </div>
          {/* <div className='relative h-70'>
  <video controls src="public/video/WarrenBuffet.mp4" alt="Warren Buffet parle de Oinvest" className="rounded-3xl h-70 lg:h-250"></video> */}
          

            
            
            
            </div> 
          </div>
              
            
            </div>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            L'équipe O'Invest est bien plus qu'une équipe virtuelle. C'est un groupe de professionnels dévoués et compétents qui ont relevé des défis uniques pour créer un produit exceptionnel. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            Nous avons prouvé que la distance physique ne peut pas entraver notre détermination pour réussir. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-justify ">
            O'invest est un projet d'apothéose de l'école O'clock, que nous avons réalisé en 4 semaines,
            </p> */}
          
          </div>
          
        
      

</>
);
}

export default Team;



  