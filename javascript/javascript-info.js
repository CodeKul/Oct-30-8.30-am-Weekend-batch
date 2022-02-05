function getData(){
    let fullname = document.getElementById("fname").value;
    console.log(fullname)
}


// let, var and const keywords

// datatypes - String, Number, array, object, boolean

// scope/scoping - global scope, block/local scope function scope

// https://www.youtube.com/watch?v=edlFjlzxkSI
// https://www.youtube.com/watch?v=DwWtu7VLTwg

// hoisting - https://www.youtube.com/watch?v=Fnlnw8uY6jo
// hoisting - let, const - https://www.youtube.com/watch?v=BNC6slYCj50

// https://www.youtube.com/watch?v=R0cU7JsNPcY

// https://www.youtube.com/watch?v=9Ta1umc3tkQ

let fname = "Sanket"
let marks = 100;
let cities = ["mumbai", "pune", "delhi"]


// 1. declaration - declaring there is some variable with respective name
// 2. Initialization - assigning some value for the variable

// var keyword variable is a global scope as well as function scope variable
// let keyword variable is a block/local scope as well as function scope variable 



const PI =3.14;

// PI=2.14;
console.log(PI)
if(true){
    let num1 =100;
    num1=300;
    console.log(num1)
}


console.log(num1)

function display (){
    var num2 = 200;
    console.log(num2);
}


display()
console.log(num2);




