import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let defaultItems = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

// DB
mongoose
  .connect("mongodb://localhost:27017/todoListDB")
  .then(() => ((items = []), (id = 1)));

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemSchema);

const listSchema = {
  name: String,
  items: [itemSchema],
};

const List = new mongoose.model("List", listSchema);


// DB data handling

async function addItems(item) {
  try {
    const existing = await Item.findOne({ name: item.name });
    if (existing) {
      console.log(`Data already exists for : ${item.name}`);
      return;
    } else {
      const newItem = new Item({ name: item.name });
      newItem.save();
      defaultItems.push(newItem);
      console.log(`Item ${item.name} added to database`);
    }
  } catch (error) {
    console.log(error.message);
  }
}

async function addListItems(item,list) {
  try {
    const existing = await list.findOne({ name: list });
    if (existing) {
        existing.items.push(item);
        list.save();
    } else {
      const newItem = new Item({ name: item.name });
      newItem.save();
      defaultItems.push(newItem);
      console.log(`Item ${item.name} added to database`);
    }
  } catch (error) {
    console.log(error.message);
  }
}


