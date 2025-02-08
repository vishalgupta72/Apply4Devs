const mongoose = require("mongoose");

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true },
    phone: { type: String },
    city: { type: String },
    description: { type: String, required: true },
    lastUpdate: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Company", companySchema);
