import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import flash from "connect-flash";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "secrets",
  password: "1234",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  try {
    await db.query("INSERT INTO users (email, password) VALUES ($1,$2)", [
      email,
      password,
    ]);
    res.render("secrets.ejs");
  } catch (err) {
    console.log(err.message);
    if (
      err.message ==
      'duplicate key value violates unique constraint "users_email_key"'
    ) {
      res.redirect("/login");
    }
  }
});

app.post("/login", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;
  console.log(`${email}, ${password}`);

  try {
    const result = await db.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);
    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;
      if (password == storedPassword) {
        res.render("secrets.ejs");
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/register");
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
