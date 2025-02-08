import React from "react";
import "./Niveaux.css";
import { useNavigate } from "react-router";

const PageNiveaux = () => {
  const naviguer = useNavigate();
  return (
    <>
      <div className="niveaux-container">
        <button className="Retour-button" onClick={() => naviguer("/")}>
          Retour
        </button>
        <h1 className="niveaux-title">Opti Fusées</h1>
        <h2 className='niveaux-sous-title'>Niveaux</h2>
        <div className="niveaux-buttons">
          <button className="niveaux-button" onClick={() => alert("Niveaux 1!")}>
            Niveaux 1
          </button>
          <button className="niveaux-button" onClick={() => alert("Mode Bawada!")}>
            Niveau 2
          </button>
          <button className="niveaux-button" onClick={() => alert("Ndaddawlectawdaionné!")}>
            Niveau 3
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNiveaux;
