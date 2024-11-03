// Insert Operation
db.products.insertOne({_id:1,name:'Pen',price:20})
db.products.insertOne({_id:2,name:'Pencil',price:10})

    // Add Multiple Entries
    /*
    db.products.insertMany([
    {_id:1,name:'Pen',price:20},
    {_id:2,name:'Pencil',price:10}
    ]);
    */


// Update 
db.products.updateOne({ _id: 1 }, { $set: { stock: 32 }});

db.products.updateOne({ _id: 2 }, { $set: { stock: 12 }});

db.products.updateMany(
  { _id: 1 },  { $set: { stock: 32 } },
  { _id: 2 },  { $set: { stock: 12 } }
);


// Delete Entry
db.products.deleteOne({ _id: 2 });

// Relational Db -  Many to One Mapping 
db.products.insert({
  _id: 3,
  name: "Rubber",
  price: 20,
  reviews: [
    {
      authorName: "Sachine",
      rating: 5,
      review: "Best",
    },
    {
      authorName: "Aman",
      rating: 4,
      review: "Could be better",
    },
  ],
});


db.products.insert({
  _id: 2,
  name: "Pencil",
  price: 10,
  stock: 12,
  review: [
    {
      authorName: "Shruti",
      rating: 5,
      review: "Saiko",
    },
    {
      authorName: "Naman",
      rating: 5,
      review: "Just a pencil, what to say",
    },
  ],
});
// Add many to one relation to existing data
db.products.updateOne(
  { _id: 1 },
  {
    $set: {
      review: [
        {
          authorName: "Chaman",
          rating: 5,
          review: "Just a pencil, what to say",
        },
      ],
    },
  }
);

db.products.find();


