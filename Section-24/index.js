import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));


var blogTitle = [];
var blogPost = [];


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  res.render(__dirname + "/views/index.ejs", {
    title: blogTitle,
    blog: blogPost,
  });
});

app.post("/", (req, res) => {
    console.log(req.body);
    blogTitle.push(req.body["title"]);
    blogPost.push(req.body["blog"]);
    console.log(blogTitle);
    res.render(__dirname + "/views/index.ejs", { title: blogTitle, blog: blogPost });
});

// This will redirect from "/" to "/new-post" page 
app.post("/new-post", (req, res) => {
  res.redirect('/new-post');
});

// this will render "/new-post" page
app.get("/new-post", (req, res) => {
  res.render(__dirname + "/views/new-post.ejs");
});


function blogRedirect(req,res,next){
    for (let index = 0; index < blogTitle.length; index++) {
      console.log(index);
      app.get(`/${index}`, (req, res) => {
        res.render(__dirname + "/views/blog-template.ejs", {
            i: index,
          title: blogTitle[index],
          blog: blogPost[index],
        });
      });
    }
    next();
};

function deleteBlog(req,res,next){
  for (let index = 0; index < blogTitle.length; index++) {
    app.get(`/delete/${index}`, (req, res) => {
    //   const index = blogTitle.indexOf("title");
      if (index > -1) {
        blogTitle.splice(index, 1); // 2nd parameter means remove one item only
        blogPost.splice(index, 1); // 2nd parameter means remove one item only
      }
        res.redirect("/");
    });
  }
  next();
};


app.use(blogRedirect);
app.use(deleteBlog);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

