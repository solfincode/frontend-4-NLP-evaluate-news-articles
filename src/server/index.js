const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const app = express();

app.use(cors());

app.listen(PORT, () => console.log(`server is listening at ${PORT}`));
