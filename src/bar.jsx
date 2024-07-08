import React, { useState } from 'react';
import Animation from './animation'; // Assuming Animation is imported from './animation'
import './App.css';
import Informations from "./informations";
import Excursion from "./excursion";
import Spa from "./spa";
// import Bar from "./bar"; // Correcting import path for Bar


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Bar() {
      return (
    <div className="Bar">
      <div className='text'>
        <h1>Découvrez nos options de restauration à Al Hoceima</h1>
        <p> Offrez-vous une expérience culinaire dans nos bars et nos restaurants sur place
            au Radisson Blu Resort, Al Hoceima. Le Cedar, notre spacieux restaurant ouvert toute
            la journée, sert des plats délicieux. Prenez votre repas au bord de la plage au restaurant 
            Island, savourez du poisson frais au Fish House ou dégustez des spécialités marocaines au Saffron.
        </p>
      </div>
      <div className="buttons">
        <div className="buttons-left">
          <Link className="button" to="/openBar">
            Carte Open Bar
          </Link>
          <Link className="button" to="/penthouse">
            Carte Penthouse
          </Link>
        </div>
      </div>

    </div>
  );
};

export default Bar;
