// To start the server:
// cd app-server
// node server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");
app.use(cors());
const port = 4000;
const gsi = require("./model/Gsi");

mongoose.connect("mongodb://127.0.0.1:27017/RateMyGSI-Database");
const database = mongoose.connection;

database.on("connected", () => {
  console.log("Connected to db successfully");
});

database.on("error", (err) => {
  console.error("db error", err);
});

app.get("/gsis/:filter", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const data = await gsi.find({
    name: { $regex: ".*" + req.params.filter + ".*", $options: "i" },
  });
  res.json(data);
});

app.get("/allgsis", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const data = await gsi.find();
  res.json(data);
});

app.use(bodyParser.json());

//Add new GSI to database
app.post("/gsi/post", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  var newGsi = new gsi({
    name: req.body.name,
    email: req.body.email,
    linkedin: req.body.linkedin,
    rating: req.body.rating,
    ratingCount: req.body.ratingCount,
    classesTaught: req.body.classesTaught,
    pronouns: req.body.pronouns,
    major: req.body.major,
    semesters: req.body.semesters,
    comments: [],
  });
  newGsi.save();
  res.send("Successfully saved to database");
});

//Get gsis by gsiid
app.get("/gsi/:gsiid", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  var curGsi = await gsi.findById(req.params.gsiid);
  res.json(curGsi);
});

//Add new comment to the GSI with gsiid, requires request with a comment
app.post("/comment/:gsiid/post", async (req, res) => {
  req.header("Access-Control-Allow-Origin", "*");
  req.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  var curGsi = await gsi.findById(req.params.gsiid);
  if (!curGsi.comments.length) {
    let comment = req.body;
    comment["id"] = 1;
    curGsi.comments = [comment];
    curGsi.ratingCount = 1;
    curGsi.rating = comment.rating;
  } else {
    let comment = req.body;
    comment["id"] = curGsi.comments[curGsi.comments.length - 1].id + 1;
    curGsi.comments = [...curGsi.comments, comment];
    curGsi.ratingCount = curGsi.comments.length;
    let average = 0.0;
    for (let i = 0; i < curGsi.comments.length; i++) {
      average += curGsi.comments[i].rating;
    }
    average = average / curGsi.comments.length;
    curGsi.rating = average;
  }
  await curGsi.save();
  res.send("Comment added successfully");
});

// Get all comment of a GSI with gsiid
app.get("/comment/:gsiid", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  var curGsi = await gsi.findById(req.params.gsiid);
  res.json(curGsi.comments);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
