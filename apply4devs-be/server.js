const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
    console.log("DB Connected successfully!");
});
mongoose.connection.on("error", (error) => {
    console.error("DB connection failed:", error);
    process.exits(1);
});

// Use the dynamic route
const cityRoutes = require("./routes/companyRoutes");
app.use("/api/companies", cityRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
