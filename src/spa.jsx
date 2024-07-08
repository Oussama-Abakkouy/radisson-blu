// // import './App.css';


// // export default function Spa() {
// //   const spaData = [
// //     {
// //       title: 'Spa et centre de remise en forme',
// //       description:
// //         'Visit our spa and fitness center for a relaxing spa session and leave revitalized. With a 2000 square meter spa area and a modern fitness center, our tranquil spa offers everything you need for a pleasant spa break.',
// //     },
// //   ];

// //   return (
// //     <div className="Spa">
// //       {spaData.map((data, index) => (
// //         <div key={index} className="card">
// //           <h2 className="card-title">{data.title}</h2>
// //           <p className="card-description">{data.description}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }
// import React from 'react';
// import './App.css';

// const SpaMenu = () => {
//   return (
//     <div className="Spa">
//       <header className="Spa-header">
//         <img src="up.jpg" alt="Spa Image Top" className="header-image" />
//         <div className="header-content">
//           <h1>Services de beauté, esthétique et coiffure</h1>
//         </div>
//       </header>
//       <div className="container">
//         <section className="menu-section">
//           <ul>
//             <li>Pose de vernis <span>70 dhs</span></li>
//             <li>Vernis semi-Permanent <span>250 dhs</span></li>
//             <li>Retirer vernis semi-permanent <span>150 dhs</span></li>
//             <li>Manicure des mains soin complet <span>200 dhs</span></li>
//             <li>Pédicure des pieds soin complet <span>300 dhs</span></li>
//           </ul>
//         </section>
//         <section className="menu-section">
//           <h2>ÉPILATION</h2>
//           <ul>
//             <li>Epilation sourcil <span>80 dhs</span></li>
//             <li>Epilation lèvre supérieur <span>80 dhs</span></li>
//             <li>Epilation bras <span>180 dhs</span></li>
//             <li>Epilation ½ jambes <span>180 dhs</span></li>
//             <li>Epilation jambes complètes <span>250 dhs</span></li>
//             <li>Epilation aisselles <span>100 dhs</span></li>
//             <li>Epilation maillot <span>150 dhs</span></li>
//             <li>Epilation maillot intégral <span>250 dhs</span></li>
//             <li>Epilation torse ou dos <span>200 dhs</span></li>
//           </ul>
//         </section>
//         <section className="menu-section">
//           <h2>COIFFURE</h2>
//           <ul>
//             <li>Shampoing, sérum <span>150 dhs</span></li>
//             <li>Shampoing brushing pour cheveux courts <span>150 dhs</span></li>
//             <li>Shampoing brushing pour cheveux longs <span>200 dhs</span></li>
//             <li>Supplément Babyliss ou lisseur <span>100 dhs</span></li>
//           </ul>
//         </section>
//         <section className="menu-section">
//           <h2>LE HAMMAM MAROCAIN</h2>
//           <ul>
//             <li>Accès au spa (Piscine-Sauna) <span>180 dhs</span></li>
//             <li>Hammam et Gommage au Savon Noir 30 mn <span>350 dhs</span></li>
//             <li>Hammam Secret du rif 60mn <span>600 dhs</span></li>
//           </ul>
//           <p>Un Bain de Chaleur Alliant les vertus des plantes, dans une ambiance tempérée, un rituel constitué de Savon noir Eucalyptus, d'un gommage traditionnel au gant Kessa, en passant par un enveloppement crémé de ghassoul et savonnage.</p>
//         </section>
//         <section className="menu-section">
//           <h2>MASSAGES</h2>
//           <ul>
//             <li>Massage Visage Cuir Chevelu 30min <span>350 dhs</span></li>
//             <li>Massage du Dos et pieds 30min <span>390 dhs</span></li>
//             <li>Massage Réconfortant et relaxant à la fleur d'oranger 60min <span>600 dhs</span></li>
//             <li>Massage Réconfortant et relaxant à la fleur d'oranger 45min <span>450 dhs</span></li>
//             <li>Massage aux huiles Chaudes 60 min <span>650 dhs</span></li>
//             <li>Massage Energisant 60 min <span>700 dhs</span></li>
//             <li>Massage Energisant 45 min <span>550 dhs</span></li>
//             <li>Massage 4 mains 60 min <span>790 dhs</span></li>
//           </ul>
//         </section>
//         <section className="menu-section">
//           <h2>SOIN VISAGE</h2>
//           <ul>
//             <li>60min <span>590 dhs</span></li>
//           </ul>
//           <p>Soin Relaxant hydratant Coup d’éclat immédiat grâce aux actifs et texture de ce Soin. Votre visage, vos yeux et vos lèvres sont intensément lissés, défatigués et hydratés. <span className="highlight">‘Pendant la pause du masque un rituel de relaxation vous sera proposé’</span></p>
//         </section>
//         <section className="menu-section">
//           <h2>SOIN SUPREME</h2>
//           <ul>
//             <li>60 min <span>690 dhs</span></li>
//           </ul>
//           <p>Ce soin suprême donne à la peau toute sa fraicheur, sa jeunesse et l’éclat qu’elle mérite. Soin modelage d’exception qui englobe l’ensemble du visage et au décolleté défroisse visiblement la peau tout en offrant une détente absolue.</p>
//         </section>
//         <section className="menu-section">
//           <h2>Package</h2>
//           <ul>
//             <li>LE CLASSIQUE 1H <span>690 dhs</span></li>
//             <li>PLENITUDE 2H <span>990 dhs</span></li>
//           </ul>
//           <p>Hammam, gommage savon noir Enveloppement au ghassoul, massage relaxant avec huile d’arranger et fleur d’arranger.</p>
//         </section>
//       </div>
//       <footer>
//         <img src="down.jpg" alt="Spa Image Bottom" className="footer-image" />
//       </footer>
//     </div>
//   );
// };

// export default SpaMenu;
import React from 'react';
import './App.css';

export default function Menu() {
    return (
        <div className="menu-container">
            <div className="menu-image">
                <img src="/spa/spa1.jpg" alt="Menu Page 1" />
            </div>
            <div className="menu-image">
                <img src="/spa/spa2.jpg" alt="Menu Page 2" />
            </div>
            <div className="menu-image">
                <img src="/spa/spa3.jpg" alt="Menu Page 3" />
            </div>
            
        </div>
    );
}
