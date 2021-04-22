const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const asyncHandler = require('express-async-handler');

const { User } = require("./db/models");
const router = require('./routes');

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

app.use(router);

app.get("/api/test", (_req, res) => {
  res.json({ message: "Test route... for testing" });
});

// Write another api route here
app.get("/api/users", asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.json(users);
}));

app.use((_req, _res, next) => {
  const err = new Error("The requested resource couldn't be found.");
  err.title = "Resource Not Found";
  err.errors = ["The requested resource couldn't be found."];
  err.status = 404;
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(err.status || 500);
  console.error(err);
  res.json({
    title: err.title || "Server Error",
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  });
});

module.exports = app;
