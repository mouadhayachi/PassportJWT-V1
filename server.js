const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");

const users = require("./routes/api/users");
const app = express();

// Middleware
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Passport Midleware
app.use(passport.initialize());

// Passport Config
require("./Middleware/passport")
app.use(cors());

// DB Config
const db = require("./config/keys").mongoURI;

// connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

// Use Routes
app.use("/api/users", users);

const port = process.env.PORT || 7000;
app.listen(port, () => console.log(`Server running at ${port}`));
