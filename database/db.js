const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const db = mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((e) => console.error(e));

module.exports = db;
