import React from 'react';
import "./Accueil.css";

const PageInitial = () => {

  return (
    <div
      className="accueil-container"
    >
      <h1 className="accueil-title">Opti Fusées</h1>
      <button className="accueil-button" onClick={() => alert('Niveaux sélectionné!')}>Niveaux</button>
      <button className="accueil-button" onClick={() => alert('Mode Bac à sable sélectionné!')}>Bac à sable</button>
    </div>
  );
}

export default PageInitial;
