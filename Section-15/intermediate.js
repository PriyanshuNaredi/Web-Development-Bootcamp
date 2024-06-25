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

var arr = [1, 2, 3, 4]
console.log(arr[2]);
arr.includes(3);


//                                                While Loop

var i = 0;
while (i < 3) {
    console.log('current value of i is ' + i);
    i++;
}

var i = 100;
while (i >= 0) {
    var l = i - 1;
    if (i <= 0) {
        console.log('No more bottles of beer on the wall, no more bottles of beer. Go to store and buy some more, 99 bottles of beer on the wall');
    } else
        console.log(i + ' bottles of beer on the wall, ' + i + ' bottles of beer. Take 1 down, pass it around, ' + l + ' bottles of beer on the wall.');
    i--;
}

//                                                 For Loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}
output = fibonacciGenerator(5);
console.log(output)







































