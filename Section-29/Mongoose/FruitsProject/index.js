const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
  name : {
    type:String,
    required: [true, "Please Check Data Entry for name Field"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// ("Fruit") will be automatically gets converted into collection names as "fruits"

// this will give error as rating cant be more than 10 and less than 1
// const fruit = new Fruit(
//   {name: 'Apple', review:"Great", rating: 34}
// );

// this will give error as name is required
// const fruit = new Fruit(
//   {review:"Great", rating: 8}
// );

const apple = new Fruit({ name: "Apple", rating: 9, review: "Great" });

// apple.save();

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit.",
});

const mango = new Fruit({
  name: "Mango",
  rating: 10,
  review: "King fruit",
});

// Fruit.insertMany([pineapple, mango]);



async function updateFruit() {
  try {
    const result = await Fruit.updateOne(
      { _id: "673608b13452f0df4d010ca5" },
      { name: "Peach" }
    );
    console.log("Document updated successfully:", result);
  } catch (err) {
    console.error("Error updating document:", err);
  }
}

// updateFruit();


async function deleteFruit() {
  try {
    const result = await Fruit.deleteOne(
      // { _id: "673608b13452f0df4d010ca5" },
      { name: "Peach" }
    );
    console.log("Document updated successfully:", result);
  } catch (err) {
    console.error("Error updating document:", err);
  }
}

// deleteFruit();

Fruit.find().then((data) => {
  data.forEach(function (fruit) {
    console.log(fruit.name);
  });
});

async function printFruitsSchema(params) {
  const result = await Fruit.find();
  console.log(result);
  
}
printFruitsSchema();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);
const person = new Person({ name: "John", age: 32 });

// person.save();

async function deletePerson(params) {
  try {
    const result = await Person.deleteMany({name:"John"});
  } catch (error) {
    console.log(err);
  }
}

// deletePerson()

const newFruit = new Fruit({name:"Pineapple",rating:8, review:"Does'nt goes with PIZZA"})

// newFruit.save()



const personAmy = new Person({
  name: "Amy", age:12, favFruit: pineapple
})

// personAmy.save()

async function addRelation() {
  try {
    const result = await Person.updateOne({ name: "John" }, { favFruit: mango });
  } catch (error) {
    console.log(error);
  }
}

// addRelation()










/*
                                    // Mongodb without data validation
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review : String
});

const Fruit = mongoose.model("Fruit", fruitSchema); // ("Fruit") will be automatically gets converted into collection names as "fruits"

const fruit = new Fruit (
    {name: 'Apple', review: 9, review: "Great"}
);

fruit.save();

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit.",
});

const mango = new Fruit({
  name: "Mango",
  score: 10,
  review: "King fruit",
});

Fruit.insertMany([pineapple,mango]);


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Person = mongoose.model("Person", personSchema);
const person = new Person(
    {name: "John", age: 32}
);

person.save();



Fruit.find().then((data) => {
 console.log(data);
});

Fruit.find().then((data) => {
  data.forEach(function(fruit){
    console.log(fruit.name);
  });

});

*/

/*
                                              // Old Code
// const fruitSchema = new Schema({
//   name: {
//     type: String,
//     required: [true, "Please add a name"],
//   },
//   rating: {
//     type: Number,
//     min: 1,
//     max: 10,
//   },
//   review: String,
// });

// const Fruit = model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   rating: 10,
//   review: "Peaches are so yummy!",
// });

// // fruit.save();

// const personSchema = new Schema({
//   name: String,
//   age: Number,
//   favouriteFruit: fruitSchema,
// });

// const Person = model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit.",
// });

// const mango = new Fruit({
//   name: "Mango",
//   score: 6,
//   review: "Decent fruit",
// });

// mango.save();

// const person = new Person({
//   name: "Amy",
//   age: 12,
//   favouriteFruit: pineapple,
// });

// /*
// const person = new Person({
//   name: "John",
//   age: 37,
// });
// */

// // person.save();

// Fruit.find(function (err, fruits) {
//   if (err) {
//     console.log(err);
//   } else {
//     connection.close();

//     fruits.forEach(function (fruit) {
//       console.log(fruit.name);
//     });
//   }
// });

// /*
// Fruit.updateOne(
//   { _id: "5ed198c6c29d5244d02161ad" },
//   { name: "Peach" },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document.");
//     }
//   }
// );
// */

// /*
// Fruit.deleteOne({ name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//   }
// });
// */

// /*
// Person.deleteMany({ name: "John" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted all the documents");
//   }
// });
// */

// Person.updateOne(
//   {
//     name: "John",
//   },
//   { favouriteFruit: mango },
//   function (err) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("Successfully updated the document");
//     }
//   }
// );
