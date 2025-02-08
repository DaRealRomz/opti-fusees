import "./App.css";
import { BarreCO2 } from "./components/BarreCO2";

function App() {
  return (
    <>
      <div>
        <BarreCO2 progres={0.5} limit={"8T CO2 e.q."} />
      </div>
    </>
  );
}

export default App;
