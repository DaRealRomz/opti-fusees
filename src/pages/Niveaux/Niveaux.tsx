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
          <button className="niveaux-button" onClick={() => naviguer("/editeur?niveau=1")}>
            <span className="text-button">1</span>
          </button>
          <button className="niveaux-button" onClick={() => naviguer("/editeur?niveau=2")}>
          <span className="text-button">2</span>
          </button>
          <button className="niveaux-button" onClick={() => naviguer("/editeur?niveau=3")}>
          <span className="text-button">3</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PageNiveaux;
