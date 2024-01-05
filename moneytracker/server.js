const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

let storedData = {};
let dt={};
let ca={};
let t={};
app.post("/", (req, res) => {
    const amount = req.body;
    const categoryvalue=req.body;
    const ty=req.body;
    const date=req.body;
    console.log(amount);
    storedData = amount;
    dt=date;
    ca=categoryvalue;
    t=ty;
    res.status(200).send("Data received successfully!");
});

app.get("/data", (req, res) => {
    res.json(storedData);
    console.log("shared successfully");
});
app.get("/report", (req, res) => {
  const reportArray = [
    {
      date: dt,
      category: ca,
      type: t,
      amount: storedData,
    },
  ];
  res.json(reportArray);
});
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`);
});