dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const route = require("./route");

app.listen(process.env.PORT || 5000, () => {
    console.log("Server running on port 5000");
});

app.use(bodyParser.json());

app.use('/')