const fs = require("fs");
const path = require("path");

const dbFile = path.join(__dirname, "../db/db-test.json");
var dbMemory;

function loadNotesIntoMemoryFromFile() {
  // because notes file is small, we will load it in a blocking, synchronous way
  console.log("...opening file -> " + dbFile);
  fs.promises
    .readFile(dbFile)
    .then((data) => {
      // we got data
      console.log("...we got data!");
      if (data) {
        console.log("   ....AND here it is! ");
        dbMemory = JSON.parse(data);
        console.log(JSON.stringify(dbMemory));
      } else {
        console.log("   ...BUT data is null");
        dbMemory = [];
      }
    })
    .catch((err) => {
      // we got an error, just initialize the data structure as an empty array
      console.log("...had an error reading the file");
      dbMemory = [];
    })
    .finally(() => {
      console.log("--- db Memory LOADED ----");
      console.log(dbMemory);
    });
}

function saveNotesFromMemoryToFile() {
  // because notes file is small, we will save it in a block, synchronous way
  fs.writeFileSync(dbFile, JSON.stringify(dbMemory, null, 2));
}

function getAllNotes() {
  return dbMemory;
}

function addNote() {}

module.exports = {
  loadNotesIntoMemoryFromFile,
  getAllNotes,
};
