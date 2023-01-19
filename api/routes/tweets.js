const express = require("express");
const tweetBank = require("../tweetBank");
const tweetsRouter = express.Router();

tweetsRouter.get("/", (req, res) => {
  const allTweets = tweetBank.list();
  res.send(allTweets);
});

tweetsRouter.get("/:id", (req, res) => {
  const tweetId = Number(req.params.id);
  const oneTweet = tweetBank.findOne(tweetId);
  res.send(oneTweet);
});

tweetsRouter.post("/", (req, res) => {
  const { name, content, img } = req.body;
  const addTweet = tweetBank.add(name, content, img);
  res.status(201).send(addTweet);
});

tweetsRouter.delete("/:id", (req, res) => {
  const tweetId = Number(req.params.id);
  const tweetDeleted = tweetBank.findOne(tweetId);
  tweetBank.remove(tweetId);
  res.status(202).send(tweetDeleted);
});

module.exports = tweetsRouter;
