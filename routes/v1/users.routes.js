const express = require("express");
const router = express.Router();

const userController = require("../../controllers/users.controller");

router.route("/").put(userController.userCreateOrUpdate);

router.route("/:id").get(userController.getSpecificUser);

module.exports = router;
