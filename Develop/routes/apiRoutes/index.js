const router = require("express").Router();
const { getAllNotes, addNote, deleteNote } = require("../../lib/notes.js");

// need three api routes
router.get("/notes", (req, res) => {
  res.send(getAllNotes());
});

router.post("/notes", (req, res) => {
  res.send(addNote(req.body));
});

router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send(deleteNote(id));
});

module.exports = router;
