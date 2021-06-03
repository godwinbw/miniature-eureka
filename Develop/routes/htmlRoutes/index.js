const router = require("express").Router();
const path = require("path");

const homePage = path.join(__dirname, "../../public/index.html");
const notesPage = path.join(__dirname, "../../public/notes.html");

// need three html routes
router.get("/", (req, res) => {
  res.sendFile(homePage);
});

router.get("/notes", (req, res) => {
  res.sendFile(notesPage);
});

router.get("*", (req, res) => {
  res.sendFile(homePage);
});

module.exports = router;
