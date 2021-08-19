"use strict";
class Vehicle {
    constructor(brand, price, soldDate, type) {
        this.brand = brand;
        this.price = price;
        this.owner = null;
        this.soldDate = soldDate;
        this.type = type;
    }
    printDetails() {
        console.log(`Brand: ${this.brand}, price: ${this.price}, owner: ${this.owner}, soldDate: ${this.soldDate}, type:${this.type}`);
    }
}
class Car extends Vehicle {
    constructor(brand, price, soldDate) {
        super(brand, price, soldDate, "car");
    }
    start() {
        console.log("starting car");
    }
}
class Motorcycle extends Vehicle {
    constructor(brand, price, soldDate) {
        super(brand, price, soldDate, "motorcylce");
    }
    doWheelie() {
        console.log(`The ${this.brand} is doing a wheelie!`);
    }
    start() {
        console.log("starting motorcycle");
    }
}
class UniqueLuxuryCar extends Vehicle {
    constructor(brand, price, soldDate) {
        super(brand, price, soldDate, "Luxury Car");
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new UniqueLuxuryCar("Bentley", 350000, 2018);
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
console.log(uniqueLuxuryCar);
console.log(uniqueLuxuryCar2);
//# sourceMappingURL=classes.js.map