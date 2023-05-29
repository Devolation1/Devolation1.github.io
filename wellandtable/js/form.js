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
        alert("Invalid age! You must be 21 or older!")
        return;
    }
    // update output paragraph
    greetParagraph.innerHTML="You May Now Look at The Acoholic Beverages " + fname;
}