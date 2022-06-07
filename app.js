const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");

const app = express();
const path = require("path");

app.use(logger("dev"));
app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);
app.use("/", express.static(path.join(__dirname, "dist")));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
