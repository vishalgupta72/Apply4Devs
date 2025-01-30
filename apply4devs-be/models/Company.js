import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  city: { type: String, required: true },
  desciption: { type: String, required: true },
  lastUpdate: { type: Date, default: Date.now },
}, { timestamps: true });

export default mongoose.model("Company", companySchema);
