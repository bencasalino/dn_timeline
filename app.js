const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());

// this displays both tables
app.get("/", (request, response) => {
  queries
    .list("event")
    .then(event => response.json({ event: event }))
    .catch(console.error);
});
// shows the games table
app.get("/event", (request, response) => {
  queries
    .list("event")
    .then(capstone => {
      response.json({ dn });
    })
    .catch(console.error);
});

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});
// export entire app
module.exports = app;
