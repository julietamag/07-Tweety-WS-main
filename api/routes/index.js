const express = require("express");
const tweetBank = require("../tweetBank");
const router = express.Router();
const tweetsRouter = require("./tweets.js");
const userRouter = require("./user.js");

router.use("/users", userRouter);
router.use("/tweets", tweetsRouter);

module.exports = router;