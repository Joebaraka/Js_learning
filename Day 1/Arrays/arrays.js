// function greet(){
//     let greetings = "Hello World";
//     console.log(greetings);
// }

// greet();

// Function to calculate the average marks

function getAverage(){
    
    let Math = 78;
    let Phyc = 92;
    let Bio = 85;
    let Chem = 78;
    let Eng = 79;
    let Kisw = 80;
    let Comp = 90;
    let Geo = 90;

    const total = Math + Phyc + Bio + Chem + Eng + Kisw + Comp + Geo;

    const average = total/8;

    return average;

}

let result = getAverage();

console.log("Average: " , result);
