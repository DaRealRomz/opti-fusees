import { Engine } from "../pages/simulation/simulator";

export const rockets: {
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
