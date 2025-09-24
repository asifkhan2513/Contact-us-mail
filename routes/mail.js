const express = require("express");
const router = express.Router();
const {sendmail} = require("../controllers/sendmail")


router.post("/send", sendmail);

module.exports = router;
