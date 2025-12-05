require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const companyRoutes = require("./routes/companyRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/company", companyRoutes);

sequelize.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch(err => console.log("❌ DB connection error:", err));

sequelize.sync()
  .then(() => console.log("📌 All Models Synced"))
  .catch(err => console.log("Sync error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on ${PORT}`));
