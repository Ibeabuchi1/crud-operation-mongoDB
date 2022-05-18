const { create, update } = require("../model/User");
const User = require("../model/User");
// const dotenv = require("dotenv").config();

//// find all users
const getAllUsers = (req, res) => {
  //   res.send("<h1> Hello World </h1>");
  User.find((err, result) => {
    if (err) console.log("Error getting all Users", err.message);
    res.send(result);
    console.log("Done");
  });
};

//// find one user
// const getOneUser = (req, res) => {
//   const id = req.params.id;
//   User.findById(id, (err, result) => {
//     if (err) console.log("Error getting user:", err.message);
//     res.send(result);
//     console.log(res.result);
//   });
// };
// OR----------------------------------------------------------
const getOneUser = (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      if (!user) {
        res.status(400).send({ message: "User not found" });
      } else {
        res.send(user);
        console.log(user);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send(error.message || { message: "Error getting User with ID:" + id });
    });
};
// create new user
const createNewUser = (req, res) => {
  if (!req.body) {
    res.status(400).send({ message: "Fields cannot be empty" });
    return;
  }
  //// new user
  const user = new User({
    content: req.body.content,
    date: req.body.date,
  });
  user
    .save(user)
    .then((data) => res.send(data))
    .catch((error) =>
      res
        .status(500)
        .send(error.message || { message: "Error while creating user" })
    );
};

const updateUser = (req, res) => {
  const id = req.params.id;
  //// if body is empty
  if (!req.body) {
    res.status(400).send({ message: `User with ${id} NOT found` });
    return;
  }
  User.findByIdAndUpdate(id, req.body)
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: `Cannot update user with ID: ${id}` });
      } else {
        res.send(user);
      }
    })
    .catch((error) => {
      res
        .status(500)
        .send(error.message || { message: "Error while updating user" });
    });
};

const deleteUSer = (req, res) => {
  const id = req.params.id;
  if (!id) {
    res.status(404).send({ message: `User with ${id} does not exist` });
    return;
  }
  User.findByIdAndDelete(id).then((user) => {
    if (!user) {
      res.status(404).send(`User with ${id} not found`);
    } else {
      res.send({ message: "Success" });
    }
  });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateUser,
  deleteUSer,
};

// create
// read all / read one
// update
// delete
