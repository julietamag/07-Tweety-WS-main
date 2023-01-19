const express = require("express");
const tweetBank = require("../tweetBank");
const userRouter = express.Router();

userRouter.get("/:name", (req, res) => {
    const tweetName = req.params.name;
    const allTweet = tweetBank.findAllMatch(tweetName);
    res.send(allTweet);
  });

  module.exports = userRouter