import { Route, Routes } from "react-router";
import "./App.css";
import { BarreCO2 } from "./components/BarreCO2";
import { VueInitiale } from "./pages/VueInitiale";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VueInitiale />} />
      <Route path="/barre-co2" element={<BarreCO2 progres={0.5} limit="50%" />} />
    </Routes>
  );
}

export default App;
