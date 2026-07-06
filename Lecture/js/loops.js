// document.write("Hello there...")
// Q1
// for(i = 1; i < 100; i++){   
//     if(i % 2 == 0){
//         console.log(i)
//     }
//     if(i == 50){
//         break
//     }
// }

// Q2
// for(i = 1; i <=10;i++){  
//     console.log(i)
// }

// Q3
// let m = parseInt(prompt("Enter a number" ))
// for(i = 1; i <= 5; i++){
//     m += 1
//     console.log(m)
// }

// Q4
// let total = 0
// let m = parseInt(prompt("Enter a number" ))
// for(i = 0; i < 10; i++){
//     m += 1
//     total += m
// }
// console.log(total)

// Q5
// let final = 1
// let num = parseInt(prompt("Enter a number: "))
// if(num < 0 ){
//     console.log("Invalid number")
// }
// else if(num == 0){
//     console.log("Factorial of 0 is 1")
// }
// else{
// for(i = num; i > 1; i--){
//     final *= num 
//     num -= 1
//     }
// console.log(final)
// }

// Q6
// let n = parseInt(prompt("Enter a number"))

// for(i = 1; i <= n; i++){
//     for(j = 1; j <= i; j++){
//         console.log(i + " x " + j + " = " + i*j)
//     }
//     console.log("___________")
// }

// Q7
// for(i = 1; i <=30; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log("FizzBuzz")
//         continue
//     }
//     else if(i % 5 == 0){
//         console.log("Buzz")
//         continue
//     }
//     else if(i % 3 == 0){
//         console.log("Fizz")
//         continue
//     }
//     console.log(i)
// }

//Q8
// for(i = 0; i < 10; i++){
//     console.log("*".repeat(11))
// }

// for(i = 0; i < 10; i++){
//     console.log("*".repeat(i))
// }

for(i = 10; i > 0; i--){
    console.log("*".repeat(i))
}

function exponent(a, b){
    return a ** b
}

//  console.log(exponent(3,3))

function OddEven(a){
    let Odd = 0
    let even = 0
    for(i = 0; i < a; i++){
        if(i % 2 == 0){
            even += i
        }
        else{
            Odd += i
        } 
    }
    console.log("Even " + even +"; Odd "+ Odd)
}
// console.log(OddEven(10))

var factorial = (a) =>{
    let final = 1
    if(a < 0 ){
        console.log("Invalid number")
    }
    else if(a == 0){
        console.log("Factorial of 0 is 1")
    }
    else{
    for(i = a; i > 1; i--){
        final *= a 
        a -= 1
        }
    console.log(final)
    }
}
// factorial(10)

var count = () =>{
    let  num = 0
    for(i = 1; i <= 10; i++){
        num += 1;
    }
    return num
}
// console.log(count())
///////////////////////////////////////////
//Q1
function myFirst(){
    console.log("Hello World!")
}

//Q2
var  mySecond = () =>{
    let a = prompt("Enter anything you want!")
    console.log(a)
}
// mySecond()

//Q3
function minutes(){
    let b = parseInt(prompt("Enter minutes"))
    b *= 60;
    console.log(b + " seconds")
}
// minutes()

//Q3.1
var hours = () =>{
    let c = parseInt(prompt("Enter hour"))
    c *= 3600 
    console.log(c + " seconds")
}
// hours()

//Q4
function age(){
    let d = parseInt(prompt("Enter age in years"))
    d *= 365
    console.log(d + " days")
}
// age()

//Q5
var farm = (chickens, cows, pigs) =>{
    let chickenLegs = 2
    let cowLegs = 4
    let pigLegs = 4

    finalLegCount = ((chickens * chickenLegs) + (cows * cowLegs) + (pigs * pigLegs))
    finalAnimalCount = chickens + cows + pigs
    alert("You have a total of " + finalAnimalCount + " animals in your farm.\nYou have a total of " + finalLegCount + " legs among your animals.")
}
// let x = parseInt(prompt("Enter the number of chickens you have"))
// let y = parseInt(prompt("Enter the number of cows you have"))
// let z = parseInt(prompt("Enter the number of pigs you have"))
// farm(x,y,z)

//Q6
function validScore(){
    let e = parseInt(prompt("Enter your score"))
    if(e < 0 || e > 100){
        alert("Invalid score!")
    }
    else if(e >= 0 && e <= 100){
        alert("Valid Score!")
    }
    else
        alert("Invalid input")
}
// validScore()