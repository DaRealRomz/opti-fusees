import { useState } from "react";
import { BarreCO2 } from "../../components/BarreCO2";
import { SelectFusee } from "../../components/SelectFusee";
import imagePlateforme from "./images/plateforme.png";
import imageSol from "./images/sol.png";
import { SelectCarburant } from "../../components/SelectCarburant";

export function Editeur() {
  const [fusee, setFusee] = useState(0);
  const [carburant, setCarburant] = useState(0);

  const imageFusee = () => `/src/components/images/fusee${fusee}.png`;
  const imageCarburant = () => `/src/components/images/combustible${carburant}.png`;

  return (
    <div className="w-full h-screen bg-linear-to-b from-[#51B6FF] to-[#92FFFD]">
      <div className="py-4">
        <BarreCO2 limit="8T CO2 MAX" progres={0.5} />
      </div>
      <SelectFusee setFusee={setFusee} />
      <SelectCarburant setCarburant={setCarburant} />
      <img className="h-[500px] absolute bottom-0 left-[500px] z-10" src={imageFusee()} />
      <img className="w-[200px] absolute bottom-[200px] left-[900px] z-10" src={imageCarburant()} />
      <img className="h-[150px] w-full absolute bottom-0 object-cover" src={imageSol} />
      <img className="h-[340px] absolute bottom-0 left-[300px]" src={imagePlateforme} />
    </div>
  );
}
