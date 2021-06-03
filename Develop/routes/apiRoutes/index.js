const router = require("express").Router();
const { getAllNotes } = require("../../lib/notes.js");

// need three api routes
router.get("/notes", (req, res) => {
  res.send(getAllNotes());
});

router.post("/notes", (req, res) => {
  res.send("you want to POST api notes");
});

router.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("you want to DELETE note " + id);
});

module.exports = router;
