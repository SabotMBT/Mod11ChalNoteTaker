const add = require("express").Router();
const { ReadAdd, newEntry } = require("../helpers/fsUtils.js");
const { v4: uuidv4 } = require("uuid");

add.post("/notes", async (req, res) => {
  console.info(`${req.method} request recieved, retrieving notes.`);
  const { title, text } = req.body;
  if (title && text) {
    await ReadAdd({ ...req.body, id: uuidv4() }, "./db/db.json");
    res.status(200).send("New note created!");
  } else {
    res.status(400).send("Save failed! Check your input!");
  }
});

module.exports = add;
