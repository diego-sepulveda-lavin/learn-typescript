const names: Array<string> = ["John", "Mike"]; // string[]

const promise: Promise<number> = new Promise((resolve, reject) => {
  // with Promise<number> we tell TS the promise will yield a number after it resolves
  setTimeout(() => {
    resolve(10);
  }, 100);
});

promise.then((data) => {
  //data.split(" ");
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
const mergedObj3 = merge3({ name: "Mike" }, 30);
console.log(mergedObj3.name); // now we can access
