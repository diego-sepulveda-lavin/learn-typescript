"use strict";
class Person {
    constructor(name) {
        this.name = name;
        this.age = 30;
        this.name = name;
    }
    greet(phrase) {
        console.log(`${phrase} it's ${this.name}, and I'm ${this.age}`);
    }
}
let user1;
user1 = {
    name: "John",
    greet(phrase) {
        console.log(phrase + " I am " + this.name);
    },
};
const user2 = new Person("Leyla");
user1.greet("Hi there!");
user2.greet("Hello!");
//# sourceMappingURL=interfaces.js.map