import { Route, Routes } from "react-router";
import PageInitiale from "./pages/Accueil/Accueil";
import { Editeur } from "./pages/Editeur/Editeur";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageInitiale />} />
      <Route path="/editeur" element={<Editeur />} />
    </Routes>
  );
}

export default App;
