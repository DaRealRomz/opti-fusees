import { useState } from "react";
import { BarreCO2 } from "../../components/BarreCO2";
import imageTerre from "./images/terre.png";
import { EARTH_RADIUS } from "./simulator";

export function Simulation() {
  const [position, setPosition] = useState({ x: 0, y: EARTH_RADIUS });

  return (
    <div className="w-full h-screen bg-linear-to-b from-[#2c2c2c] to-[#000000]">
      <div className="py-4">
        <BarreCO2 limite={8} utilise={3} />
        <img
          src={imageTerre}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[50vh] rounded-full border-2 border-blue-500 rotate-[120deg]"
        />
        <div
          style={{ height: "calc(50vh * 1.0624)", width: "calc(50vh * 1.0624)" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
        ></div>
        <div
          style={{
            transform: `translate(calc(-50% + 25vh * ${position.x / EARTH_RADIUS}), calc(50% - 25vh * ${
              position.y / EARTH_RADIUS
            }))`,
          }}
          className="h-1 w-1 absolute rounded-full bg-amber-300 top-1/2 left-1/2"
        ></div>
      </div>
    </div>
  );
}
