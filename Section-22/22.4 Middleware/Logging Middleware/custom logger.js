import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

function logger(req,res,next){
    console.log("req url",req.url);
    console.log("req method", req.method);
    next(); // required for the rest of code to continue executing
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
