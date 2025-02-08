import { Route, Routes } from "react-router";
import "./App.css";
import { BarreCO2 } from "./components/BarreCO2";
import PageInitiale from "./pages/Accueil/Accueil";
import PageNiveaux from "./pages/Niveaux/Niveaux";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInitiale />} />
      <Route path="/barre-co2" element={<BarreCO2 progres={0.5} limit="50%" />} />
      <Route path="/niveaux" element={<PageNiveaux />} />
    </Routes>
  );
}

export default App;
