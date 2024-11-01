import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

// db
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "1234",
  port: 5432,
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
/* /GET - 1
// async function checkVisited() {
//   // Query to get the list of visited countries (country codes)
//   const result = await db.query("SELECT country_code FROM visited_countries");

//   // Initialize an array to store country codes
//   let countries = [];

//   // Loop through the query result and push each country code to the array
//   result.rows.forEach((country) => {
//     countries.push(country.country_code);
//   });

//   // Return the array of visited country codes
//   return countries;
// }

// app.get("/", async (req, res) => {
//   // Call the checkVisited function to get visited country codes
//   const countries = await checkVisited();

//   // Render the index.ejs template, passing the list of countries and their total count
//   res.render("index.ejs", { countries: countries, total: countries.length });
// });
*/
/* /GET - 2
// app.get("/", async (req, res) => {
//   // Query to select all visited country codes
//   const result = await db.query("SELECT country_code FROM visited_countries");

//   // Initialize an array to store country codes
//   let countries = [];

//   // Loop through the query result and push each country code to the array
//   result.rows.forEach((country) => {
//     countries.push(country.country_code);
//   });

//   // Log the rows fetched from the query (for debugging purposes)
//   console.log(result.rows);

//   // Render the index.ejs template, passing the list of countries and their total count
//   res.render("index.ejs", { countries: countries, total: countries.length });
// });
*/
app.get("/", (req, res) => {
  db.query("SELECT country_code FROM visited_countries", (err, result) => {
    if (err) {
      console.error(err.stack);
      res.status(500).send("Database query error");
      db.end();
      return;
    }
    // Extract country codes from the result
    let countries = [];
    result.rows.forEach((country) => {
      countries.push(country.country_code);
    });

    console.log(result.rows);
    res.render("index.ejs", { countries: countries, total: countries.length });
    // db.end(); // Commented bcoz if end the connection then we can't connect to db again when we redirect from /add route
  });
});

app.post("/add", async (req, res) => {
  const input = req.body["country"];

  const result = await db.query(
    "SELECT country_code FROM countries WHERE country_name = $1",
    [input]
  );

  if (result.rows.length !== 0) {
    const data = result.rows[0];
    const countryCode = data.country_code;

    await db.query("INSERT INTO visited_countries (country_code) VALUES ($1)", 
      [countryCode,]
    );
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
