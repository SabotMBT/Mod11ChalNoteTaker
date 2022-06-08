const show = require("express").Router();
const fs = require("fs");

show.get("/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json(err);
    } else {
      res.status(200).json(JSON.parse(data));
    }
  });
});

module.exports = show;
