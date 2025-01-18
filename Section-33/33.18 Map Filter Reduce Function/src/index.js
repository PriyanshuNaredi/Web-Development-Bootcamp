var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

        // Simpler Map
const newNumbers1 = numbers.map(function (x) {
  return x * 2;
});
console.log(newNumbers1);

        // for each
var newNumber = [];
numbers.forEach(function (x) {
  newNumber.push(x * 2);
});
console.log(newNumber);

//Filter - Create a new array by keeping the items that return true.

const newNumbers2 = numbers.filter(function (num) {
  return num < 10;
});

console.log(newNumbers2);
        // for each
var newNumber2 = [];
numbers.forEach(function (num) {
  if (num < 10) newNumber2.push(num);
});

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumbers3 = numbers.reduce(function (accumulator, currentNumber) {
  console.log("accumulator = " + accumulator);
  console.log("currentNumber = " + currentNumber);
  return accumulator + currentNumber;
});
console.log(newNumbers3);

//Find - find the first item that matches from an array.

var newNumbers4 = numbers.find(function (num) {
  return num > 10;
});
console.log(newNumbers4);
//FindIndex - find the index of the first item that matches.
var newNumbers5 = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(newNumbers5);

import emojipedia from "./emojipedia";

console.log(emojipedia[0].meaning.substring(0, 100));

var emojiMeaning = emojipedia.map(function (emoji) {
  return emoji.meaning.substring(0, 100);
});

console.log(emojiMeaning);
