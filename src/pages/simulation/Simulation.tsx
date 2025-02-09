import { useEffect, useState } from "react";
import { BarreCO2 } from "../../components/BarreCO2";
import imageTerre from "./images/terre.png";
import { EARTH_RADIUS, Engine, Rocket } from "./simulator";

const rockets: {
  mass: number;
  engines: Engine[];
  diameter: number;
  dragCoefficient: number;
  burnTime: number;
  manufacturingCo2: number;
}[] = [
  {
    mass: 2.6e6,
    engines: Array.from({ length: 4 }, () => new Engine(366, 1.86e6)),
    diameter: 8.4,
    dragCoefficient: 0.75,
    burnTime: 8 * 60,
    manufacturingCo2: 3500,
  },
  {
    mass: 5e6,
    engines: Array.from({ length: 6 }, () => new Engine(350, 2.26e6)),
    diameter: 9,
    dragCoefficient: 2.16,
    burnTime: 159,
    manufacturingCo2: 3000,
  },
  {
    mass: 5.9e6,
    engines: [new Engine(245, 3.8e6)],
    diameter: 5,
    dragCoefficient: 1.82,
    burnTime: 253,
    manufacturingCo2: 2250,
  },
  {
    mass: 5.49e6,
    engines: Array.from({ length: 9 }, () => new Engine(282, 845e3)),
    diameter: 3.7,
    dragCoefficient: 0.75,
    burnTime: 162,
    manufacturingCo2: 1500,
  },
];

const emissionsParKgConsomme: number[] = [2.75, 0.5, 3.1];

export function Simulation() {
  const [position, setPosition] = useState({ x: 0, y: EARTH_RADIUS });
  const [co2, setCo2] = useState(0);

  const params = new URLSearchParams(window.location.search);
  const rocket = rockets[parseInt(params.get("rocket") ?? "0")];
  const emissions = emissionsParKgConsomme[parseInt(params.get("carburant") ?? "0")];

  useEffect(() => {
    const fusee = new Rocket(rocket.mass, rocket.engines, rocket.diameter, rocket.dragCoefficient, rocket.burnTime);
    const interval = setInterval(() => {
      for (let i = 0; i < 10; i++) fusee.step();
      setPosition(fusee.position);
      setCo2((rocket.mass - fusee.mass) * emissions);
    }, 1000 / 10);
    return () => clearInterval(interval);
  }, [emissions, rocket.burnTime, rocket.diameter, rocket.dragCoefficient, rocket.engines, rocket.mass]);

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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white"
        ></div>
        <div
          style={{
            transform: `translate(calc(-50% + 35vh * ${position.x / EARTH_RADIUS}), calc(50% - 35vh * ${
              position.y / EARTH_RADIUS
            }))`,
          }}
          className="h-1 w-1 absolute rounded-full bg-amber-300 top-1/2 left-1/2"
        ></div>
      </div>
    </div>
  );
}
