const express = require("express");

const addRouter = require("./add");
const showRouter = require("./show");
const deleteRouter = require("./delete");

const app = express();

app.use("/add", addRouter);
app.use("/show", showRouter);
app.use("/delete", deleteRouter);

module.exports = app;
