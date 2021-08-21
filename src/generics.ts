const names: Array<string> = ["John", "Mike"]; // string[]

const promise: Promise<number> = new Promise((resolve) => {
  // with Promise<number> we tell TS the promise will yield a number after it resolves
  setTimeout(() => {
    resolve(10);
  }, 100);
});

promise.then((data) => {
  data.toFixed(2);
});

// Generic functions
function merge(objA: object, objB: object) {
  return Object.assign(objA, objB);
}
const mergedObj = merge({ name: "John" }, { age: 30 });
console.log(mergedObj); // can't access object properties

function merge2<T, U>(objA: T, objB: U) {
  //return Object.assign(objA, objB); // both cases TS infers the intersection
  return { ...objA, ...objB };
}
const mergedObj2 = merge2({ name: "Mike" }, { age: 30 });
console.log(mergedObj2.name); // now we can access

// Function generics with constraints forces the generic types to be a certain type
function merge3<T extends object, U extends object>(objA: T, objB: U) {
  //return Object.assign(objA, objB); // both cases TS infers the intersection
  return { ...objA, ...objB };
}
const mergedObj3 = merge3({ name: "Mike" }, { age: 23 });
console.log(mergedObj3.name); // now we can access

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There!"));
console.log(countAndDescribe(["Sports", "Cooking"]));
console.log(countAndDescribe([]));

// The "keyof" Constraint
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConvert({ name: "Pedro" }, "name");

// Generic Classes

class DataStorage<T extends boolean | string | number> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hi");
textStorage.addItem("Bye");
textStorage.removeItem("Bye");
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(2);
numberStorage.addItem(4);
numberStorage.removeItem(2);
console.log(numberStorage.getItems());

const booleanAndNumberStorage = new DataStorage<number | boolean>();
booleanAndNumberStorage.addItem(2);
booleanAndNumberStorage.addItem(4);
booleanAndNumberStorage.addItem(true);
booleanAndNumberStorage.removeItem(2);
console.log(booleanAndNumberStorage.getItems());

// Generic Utility Types
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  //return { title: title, description: description, completeUntil: date };
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const girlNames: Readonly<string[]> = ["Sarah", "Pau"];
//girlNames.push("Leyla");
//girlNames.pop();

console.log(girlNames);
