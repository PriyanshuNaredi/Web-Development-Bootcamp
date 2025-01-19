import animals, { useAnimals } from "./data";

const [cat, dog] = animals;
console.log(cat);

// const { name: catName, sound: catSound } = cat;
// console.log(catSound);

// const { name = "InitName", sound = "AnySound" } = cat;

const {
  name,
  sound,
  feedingRequirements: { food, water },
} = cat;
// const { food, water } = feedingRequirements;
console.log(water);

console.log(useAnimals(cat));

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;

const {
  coloursByPopularity: [teslaTopColour, teslaSecColour],
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;

const {
  coloursByPopularity: [hondaTopColour, hondaSecColour],
} = honda;

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
