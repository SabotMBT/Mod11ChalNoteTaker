const fs = require("fs");

const ReadAdd = (content, file) => {
  fs.readFile(file, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const pulledNotes = JSON.parse(data);
      pulledNotes.push(content);
      newEntry(file, pulledNotes);
    }
  });
};

const newEntry = (dest, cont) =>
  fs.writeFile(dest, JSON.stringify(cont, null, 4), (err) =>
    err ? console.error(err) : console.info(`New Entry in ${dest}`)
  );

module.exports = { ReadAdd, newEntry };
