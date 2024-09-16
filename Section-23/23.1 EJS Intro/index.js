import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const d = new Date();
  const day = d.getDay();

  let type = "weekday";
  let adv = "work Hard";

  if (day === 0 || day === 6) {
    type = 'weekend';
    adv = 'partyy';
  }

  res.render(__dirname + "/views/index.ejs", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
