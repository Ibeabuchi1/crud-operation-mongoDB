const express = require("express");
const router = express.Router();
const user = require("../controllers/controls");

//// get all users
router.get("/", user.getAllUsers);

//// get one user by ID
router.get("/:id", user.getOneUser);

//// create new user
router.post("/", user.createNewUser);

//// update user
router.put("/:id", user.updateUser);

//// update user
router.delete("/:id", user.deleteUSer);

module.exports = router;
