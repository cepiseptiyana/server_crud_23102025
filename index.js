// // app.js or index.js
// const express = require("express");
// const app = express();

// app.get("/users", (req, res) => {
//   res.send("Hello from Express on Vercel!");
// });

// module.exports = app; // Export the Express app

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

module.exports = app;
