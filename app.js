const express = require("express");
const db = require("./database/db");
const morgan = require("morgan");
const router = require("./routes/router");
const dotenv = require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello There");
});
//// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
////
const kick = function () {
  console.log(`Welcome to the App`);
};
// logger
app.use(morgan("dev"));

app.use("/api/v1/todo", router);

const PORT = process.env.PORT || 3050;

app.listen(PORT, console.log(`PORT running on localhost:${PORT}`));

// console.log(mongoose.Types.ObjectId.isValid("627beab14f0bc43b242601cc"));
kick();
