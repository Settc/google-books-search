const express = require("express");
const logger = require("morgan")
const mongoose = require("mongoose")
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const Book = require("./models/Book")
require("dotenv").config()
app.use(logger("dev"))

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const dbURI = process.env.DB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`)}))
  .catch((err) => console.log(err))

// Define API routes here
app.get("/api/books", (req, res) => {

})
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

