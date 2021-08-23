// First class decorator
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Human {
  name = "Max";

  constructor() {
    console.log("Creating Human object ..");
  }
}

const pers = new Human();

console.log(pers);

// Decorator Factory
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const b = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = b.brand;
    }
  };
}

@Logger2("LOGGING - BUS")
@WithTemplate("<h1>My Bus object</h1>", "app")
class Bus {
  brand = "Toyota";

  constructor() {
    console.log("Creating Bus object ..");
  }
}

const bus = new Bus();

console.log(bus);
