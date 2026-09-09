//Function declaration
function doMath(a, b) {
  let c = a + b;
  return c;
}
//Function expression
const doMath2 = function (a, b) {
  let c = a + b;
  return c;
};

//Arrow function
const doMath3 = (a, b) => {
  let c = a + b;
  return c;
};
//hoisted function
console.log("Hoisted function call before declaration", doMultiple(3, 4));
function doMultiple(a, b) {
  let c = a * b;
  return c;
}

console.log("Function declaration", doMath(2, 3));
console.log("Function expression", doMath2(2, 3));
console.log("Arrow function", doMath3(2, 3));
console.log("Hoisted function", doMultiple(3, 4));

//Invoke function Immediately (IIFE)
(function () {
  let a = 2;
  let b = 3;
  console.log("IIFE", doMath(a, b));
})();


//Standard function form
function greeting1(name) {
  console.log(`Hello ${name}`);
}
//Arrow form
const greeting2 = (name)=>{
  console.log(`Hello ${name}`);
};

/**
 * if your function body only contains a single line of code, you can remove the curly braces
*/
const greeting3 = (name)=> console.log(`Hello ${name}`);
const areaCalculation = (width, height)=>{
  const result = width * height;
  return result;
}
console.log(areaCalculation(5,6));

function booWho(arg){
  if(typeof arg !== "boolean")
  {
    return false;
  }
  return true;
}

console.log(booWho(true));
console.log(booWho(false  ));
console.log(booWho([1, 2, 3]));
console.log(booWho([].slice));
console.log(booWho({ "a": 1 }));
console.log(booWho(1));
console.log(booWho(NaN));
console.log(booWho("a"));
