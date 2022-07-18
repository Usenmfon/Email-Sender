const express = require("express");
const router = express.Router();

const automatedMail = require("../controllers/mailController");

router.post("/", automatedMail);

module.exports = router;