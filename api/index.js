const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const userRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

module.exports = app;
