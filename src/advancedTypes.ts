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

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

const universalVariable: Universal = 2;

const sum = (a: Combinable, b: Combinable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};
console.log(sum("2", "3"));
console.log(sum("2", 3));
console.log(sum(2, 3));

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
