let fname = "";


function greet(){
    let greetParagraph = document.getElementById("greet");

    
    fname = document.getElementById("fname").value ;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    
    if (fname==="" || lname==="" ){
        alert("First and last name cannot be an empty string!");
        return;
    }
    
    if (age==="" || age < 21){
        alert("Invalid age! You must be 21 or older!")
        return;
    }
    else{
        document.getElementById('demo').style.display='block';
    }
    
    
    greetParagraph.innerHTML="You May Now Look at The Acoholic Beverages " + fname;
}