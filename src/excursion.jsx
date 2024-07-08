import React from 'react';
import './App.css';

function Excursion() {
  return (
    <div className="Excursion">
      <div className="card">
        <div className="card-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1158/1158882.png" alt="Location Icon" />
          <div>
            <p className="card-title">Al Mazamma</p>
            <p className="card-footer">0.19 mi / 0.3 km from the hotel</p>
          </div>
        </div>
        <p className="card-text">Located in the heart of a wooded area and close to Souani beach, discover the fascinating ancient ruins of Al Mazamma. Founded by the Banu Salish of the Emirate of Nekor in the 9th century, the old port of the medieval city is a must-visit during a visit to Al Hoceima.</p>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="https://cdn-icons-png.flaticon.com/512/3237/3237770.png" alt="Location Icon" />
          <div>
            <p className="card-title">Sfiha Beach</p>
            <p className="card-footer">0.46 mi / 0.74 km from the hotel</p>
          </div>
        </div>
        <p className="card-text">Relax under the sun and take a dip in the cool, turquoise waters of Sfiha Beach. Extending over 1,650 meters of soft grey sand, this gorgeous beach offers panoramic views of the famous rock of Al Hoceima.</p>
      </div>
      <div className="card">
        <div className="card-header">
          <img src="https://cdn-icons-png.flaticon.com/512/1158/1158882.png" alt="Location Icon" />
          <div>
            <p className="card-title">Boujibar National Park</p>
            <p className="card-footer">2.05 mi / 3.3 km from the hotel</p>
          </div>
        </div>
        <p className="card-text">One of the most important recreational spaces in Al Hoceima, Boujibar National Park is the perfect spot for those looking to escape hectic city life. Stroll through the park's trails, enjoy the gentle sea breeze, and admire the uninterrupted views of verdant nature against the sea in the background.</p>
      </div>
    </div>
  );
}

export default Excursion;
