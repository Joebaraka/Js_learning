
// // Function to show details
function myDetails(myName, myAge, myschool){
    return myName + " " + myAge + " " + myschool;
}

console.log(myDetails("Joel",21,"KyU"));




// // Age Calculator
function ageCalculator(myYearOfBirth){
    return 2025 - myYearOfBirth + " " + "years old";
}

console.log(ageCalculator(2002));

Balance checker
function withdraw(balance, amountToWithdraw){
    if(amountToWithdraw > balance){
        return "insufficient balance, deposit";
    }

    return balance - amountToWithdraw;
}

let result = withdraw(1000,2000);

console.log(result);

// Function to define the student grades
function calaculateAverage(math,eng,kisw){
return math + eng + kisw;
}

// function to define grade based on average
function defineGrading(average){
    if(average >= 90){
        return "A";
    }else if(average >= 75){
        return "A-";
    }else if(average >= 65){
        return "B+"
    }else{
        return "C+";
    }
}

// Using the functions defned
const avg = calaculateAverage(50,90,75);
const grade = defineGrading(avg);

console.log("Average: ", avg.toFixed(2));
console.log("Grade: ", grade);


// Function for creating users on an application.
function creatUser(name,email,password,isActive){
    return{
        name: name,
        email: email,
        password: password,
        isActive: isActive
    }
    
}
let user = creatUser("Ogega Joel","joe@gmail.com",12345678,true);

console.log(user)