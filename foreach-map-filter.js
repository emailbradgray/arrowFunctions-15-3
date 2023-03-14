


let hereIsTest = doubleValuesxyz(10,20,30)
console.log(hereIsTest)

function doubleValuesxyz(num1, num2, num3) {
    let hereIsTestAlpha = num1 + num2
    console.log(hereIsTestAlpha)
    return hereIsTestAlpha
}

/* Ex1.....................
//.......................
//..............................
*/
function doubleValuesWithMap(arr) {
    console.log("this is array for ex 1 " + arr)
    return arr.map(function(val) {
        console.log("this is original val for ex 1 " + arr)
        console.log("this is doublevalue of val " + (val *2))
        console.log("map is creating a new array")
      return val * 2;

    });

}
/*## **ES5 Map Callback**

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}


## **ES2015 Arrow Functions Shorthand**

Refactor the above code to use two arrow functions. Turn it into a one-liner.
*/
console.log("running refactor of ex 1")
const double = arr => arr.map(val => val * 2);

//Ex 2.................
//......................
//........................
/* ## **Refactor the following function to use arrow functions:**

Replace ALL functions with arrow functions:
*/
function squareAndFindEvens(numbers){
    console.log("this is array for ex 2 " + numbers)
  var squares = numbers.map(function(num){
    console.log("this is original val for ex 2 " + numbers)
    console.log("this is square of val " + (num ** 2))
        console.log("map is creating a new array")
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    console.log("this is filter of values that are even " + (square %2 === 0))
    return square % 2 === 0;
  });
  console.log(evens)
  return evens;
}



const squareAndFindEvens2 = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)
