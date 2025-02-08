import { BarreCO2 } from "../../components/BarreCO2";
import imageSol from "./images/sol.png";
import imagePlateforme from "./images/plateforme.png";

export function Editeur() {
  return (
    <div className="w-full h-screen bg-linear-to-b from-[#51B6FF] to-[#92FFFD]">
      <div className="py-4">
        <BarreCO2 limit="8T CO2 MAX" progres={0.5} />
      </div>
      <img className="h-[150px] w-full absolute bottom-0 object-cover" src={imageSol} />
      <img className="h-[340px] absolute bottom-0 left-[300px]" src={imagePlateforme} />
    </div>
  );
}
