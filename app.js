const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// thard party middleWare
app.use(cors());
app.use(express.json());

// route
const inputInfoRoute = require("./Routes/InputInfo.Route");
const LoginRoute = require("./Routes/Login.route");

app.use("/api", inputInfoRoute);
app.use("/api", LoginRoute);

app.get("/", (req, res) => {
  res.send("corvocoin surver is connected!!");
});

module.exports = app;
