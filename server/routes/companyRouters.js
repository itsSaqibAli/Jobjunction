const express = require("express");
const authControllerCompany = require("./../controllers/authcontrollerCompany");
const router = express.Router();

//for signing up
router.post('/signup', authControllerCompany.signup);
//for loging in
router.post('/login', authControllerCompany.login);
router.post('/logout', authControllerCompany.logout);

// meowmeow

module.exports = router;