import express, { json } from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const apiKey = "e9e8bb7f2c0124f83b74becb86e426ff";
const URL =
  "https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("test.ejs", { weather: null, error: null });
});

app.post("/weather", async (req, res) => {
  const city = req.body.city;
  console.log(req.body.city);
  let weather;
  let error = null;
  try {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
    );
    weather = result.data;
  } catch (error) {
    weather = null;
    error = "Error, Please try again";
  }
  res.render("test.ejs", { weather, error });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
