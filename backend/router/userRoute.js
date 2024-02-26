const express = require('express')
const {
  createUserController,
  allUsers,
  singleUser,
  updateUser,
  deleteUser,
} = require("../controller/userController");

const router = express.Router()

router.post('/create-user',createUserController)
router.get("/all-user", allUsers);
router.get("/single-user/:id", singleUser);
router.put("/update-user/:id", updateUser);
router.delete("/delete-user/:id", deleteUser);

module.exports = router