const G = 6.6743e-11;

class Engine {
  rocket?: Rocket;
  alpha = 0.2;

  constructor(
    public Isp: number, // Specific impulse (s)
    public maxThrust: number // Maximum thrust (N)
  ) {}

  thrust(): number {
    this.assertRocket();
    return this.maxThrust * (1 - this.alpha * (this.rocket.time / this.rocket.burnTime));
  }

  mDot(): number {
    this.assertRocket();
    return this.thrust() / (this.Isp * this.rocket.g());
  }

  private assertRocket(): asserts this is { rocket: Rocket } {
    if (!this.rocket) {
      throw new Error("Engine not attached to a rocket");
    }
  }
}

class Rocket {
  time = 0;
  height = 0;
  speed = 0;

  constructor(
    public mass: number, // kg
    public engines: Engine[],
    public diameter: number, // m
    public dragCoefficient: number,
    public burnTime: number // s
  ) {
    engines.forEach((engine) => (engine.rocket = this));
  }

  get crossSectionalArea() {
    return Math.PI * Math.pow(this.diameter / 2, 2);
  }

  step() {
    const dt = 0.1; // Time step in seconds
    const dm = this.mDot() * dt;
    this.speed += this.acceleration() * dt;
    this.height += this.speed * dt;
    this.mass -= dm;
    this.time += dt;
  }

  acceleration() {
    return this.force() / this.mass;
  }

  force() {
    return this.thrust() - this.drag() - this.gravity();
  }

  g() {
    return (G * 5.9722e24) / Math.pow(6378e3 + this.height, 2);
  }

  mDot() {
    return this.engines.reduce((acc, engine) => acc + engine.mDot(), 0);
  }

  thrust() {
    return this.time < this.burnTime ? this.engines.reduce((acc, engine) => acc + engine.thrust(), 0) : 0;
  }

  gravity() {
    return this.mass * this.g();
  }

  drag() {
    return 0.5 * this.dragCoefficient * this.airDensity() * Math.pow(this.speed, 2) * this.crossSectionalArea;
  }

  airDensity() {
    return this.airPressure() / (287.05 * (15.04 + 273.15));
  }

  airPressure() {
    if (this.height > 25000) {
      const T = -131.21 + 0.00299 * this.height;
      return 2.488 * Math.pow((T + 273.1) / 216.6, -11.388);
    } else if (this.height > 11000) {
      return 22.65 * Math.exp(1.73 - 0.000157 * this.height);
    } else {
      const T = 15.04 - 0.00649 * this.height;
      return 101.29 * Math.pow((T + 273.1) / 288.08, 5.256);
    }
  }
}

const engines = Array.from({ length: 9 }, () => new Engine(282, 845e3));
const rocket = new Rocket(549054, engines, 3.7, 0.75, 162);

do {
  rocket.step();
  console.log(rocket.time + "\t" + rocket.height);
} while (rocket.height >= 0);
