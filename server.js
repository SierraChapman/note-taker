// Import dependencies
var express = require("express");
var path = require("path");

// Set up express app
var app = express();
var PORT = process.env.PORT || 8080;

// Serve static files in public folder
app.use(express.static(path.join(__dirname, 'public')));

// HTML routes
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});