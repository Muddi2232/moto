// var userCity= prompt("Where do you live??");
// console.log(typeof userCity)
// if (userCity==="karachi"){
//     alert("Hired")
// }
// if(userCity!=="karachi"){
//     alert("Come To Karachi")
// }

// var num=20;
// var score=0;
// var userInput= +prompt("Guess the number");
// if(userInput == num){
//     score++
//     console.log(`Your score is $ {score}`)
// }

// var age=18;
// var userAge= +prompt("Enter your age");
// console.log(typeof userAge)
// if(userAge>=age){
//     console.log("You can drive")
// }
// else{
//     console.log("Wait karo!")
// }

// var age =+prompt("Enter your age");
// var gender= prompt("Enter your gender");

// if(age>=18 && gender ==="male"){
//     alert("you can drive")
// }
// else if(age>=20 && gender==="female"){
//     alert("you can also drive")
// }
// else{
//     alert("Erorr------>")
// }

var English=+prompt(
    "Enter your obtained English marks"
);
var Maths=+prompt(
    "Enter your obtained Maths marks"
);
var Urdu=+prompt(
    "Enter your obtained Urdu marks"
);
var obtainedNumbers=English+Maths+Urdu;
var totalNumbers=300;
var percentage=obtainedNumbers/totalNumbers*100;
if (percentage>=80){
    console.log("Congrats A+ Grade!!")
}
else if(percentage>=70){
    console.log("Congrats A Grade")
}
else if(percentage>=60){
    console.log("Congrats B Grade")
}
else {
    alert("Numbers are not valid")
}

