const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
// Bodyparser middleware
const passport = require("passport");
// const users = require("C:\Users\pc\CREAD App\routes\users.js");
// app.use(
//   bodyParser.urlencoded({
//     extended: false
//   })
// );
app.use(bodyParser.json());
// DB Config
const db = require("C:\Users\pc\CREAD App\config\keys.js").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  // Passport middleware
app.use(passport.initialize());
// Passport config
require("C:\Users\pc\CREAD App\config\passport.js")(passport);
// Routes
app.use("/models/", users);
const port = process.env.PORT || 7000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));