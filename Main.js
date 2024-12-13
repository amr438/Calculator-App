// Selectors
let display = document.querySelector(".display");
let input = document.querySelector("input");
let Result = document.querySelector(".Result");
let numbers = document.querySelectorAll(".number");
let operation = document.querySelectorAll(".operation");
let clear = document.querySelector(".clear");
let Equal = document.querySelector(".Equal");
let del = document.querySelector(".Del")
console.log(del)

// Lopping In Numbers
if (input.value != 'Math Error') {
  numbers.forEach((e) => {
    e.addEventListener("click", () => {
      // Delete disabled Attribute From Input
      input.removeAttribute("disabled");
      // Change The Input Value
      input.value += e.textContent;
    });
  });
}
// Clear Values
clear.onclick = () => {
  input.value = "";
  Result.textContent = "";
};

Equal.addEventListener("click", () => {
if (input.value.length >= 1) {
    // The Execution Context
  let result =calc(input.value)
    console.log(result)
    Result.textContent = result;
}
});

del.onclick = function () {
  input.value = input.value.substring(0,input.value.length-1)
}
let x = 'Math Error'
function calc(string) {
  try {
    return math.evaluate(string)
    
  } catch (E) {
    input.value = x
    };
  }

