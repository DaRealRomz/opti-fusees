import React from 'react';
import "./Accueil.css";
import { useNavigate } from 'react-router';

const PageInitial = () => {

  const naviguer = useNavigate();

  return (
    <div
      className="accueil-container"
    >
      <h1 className="accueil-title">Opti Fusées</h1>
      <button className="accueil-button" onClick={() => naviguer('/niveaux')}>Niveaux</button>
      <button className="accueil-button" onClick={() => naviguer('/editeur')}>Bac à sable</button>
    </div>
  );
}

export default PageInitial;
