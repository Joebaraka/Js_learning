// arrow fnction is the most shortest way to write functions
// example-function to add 2 numbers
const add = (x,y) =>{
    return x + y;
};
console.log(add(3,4));


// function to multply 3 intergers
const product = (m,n,k) =>{
    return m * n * k;
};
console.log(product(2,3,4));

// function to print name and age
const myDetail =(fname,age) =>{
    return "My name is " + fname + ", "+ "and "+  "I'm " + age + " " + "years old";
}
console.log(myDetail("Baron",22));

// Square of  a number using arroe functions
const square = (x) => x * x;
console.log(square(7));

// Funtion that returns hello world- one statement
let greetings = () => "Hi, Baraka";
console.log(greetings());

// arrow function to print student details
let student1 = () =>{
    return{
        fname: "Baraka",
        lname: "Ogega",
        stream: "F4 Yellow"
    };
}
console.log(student1());


// EXERCISE: 1
// Create an arrow function called greet that takes a name as a parameter and returns:
const greet = (name) =>{
    return "Hello ," + " " + name;
}
console.log(greet("Baraka"));

// EXERCISE: 2
// Create an arrow function called sum that takes two numbers and returns their sum.
const sum = (a,b) =>{
    return a + b;
}
console.log(sum(15,10));


// EXERCISE: 3
// Given an array of numbers, use an arrow function with map to return a new array with each number squared.
const numbers = [1,3,5,7];
const squares = numbers.map(n => n * n);
console.log(squares);

// EXERCISE: 4
// Use an arrow function with filter to return only even numbers from an array.
const evenNumbers = [11,17,23,4,6,8,24,13,62];
const numFilter = evenNumbers.filter(n => n % 2 === 0);
console.log(numFilter);

// EXERCISE: 5
// Use an arrow function with filter to return only even numbers from an array.
const isAdult = (age) =>{
    if(age >= 18){
        return true;
    }
    
    return false;
}

console.log(isAdult(11));
console.log(isAdult(34));