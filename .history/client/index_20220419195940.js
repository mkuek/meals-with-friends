const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
var path = require("path");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This works too");
});

app.listen(5050, () => {
  console.log("listening on port 5050");
});
