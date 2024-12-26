const mongoose = require("mongoose");
const express = require("express");
const app = express();
const db = require("./db");
const bodyparser = require("body-parser");
const mymodel = require("./models/myschema");
const mymenu = require("./models/menuSchema");
const server = 3000;

app.use(bodyparser.json()); //in which format do we want our request to come

const router = require("./routes/routes");
app.use("/", router);

app.listen(server, () => {
  console.log(`server is running on port ${server}`);
});
