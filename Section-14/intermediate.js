//                                            Random No 
var n = Math.random(); // Lies from 0 to 0.999

//                                             If Else
if (1 < 2) {
    console.log("hello");
} else {
    console.log("Nope");
}

//                                           "===" V/S "=="
var a = 1; // number
var b = '1'; // string

if (a == b) {
    console.log('simple check for data');
}

if (a === b) {
    console.log('check for data type also');
}

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}


//                                                 Arrays

var arr = [1,2,3,4]
console.log(arr[2]);
arr.includes(3);



















































