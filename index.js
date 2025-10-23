// // app.js or index.js
// const express = require("express");
// const app = express();

// app.get("/users", (req, res) => {
//   res.send("Hello from Express on Vercel!");
// });

// module.exports = app; // Export the Express app

const express = require("express");
const app = express();

// Routes
app.use("/users", (req, res) => {
  res.send("okay");
});

module.exports = app;
