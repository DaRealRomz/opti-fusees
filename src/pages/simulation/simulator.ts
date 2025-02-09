const G = 6.6743e-11;
export const EARTH_RADIUS = 6378e3;

class Vector2 {
  constructor(public x = 0, public y = 0) {}

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  unit() {
    const mag = this.magnitude();
    return new Vector2(this.x / mag, this.y / mag);
  }

  add(other: Vector2) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }

  multiply(scalar: number) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }

  rotate(angle: number) {
    return new Vector2(
      this.x * Math.cos(angle) - this.y * Math.sin(angle),
      this.x * Math.sin(angle) + this.y * Math.cos(angle)
    );
  }
}

class Engine {
  rocket?: Rocket;
  alpha = 0;

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
  position = new Vector2(0, EARTH_RADIUS);
  speed = new Vector2(0, 1e-9);

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
    this.speed = this.speed.add(this.acceleration().multiply(dt));
    this.position = this.position.add(this.speed.multiply(dt));
    this.mass -= dm;
    this.time += dt;
  }

  acceleration() {
    return this.force().multiply(1 / this.mass);
  }

  force() {
    return this.thrust().add(this.drag()).add(this.gravity());
  }

  g() {
    return (G * 5.9722e24) / Math.pow(this.position.magnitude(), 2);
  }

  mDot() {
    return this.engines.reduce((acc, engine) => acc + engine.mDot(), 0);
  }

  thrust() {
    if (this.time > this.burnTime) return new Vector2();
    const thrust = this.engines.reduce((acc, engine) => acc + engine.thrust(), 0);
    return this.speed.unit().multiply(thrust);
  }

  gravity() {
    const force = this.mass * this.g();
    return this.position.unit().multiply(-force);
  }

  drag() {
    const drag =
      0.5 * this.dragCoefficient * this.airDensity() * Math.pow(this.speed.magnitude(), 2) * this.crossSectionalArea;
    return this.speed.unit().multiply(-drag);
  }

  airDensity() {
    return this.airPressure() / (287.05 * (15.04 + 273.15));
  }

  altitude() {
    return this.position.magnitude() - EARTH_RADIUS;
  }

  airPressure() {
    const altitude = this.altitude();

    if (altitude > 25000) {
      const T = -131.21 + 0.00299 * altitude;
      return 2.488 * Math.pow((T + 273.1) / 216.6, -11.388);
    } else if (altitude > 11000) {
      return 22.65 * Math.exp(1.73 - 0.000157 * altitude);
    } else {
      const T = 15.04 - 0.00649 * altitude;
      return 101.29 * Math.pow((T + 273.1) / 288.08, 5.256);
    }
  }
}

const engines = Array.from({ length: 9 }, () => new Engine(282, 845e3));
const rocket = new Rocket(549054, engines, 3.7, 0.75, 160200);

do {
  rocket.step();
  console.log(rocket.position.x.toFixed(20) + "\t" + rocket.position.y.toFixed(20));
} while (rocket.altitude() >= 0);
