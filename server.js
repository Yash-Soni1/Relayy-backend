const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const workspaceRoutes = require("./routes/workspaces");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Relayy Backend is running!");
});

// Mount routes
app.use("/workspaces", workspaceRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
