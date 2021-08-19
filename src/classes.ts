abstract class Vehicle {
  protected brand: string;
  price: number;
  owner: string | null;
  private readonly soldDate: number;
  private type: string;

  constructor(brand: string, price: number, soldDate: number, type: string) {
    this.brand = brand;
    this.price = price;
    this.owner = null;
    this.soldDate = soldDate;
    this.type = type;
  }

  printDetails(): void {
    console.log(
      `Brand: ${this.brand}, price: ${this.price}, owner: ${this.owner}, soldDate: ${this.soldDate}, type:${this.type}`
    );
  }
  abstract start(): void;
}

class Car extends Vehicle {
  constructor(brand: string, price: number, soldDate: number) {
    super(brand, price, soldDate, "car");
  }

  start() {
    console.log("starting car");
  }
}

class Motorcycle extends Vehicle {
  constructor(brand: string, price: number, soldDate: number) {
    super(brand, price, soldDate, "motorcylce");
  }

  doWheelie() {
    console.log(`The ${this.brand} is doing a wheelie!`);
  }

  start() {
    console.log("starting motorcycle");
  }
}

// Singleton
class UniqueLuxuryCar extends Vehicle {
  private static instance: UniqueLuxuryCar;

  private constructor(brand: string, price: number, soldDate: number) {
    super(brand, price, soldDate, "Luxury Car");
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new UniqueLuxuryCar("Bentley", 350_000, 2018);
    return this.instance;
  }

  start() {
    console.log("starting luxury car");
  }
}

const toyota = new Car("Toyota", 24000, new Date().getFullYear());
const yamaha = new Motorcycle("Yamaha", 22000, new Date().getFullYear());
const uniqueLuxuryCar = UniqueLuxuryCar.getInstance();
const uniqueLuxuryCar2 = UniqueLuxuryCar.getInstance();

yamaha.owner = "John";

toyota.printDetails();
toyota.start();

yamaha.printDetails();
yamaha.start();
yamaha.doWheelie();

//Singleton
console.log(uniqueLuxuryCar);
console.log(uniqueLuxuryCar2);
