import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import connectDB from "./src/config/db.js";
import companyRoutes from "./src/routes/companyRoutes.js";

dotenv.config();  // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
// connectDB();

// Routes
app.use("/api/companies", companyRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
