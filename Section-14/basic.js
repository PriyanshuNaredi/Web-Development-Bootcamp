alert('Hello');

var myName = prompt('Your Name?'); // Camel Casing is used

myName.length; // return length of the variable


var myName = 'Priyanshu';
myName.slice(0,2); // Output -> Pr;  {slice(x,y) = starts at x & ends at y-1 }

6/4 // Output-> 1.5 {it simply divides }
6%4 // Output-> 2 {return remainder after the division}


// ----------------------------------------------- Functions  ----------------------------------------
function doSomething() {
    console.log('hello');
}
doSomething();

function anotherFunction(money) {
    return money % 1.5;
}

var change = anotherFunction(20)


function bmiCalculator(weight,height){
    return Math.round(weight / (height*height));
}
var bmi = bmiCalculator(80,1.8);



