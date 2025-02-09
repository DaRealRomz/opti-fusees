import { useEffect, useState } from "react";
import { BarreCO2 } from "../../components/BarreCO2";
import imageTerre from "./images/terre.png";
import { EARTH_RADIUS, falcon9 } from "./simulator";
import { rockets } from "../../Constantes/rockets";

const emissionsParKgConsomme: number[] = [2.75, 0.5, 3.1];

export function Simulation() {
  const [position, setPosition] = useState({ x: 0, y: EARTH_RADIUS });
  const [color, setColor] = useState("yellow");
  const [co2, setCo2] = useState(0);

  const params = new URLSearchParams(window.location.search);
  const rocket = rockets[parseInt(params.get("rocket") ?? "0")];
  const emissions = emissionsParKgConsomme[parseInt(params.get("carburant") ?? "0")];

  useEffect(() => {
    const fusee = falcon9;
    const interval = setInterval(() => {
      for (let i = 0; i < 10; i++) fusee.step();
      setPosition(fusee.position);
      setColor(fusee.burning ? "limegreen" : "red");
      setCo2(fusee.burnedFuel * emissions);
    }, 1);
    return () => clearInterval(interval);
  }, [emissions]);

  return (
    <div className="w-full h-screen bg-linear-to-b from-[#2c2c2c] to-[#000000]">
      <div className="py-4">
        <BarreCO2 addedCo2={rocket.manufacturingCo2} utilise={co2 / 1000} />
        <img
          src={imageTerre}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70vh] rounded-full border-2 border-blue-500 rotate-[120deg]"
        />
        <div
          style={{ height: "calc(70vh * 1.0624)", width: "calc(70vh * 1.0624)" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white border-dotted"
        ></div>
        <div
          style={{
            transform: `translate(calc(-50% + 35vh * ${position.x / EARTH_RADIUS}), calc(50% - 35vh * ${
              position.y / EARTH_RADIUS
            }))`,
            backgroundColor: color,
          }}
          className="h-2 w-2 absolute rounded-full top-1/2 left-1/2"
        ></div>
      </div>
    </div>
  );
}
