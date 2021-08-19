interface Named {
  readonly name: string;
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
