import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

let id = 3;

let defaultItems = [{id:null,name:null}];

mongoose
  .connect("mongodb://localhost:27017/todoListDB")
  .then(() => ((items = []), (id = 1)));

const itemSchema = new mongoose.Schema({
  name: String,
});

const Item = mongoose.model("Item", itemSchema);

const listSchema = {
  name: String,
  todoItem: [itemSchema],
};

const List = new mongoose.model("List", listSchema);

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

async function defaultItemsList (i){
  try {
    const result = await listName.find(); // Fetch items from the database
    result.forEach(function (item) {
      console.log(item);
      defaultItems.push({ id: id, title: item.name });
      items.push({ id: id, title: item.name }); // Use 'name' as the property name
      id = id + 1;
    });
  } catch (error) {
    console.log(error.message);
  }
};

addItems({ name: "Welcome" });
addItems({ name: "+ to add new items" });
addItems({ name: "<- to delete item" });

async function printItems(listName) {
  // defaultItems = [];
  // items = [];
  const result = await listName.find(); // Fetch items from the database
  result.forEach(function (item) {
    console.log(item);
    defaultItems.push(item);
    // const nextId = (items[items.length - 1]?.id || 0) + 1; // Calculate the next ID
    // console.log(nextId);
    items.push({ id: id, title: item.name }); // Use 'name' as the property name
    id = id + 1;
  });
}

async function addListItem(list) {
  try {
    const existing = await List.findOne({ name: list.name });
    if (existing) {
      console.log(`Data already exists for: ${list.name}`);
      return list.todoItem;
    } else {
      const newList = new List({ name: list.name, todoItem: defaultItems });
      await newList.save();
      console.log(`Item ${list.name} added to the database`);
      const favicon = await List.findOne({ name: "favicon.ico" });
      if (favicon) {
        await List.deleteMany({ name: "favicon.ico" });
      }
      return list.todoItem;
    }
  } catch (error) {
    console.log(error.message);
  }
};

app.get("/", async (req, res) => {
  items = [];
  defaultItems = [];
  await printItems(Item);
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.get("/:customListName", async (req, res) => {
  const customList = req.params.customListName;
  console.log(defaultItems);
  // const list = new List({name: customList, todoItem: defaultItems});
  // list.save();
  console.log(typeof customList);
  await printItems(List);
  await addListItem({ name: customList });
  res.render("index.ejs", {
    listTitle: customList,
    listItems: items,
  });
});

app.post("/add", async (req, res) => {
  const item = req.body.newItem;
  const listName = req.body.list;
  console.log(item);
  try {
    addItems({ name: item });
  } catch (err) {
    console.log(err.message);
    items.push({ title: item });
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const newTodoItem = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;

  try {
    for (const item of items) {
      if (item.id == id) {
        console.log(`Updating item: ID = ${item.id}, Title = ${item.title}`);
        const result = await Item.updateOne(
          { name: item.title },
          { $set: { name: newTodoItem } }
        );
        console.log(`Update Result: ${JSON.stringify(result)}`);
      }
    }
  } catch (error) {
    console.log(error);
    items.push({ title: newTodoItem });
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const deleteItem = req.body.deleteItemId;

  try {
    for (const item of items) {
      if (item.id == deleteItem) {
        console.log(`Deleting item: ID = ${item.id}, Title = ${item.title}`);
        const result = await Item.deleteMany({ name: item.title });
        console.log(`Delete Result: ${JSON.stringify(result)}`);
      }
    }
  } catch (err) {
    console.error("Error deleting item:", err);
    console.log(items.indexOf(deleteItem));
  }

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
