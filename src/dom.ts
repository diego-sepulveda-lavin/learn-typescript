// Type Casting
const userInputElement = <HTMLInputElement>document.getElementById("user-input");
const increaseBtn = <HTMLButtonElement>document.getElementById("increase-btn");
const decreaseBtn = document.getElementById("decrease-btn") as HTMLButtonElement;

if (increaseBtn) {
  increaseBtn.addEventListener("click", () => {
    let currVal = parseInt(userInputElement.value);
    userInputElement.value = (currVal + 1).toString();
  });
}

if (decreaseBtn) {
  decreaseBtn.addEventListener("click", () => {
    let currVal = parseInt(userInputElement.value);
    userInputElement.value = (currVal - 1).toString();
  });
}
