type AddFn = (a: number, b: number) => number;
interface AddFn2 {
  (a: number, b: number): number;
}

const add: AddFn = (a: number, b: number) => a + b;
const add2: AddFn2 = (a: number, b: number) => a + b;

interface Named {
  readonly name: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  age = 30;
  constructor(public name: string) {
    this.name = name;
  }
  greet(phrase: string): void {
    console.log(`${phrase} it's ${this.name}, and I'm ${this.age}`);
  }
}

let user1: Greetable;

user1 = {
  name: "John",
  greet(phrase: string) {
    console.log(phrase + " I am " + this.name);
  },
};
const user2 = new Person("Leyla");

user1.greet("Hi there!");
user2.greet("Hello!");
