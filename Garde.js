 // exercise 1


function squareNumber(num) {
    return num * num;
}


function sumOfCubes(a, b) {
    return (a * a * a) + (b * b * b);
}


function reverseNumber(n) {
    return parseInt(n.toString().split('').reverse().join(''));
}


console.log("Exercise 1 Outputs:");
console.log("Square of 4 is:", squareNumber(4));
console.log("Sum of cubes of 2 and 3 is:", sumOfCubes(2, 3));
console.log("Reverse of 12345 is:", reverseNumber(12345));
console.log(""); // blank line for readability

// EXERCISE 2: Scope and Global/Local Variables

// Global variable
let counter = 0;

function incrementCounter() {
    counter++;
    console.log("Counter value:", counter);

    let message = "Counter updated!";
    console.log(message);
}


console.log("Exercise 2 Outputs:");
incrementCounter();
incrementCounter();


console.log(""); 

//  EXERCISE 3: Dynamic Parameter Handling 

function sumAll() {
    if (arguments.length === 0) {
        throw new Error("No arguments provided!");
    }

    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


console.log("Exercise 3 Outputs:");
console.log("Sum of 1, 2, 3 is:", sumAll(1, 2, 3));
console.log("Sum of 5, 10 is:", sumAll(5, 10));


console.log(""); 

//  EXERCISE 4: Function C

let multiply = new Function("a", "b", "return a * b;");

console.log("Exercise 4 Outputs:");
console.log("Product of 3 and 7 is:", multiply(3, 7));

