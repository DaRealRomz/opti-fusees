import React, { useState } from "react";
import "./Niveaux.css";
import { useNavigate } from "react-router";
import SpaceWarpTransition from "../../components/SpaceWarpTransition";

const PageNiveaux = () => {
  const naviguer = useNavigate();
  const [showStars, setShowStars] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const numStars = 100;

  const stars = Array.from({ length: numStars }, (_, i) => {
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 1 + 1;
    const delay = Math.random() * 2;

    return (
      <div
        key={i}
        className="star"
        style={{
          left: `${x}vw`,
          top: `${y}vh`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        }}
      />
    );
  });

  const handleLevelClick = (niveau: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setShowStars(true);

    setTimeout(() => {
      naviguer(`/editeur?niveau=${niveau}`);
    }, 4000);
  };

  return (
    <div className={`niveaux-container ${showStars ? "stars-active hidden" : ""}`}>
      {showStars && <div className="stars">{stars}</div>}

      <button className="Retour-button" onClick={() => naviguer("/")}>
        Retour
      </button>
      <h1 className="niveaux-title">Opti Fusées</h1>
      <h2 className="niveaux-sous-title">Niveaux</h2>
      <div className="niveaux-buttons">
        <SpaceWarpTransition navigateTo="/editeur?niveau=1">
          <button className="niveaux-button" onClick={() => handleLevelClick(1)} disabled={isTransitioning}>
            <span className="text-button">1</span>
          </button>
        </SpaceWarpTransition>
        <SpaceWarpTransition navigateTo="/editeur?niveau=2">
          <button className="niveaux-button" onClick={() => handleLevelClick(2)} disabled={isTransitioning}>
            <span className="text-button">2</span>
          </button>
        </SpaceWarpTransition>
        <SpaceWarpTransition navigateTo="/editeur?niveau=3">
          <button className="niveaux-button" onClick={() => handleLevelClick(3)} disabled={isTransitioning}>
            <span className="text-button">3</span>
          </button>
        </SpaceWarpTransition>
      </div>
    </div>
  );
};

export default PageNiveaux;
