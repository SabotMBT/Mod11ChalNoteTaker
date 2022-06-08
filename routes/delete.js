const del = require("express").Router();
const { ReadAdd, newEntry } = require("../helpers/fsUtils.js");
const fs = require("fs");

del.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  console.log("Note ID:" + id + " successfully deleted.");
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      let notesList = JSON.parse(data);
      let newList = notesList.filter((note) => note.id != id);
      newEntry("./db/db.json", newList);
      res.status(200).json(newList);
    }
  });
});

module.exports = del;
