import { Route, Routes } from "react-router";
import "./App.css";
import { VueInitiale } from "./pages/VueInitiale";
import { Editeur } from "./pages/Editeur";

function App() {
  return (
    <Routes>
      <Route path="/" element={<VueInitiale />} />
      <Route path="/editeur" element={<Editeur />} />
    </Routes>
  );
}

export default App;
