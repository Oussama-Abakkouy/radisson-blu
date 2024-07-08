import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Informations from "./informations";
import Excursion from "./excursion";
import Spa from "./spa";
import Bar from "./bar";
import Restauration from "./restauration";
import Animation from "./animation"; // Corrected if necessary
import Splash from "./splash";
import Menu from "./menu";
import OpenBar from "./openBar";
import Penthouse from "./penthouse";
import Chicha from "./chicha";
import Island from "./island";
import Allin from "./allin";
import Marocain from "./marocain";
import Fish from "./fish";
import Cedar from "./cedar";


const MyCont = () => {
  return (
    <div className="App">
      <img src="white.png" alt="Resort Image" width={150} style={{ marginTop: "10px" }} />
      <p>
        Évadez-vous dans un resort isolé exceptionnel en bord de mer et
        découvrez le charme unique et l'histoire riche de la côte
        méditerranéenne du Maroc
      </p>

      <div className="title">
        <h1>
          Radisson Blu Resort Al Hoceima <p>Every Moment Matters</p>
        </h1>
      </div>

      <div className="content">
        <div className="buttons">
          <div className="buttons-left">
            <Link className="button" to="/looby">Looby</Link>
            <Link className="button" to="/excursion">Excursion</Link>
            <Link className="button" to="/animation">Animation</Link>
          </div>
          <div className="buttons-right">
            <Link className="button" to="/restauration">Food & Drinks</Link>
            <Link className="button" to="/spa">Spa Rosemarie</Link>
            <Link className="button" to="/informations">Informations</Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="contact-info">
          <p>05 39 84 40 00</p>
          <p>reservation.alhoceima@radissonblu.com</p>
        </div>
      </footer>
    </div>
  );
};

function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyCont />} />
        <Route path="/informations" element={<Informations />} />
        <Route path="/excursion" element={<Excursion />} />
        <Route path="/spa" element={<Spa />} />
        <Route path="/restauration" element={<Restauration />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/splash" element={<Splash />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/openBar" element={<OpenBar />} />
        <Route path="/penthouse" element={<Penthouse />} />
        <Route path="/chicha" element={<Chicha />} />
        <Route path="/island" element={<Island />} />
        <Route path="/allin" element={<Allin />} />
        <Route path="/marocain" element={<Marocain />} />
        <Route path="/fish" element={<Fish />} />
        <Route path="/cedar" element={<Cedar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Home;
