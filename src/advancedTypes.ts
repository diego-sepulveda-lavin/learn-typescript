// Intersection types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Mike",
  privileges: ["create-server"],
  startDate: new Date(),
};

// Type Guards
type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const universalVariable: Universal = 2;

// Type Guards with typeof
function sum(a: number, b: number): number; // function overload to get better recognition depending on inputs
function sum(a: string, b: string): string; // function overload to get better recognition depending on inputs
function sum(a: number, b: string): string; // function overload to get better recognition depending on inputs
function sum(a: string, b: number): string; // function overload to get better recognition depending on inputs
function sum(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}
console.log(sum("2", "3"));
console.log(sum("2", 3));
console.log(sum(2, 3));

// Type Guards with "string" in
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInformation(e1);

// Type Guards with instance of

class Bike {
  drive() {
    console.log("Driving a Bike...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Machine = Bike | Truck;

const m1 = new Bike();
const m2 = new Truck();

function useMachine(machine: Machine) {
  machine.drive();
  if (machine instanceof Truck) {
    machine.loadCargo(100);
  }
}
useMachine(m1);
useMachine(m2);

//Discriminated Unions
interface Bird {
  type: "Bird";
  flyingSpeed: number;
}

interface Horse {
  type: "Horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "Bird":
      speed = animal.flyingSpeed;
      break;
    case "Horse":
      speed = animal.runningSpeed;
  }
  console.log("Animal moving at speed: " + speed);
}

moveAnimal({ type: "Bird", flyingSpeed: 30 });

// Index Properties
interface ErrorContainer {
  [prop: string]: string;
}

const erroBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Not a valid username!",
};

// Optional Chaining
const fetchedUserDataFromBackend = {
  id: "u1",
  name: "John",
  job: {
    // data that may not be ready yet
    title: "CEO",
    description: "My own company",
  },
};

console.log(fetchedUserDataFromBackend.job && fetchedUserDataFromBackend.job.title); // common JS check
console.log(fetchedUserDataFromBackend.job?.title); // with optional chaining

// Nullish Coalescing
const userInput = null; // data we don't know if is null
const storedData = userInput ?? "DEFAULT"; // if userInput is STRICTLY null or undefined the use DEFAULT

console.log(storedData);
