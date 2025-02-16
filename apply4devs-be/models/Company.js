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


// const mongoose = require("mongoose");

// const companySchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     email: { type: String, unique: true, required: true },
//     phone: { type: String },
//     description: { type: String, required: true },
//     lastUpdate: { type: Date, default: Date.now }
// }, { timestamps: true });

// const getCompanyModel = (city) => {
//     const collectionName = `companies_${city.toLowerCase()}`;
//     return mongoose.models[collectionName] || mongoose.model(collectionName, companySchema, collectionName);
// };

// module.exports = getCompanyModel;
