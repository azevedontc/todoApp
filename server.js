const path = require("path");
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const passport = require("passport");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const cron = require("node-cron");

require("dotenv/config");

const app = express();

// Passport Config
require("./config/passport")(passport);

// Import routes
const apiRoute = require("./routes/api");
const loginRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const User = require("./models/User");
const Task = require("./models/Task");

// Static
app.use(express.static(path.join(__dirname, "public")));

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("layout login", false);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Connect to db
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

// Express session
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.user = req.user;
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});

app.use("/api", apiRoute);
app.use("/user", userRoute);
app.use("/", loginRoute);

app.get("/", async (req, res) => {
  const tasks = await Task.find({});
  if(req.user){
    res.render("home", { tasks: tasks, title: "Home" });
  } else {
    res.redirect('/login');
  }
});

const PORT = process.env.port || 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is up and running already on localhost:${PORT}...`);
});
