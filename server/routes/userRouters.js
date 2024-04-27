const express = require("express");
const userController = require("./../controllers/userController"); //this format, instead of using path, helps intellisense
const authController = require("./../controllers/authController");
const router = express.Router();

//for signing up
router.post('/signup', authController.signup);
//to verify the email
router.post('/verifyEmail', authController.verifyEmail);
//for loging in
router.post('/login', authController.login);
router.post('/logout', authController.logout);

// meowmeow

module.exports = router;