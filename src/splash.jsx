import './App.css';

// export default function Splash(){
//     return(
//         <div className='Splash' >
//             <button>
//                 <a href="./menu">btn</a>
//             </button>
//         </div>
//     )
// }

export default function Splash() {
    const spaData = [
      {
        title: 'Détendez-vous au bord de la piscine avec un cocktail à la main au Splash',
        description:
          'Sirotez des boissons rafraîchissantes et détendez-vous au bord de la piscine du Splash. Savourez de délicieux cocktails et boissons fraîches tout en vous relaxant et en vous imprégnant d\'une atmosphère chaleureuse et accueillante. Le soir, rendez-vous au Splash pour profiter de la musique live et des cocktails, l\'idéal pour partager un moment entre amis ou en famille.',
          
      },
    ];
  
    return (
      <div className="Splash">
        {spaData.map((data, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{data.title}</h2>
            <p className="card-description">{data.description}</p>
          </div>
        ))}
                <a href="./menu" style={{textDecoration:"none"}}><button>
                 show menu
                </button></a>
      </div>
    );
  }