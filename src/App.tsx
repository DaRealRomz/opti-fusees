import { Route, Routes } from "react-router";
import "./App.css";
import { BarreCO2 } from "./components/BarreCO2";
import PageInitiale from "./pages/Accueil/Accueil";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInitiale />} />
      <Route path="/barre-co2" element={<BarreCO2 progres={0.5} limit="50%" />} />
    </Routes>
  );
}

export default App;
