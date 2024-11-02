import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "1234",
  port: 5432  
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = [
  { id: 1, title: "Buy milk" },
  { id: 2, title: "Finish homework" },
];

async function todoListItems() {
  const result = await db.query(
    "SELECT * FROM items;"
  );
  console.log(result.rows);
  items = result.rows;
}

app.get("/", async(req, res) => {
  const a = await todoListItems();
  res.render("index.ejs", {
    listTitle: "Today",
    listItems: items,
  });
});

app.post("/add", async(req, res) => {
  const item = req.body.newItem;
  items.push({ title: item });
  console.log(item);
  try {
    await db.query(
      "INSERT INTO items (title) VALUES ($1);",
      [item]
    );
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/edit", async(req, res) => {
  const newTodoItem = req.body.updatedItemTitle;
  const id = req.body.updatedItemId;
  
  try {
    await db.query(
      "UPDATE items SET title = ($1) WHERE id = ($2)",
      [newTodoItem,id]
    );
  } catch (error) {
    console.log(err);
  }
  res.redirect("/");
});

app.post("/delete", async(req, res) => {
  const deleteItem = req.body.deleteItemId;
  try {
    await db.query(
      "DELETE FROM items WHERE id = ($1);",
      [deleteItem]
    );
  } catch (err) {
    console.log(err);
  }
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
