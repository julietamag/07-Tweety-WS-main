const express = require("express");
const app = express();
const morgan = require("morgan");
const tweetBank = require("./tweetBank");
const path = require("path");
const routes = require('./routes')

app.use(morgan("tiny")); // simplified verison of morgan
app.use(express.json());
app.use('/api', routes);

const PORT = 8080;

app.get("/", (req, res) => {
  const allTweets = tweetBank.list();
  res.send(allTweets);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
