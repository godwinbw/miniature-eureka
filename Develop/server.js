const express = require("express");
// const apiRoutes = require("./routes/apiRoutes");
// const htmlRoutes = require("./routes/htmlRoutes");

//const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("Develop/public"));

//app.use("/api", apiRoutes);
//app.use("/", htmlRoutes);

// need three api routes
app.get("/api/notes", (req, res) => {
  res.send("you want to GET api notes");
});

app.post("/api/notes", (req, res) => {
  res.send("you want to POST api notes");
});

app.delete("/api/notes/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  res.send("you want to DELETE note " + id);
});

// need three html routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
