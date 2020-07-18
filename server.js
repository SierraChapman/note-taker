// Import dependencies
const express = require("express");
const path = require("path");

// Set up express app
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files in public folder
app.use(express.static(path.join(__dirname, "public")));

// Add routing
require(path.join(__dirname, "routes/apiRoutes.js"))(app);
require(path.join(__dirname, "routes/htmlRoutes.js"))(app);

// Start server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});