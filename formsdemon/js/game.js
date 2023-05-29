//this file is for code need for
//input, quiz and truth game

// global variable for first name
// a variable that can be used in all functions

let fname = "";

// function to get info from intro form
// check input and produce a sentence
function greet(){
    let greetParagraph = document.getElementById("greet");

    // get the values from the form
    fname = document.getElementById("fname").value ;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    // check the input
    if (fname==="" || lname==="" ){
        alert("First and last name cannot be an empty string!");
        return;
    }
    // age check
    if (age==="" || age < 18){
        alert("Invalid age! You must be 18 or older!")
        return;
    }
    // update output paragraph
    greetParagraph.innerHTML="Greetings " + age + " year old " + fname +"!";
}

// function to play the trivia game

function trivia1(){
// get handle to answer paragrpah
let triviaAnswer = document.getElementById("trivia-answer");

// get handles and values from radio selections
let lebSelected = document.getElementById("lebron").checked;

let michealSelected = document.getElementById("micheal").checked;

let goatSelected = document.getElementById("goat").checked;

if (lebSelected) {
triviaAnswer.innerHTML = fname + ", Lebron is wrong!";
}
else if(michealSelected){
    triviaAnswer.innerHTML = fname + ", Micheal is wrong!";
}
 else if(goatSelected) {
    triviaAnswer.innerHTML = fname + ", Bravo! You are right!";
 }   
else {
    triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
}

}


function trivia2(){
    // get handle to answer paragrpah
    let triviaAnswer = document.getElementById("trivia-answer2");
    
    // get handles and values from radio selections
    let currySelected = document.getElementById("curry").checked;
    
    let raySelected = document.getElementById("ray").checked;
    
    let joeSelected = document.getElementById("joe").checked;
    
    if (currySelected) {
    triviaAnswer.innerHTML = fname + ", Stephen Curry is wrong!";
    }
    else if(raySelected){
        triviaAnswer.innerHTML = fname + ", Ray Allen is wrong!";
    }
     else if(joeSelected) {
        triviaAnswer.innerHTML = fname + ", Correct it is Joe Ingles!!!!";
     }   
    else {
        triviaAnswer.innerHTML = "Uh oh. Something went wrong!!!";
    }
}

function truth(){
    let triviaAnswer = document.getElementById("2truths")

    let ans1Selected = document.getElementById("ans1").checked;

    let ans2Selected = document.getElementById("ans2").checked;

    let ans3Selected = document.getElementById("ans3").checked;

    if (ans1Selected){
        triviaAnswer.innerHTML = fname + ", Wrong this is true.";
    }

    else if (ans2Selected){
        triviaAnswer.innerHTML = fname + ", Wrong this is true.";
    }

    else if (ans3Selected)
    triviaAnswer.innerHTML = fname + ",Congrats this is correct";

    else {
        "Uh oh. Something went wrong";
    }
}