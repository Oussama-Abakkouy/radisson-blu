
// import React from 'react';
// import './App.css';

// const RadissonBluResort = () => {
//   return (
//     <div className="Informations">
//       <header className="Informations-header">
//         <h1>Radisson Blu Resort, Al Hoceima</h1>
//         <h2>Coordonnées</h2>
//       </header>
//       <div className="Informations-cards">
//         <div className="Informations-card">
//           <h3>Contact général</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
//         </div>
//         <div className="Informations-card">
//           <h3>Services de réservation</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:reservation.alhoceima@radissonblu.com">reservation.alhoceima@radissonblu.com</a></p>
//         </div>
//         <div className="Informations-card">
//           <h3>Réunions et événements</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
//         </div>
//         <div className="Informations-card">
//           <h3>Objets trouvés</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
//         </div>
//         <div className="Informations-card">
//           <h3>Ventes et marketing</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:sales.alhoceima@radissonblu.com">sales.alhoceima@radissonblu.com</a></p>
//         </div>
//         <div className="Informations-card">
//           <h3>Réservations de groupe</h3>
//           <p>+212 (5) 39 84 4000</p>
//           <p><a href="mailto:reservation.alhoceima@radissonblu.com">reservation.alhoceima@radissonblu.com</a></p>
//         </div>
//       </div>
//       <div className="Informations-direction">
//         <h2>Comment se rendre au Radisson Blu Resort, Al Hoceima</h2>
//         <div className="Informations-card">
//           <h3><span className="icon">✈️</span> Depuis l'aéroport de Cherif Al Idrissi</h3>
//           <p><strong>En taxi/voiture :</strong></p>
//           <p>L'hôtel se trouve à 10 kilomètres de l'aéroport et, selon la circulation, il faut environ 20 minutes pour se rendre au complexe. Sortez de l'aéroport par le tunnel principal, en restant sur la voie de droite. Tournez à droite en suivant les panneaux direction Al Hoceima. Dans la commune d'Ajdir, continuez en direction d'Al Hoceima et au rond-point d'Al Hoceima Bay, prenez la première route sur la droite. Roulez pendant 1,2 kilomètre en direction de la plage et des panneaux de l'hôtel et vous verrez notre établissement. Un trajet en taxi coûte 150 MAD. Des taxis se trouvent devant l'aéroport. L'hôtel propose également un service de navette à la demande en voiture privée pour 250 MAD.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RadissonBluResort;

import React from 'react';
import './App.css';

const RadissonBluResort = () => {
  return (
    <div className="Informations">
      <header className="Informations-header">
        <h1>Radisson Blu Resort, Al Hoceima</h1>
        <h2>Coordonnées</h2>
      </header>
      
      {/* New Content: Welcome Letter */}
      <div className="welcome-letter">
        <header>
          <h1>Dear Customer,</h1>
        </header>
        <main>
          <p>On behalf of our entire team, it is with great pleasure that we extend a warm welcome to you. We are thrilled to have you as part of our esteemed clientele, and we are committed to providing you with exceptional service and support. At RADISSON BLU RESORT AL HOCEIMA, we understand that our success is built upon the trust and satisfaction of our clients, and we are dedicated to exceeding your expectations in every interaction.</p>
          
          <h2 className="highlight">ALL INCLUSIVE</h2>
          <h3>Restaurants & Bar</h3>
          
          <div className="section">
            <h4>The Cedar: (RESTAURANT PRINCIPAL)</h4>
            <p>Type de cuisine: International</p>
            <p>Service: Petit déjeuner, Déjeuner et dîner</p>
            <p>Petit déjeuner 07h00-10h30 - Déjeuner 13h00-15h00 - Dîner 19h30-22h30</p>
          </div>

          <div className="section">
            <h4>The Splash:</h4>
            <p>Bar: All Day 09h00 à 23h00</p>
          </div>

          <div className="section">
            <h4>The Open Bar:</h4>
            <p>Bar: All Day</p>
            <p>Horaire: 09h00 à 23h00</p>
          </div>

          <div className="section">
            <h4>Le Fitness :</h4>
            <p>Accès direct à l'espace et aux équipements 24/24, avec la clé de votre chambre</p>
          </div>

          <div className="section">
            <h4>Tennis, Football, Pétanque</h4>
            <p>Accès gratuit, selon disponibilité durant le séjour</p>
          </div>

          <div className="section">
            <h4>The Rosemary SPA: (ADULT ONLY / TOUS SERVICES PAYANTS)</h4>
            <p>Salle de massage, Hammams, Salon de coiffure, Piscine intérieure</p>
          </div>

          <div className="help-text">
            <p>If you needed help, do not hesitate to contact customer service at number <strong>n° 9</strong></p>
            <p>Code Wifi : <strong>Radisson2021</strong></p>
          </div>

          <div className="checkout-info">
            <p>Le Check out est à 12h00. En cas de Départ après midi nous vous remercierons de contacter la réception.</p>
          </div>
          
          <p>Have a good stay</p>
        </main>
      </div>
      
      {/* Existing Content: Contact Information */}
      <div className="Informations-cards">
        <div className="Informations-card">
          <h3>Contact général</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
        </div>
        <div className="Informations-card">
          <h3>Services de réservation</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:reservation.alhoceima@radissonblu.com">reservation.alhoceima@radissonblu.com</a></p>
        </div>
        <div className="Informations-card">
          <h3>Réunions et événements</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
        </div>
        <div className="Informations-card">
          <h3>Objets trouvés</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:info.alhoceima@radissonblu.com">info.alhoceima@radissonblu.com</a></p>
        </div>
        <div className="Informations-card">
          <h3>Ventes et marketing</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:sales.alhoceima@radissonblu.com">sales.alhoceima@radissonblu.com</a></p>
        </div>
        <div className="Informations-card">
          <h3>Réservations de groupe</h3>
          <p>+212 (5) 39 84 4000</p>
          <p><a href="mailto:reservation.alhoceima@radissonblu.com">reservation.alhoceima@radissonblu.com</a></p>
        </div>
      </div>
      
      {/* Existing Content: Directions */}
      <div className="Informations-direction">
        <h2>Comment se rendre au Radisson Blu Resort, Al Hoceima</h2>
        <div className="Informations-card">
          <h3><span className="icon">✈️</span> Depuis l'aéroport de Cherif Al Idrissi</h3>
          <p><strong>En taxi/voiture :</strong></p>
          <p>L'hôtel se trouve à 10 kilomètres de l'aéroport et, selon la circulation, il faut environ 20 minutes pour se rendre au complexe. Sortez de l'aéroport par le tunnel principal, en restant sur la voie de droite. Tournez à droite en suivant les panneaux direction Al Hoceima. Dans la commune d'Ajdir, continuez en direction d'Al Hoceima et au rond-point d'Al Hoceima Bay, prenez la première route sur la droite. Roulez pendant 1,2 kilomètre en direction de la plage et des panneaux de l'hôtel et vous verrez notre établissement. Un trajet en taxi coûte 150 MAD. Des taxis se trouvent devant l'aéroport. L'hôtel propose également un service de navette à la demande en voiture privée pour 250 MAD.</p>
        </div>
      </div>
    </div>
  );
};

export default RadissonBluResort;
