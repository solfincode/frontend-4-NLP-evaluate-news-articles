//global data
let store = {};

//modules
const dotenv = require("dotenv");
dotenv.config();
const https = require("https");
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const path = require("path");

//env variables
const BASE_URL = process.env.BASE_URL;
const KEY = process.env.KEY;
const PORT = process.env.PORT || 3000;

//declare app
const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "../../dist")));

//postData function on meaning cloud

const postMeaningCloud = async (urlData) => {
  const meaningCloudUrl = `${process.env.BASE_URL}key=${process.env.KEY}&lang=en&txt=HTML&url=${urlData}&model=general`;
  const response = await fetch(meaningCloudUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(urlData),
  });

  try {
    data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

//post api to meaningcloud and assign to store object
app.post("/submitData", (req, res) => {
  const urlData = req.body.url;
  postMeaningCloud(urlData)
    .then((res) => {
      Object.assign(store, res);
    })
    .catch((err) => console.log(err));
});

//retrieve data from store
app.get("/analysis", (req, res) => {
  res.send({ store });
});

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
