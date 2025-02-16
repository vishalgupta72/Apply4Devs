const express = require("express");
const Company = require("../models/Company");

const router = express.Router();

// GET all companies
router.get("/", async(req, res)=>{
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ message: "Error fetching companies" });
    }
});

// GET company by ID
router.get("/:id", async(req, res)=>{
    try {
        const companyId = req.params.id;
        const existCompany = await Company.findById(companyId);
        if (!existCompany) {
            return res.status(404).json({ message: "Company not found" });
        }
        res.status(200).json(existCompany);

    } catch (error) {
        res.status(500).json({ message: "Error fetching company by ID" });
    }

})

// POST create company 
router.post("/", async(req, res)=>{
    try {
        const { name, email, phone, city, description } = req.body;

        const existCompany = await Company.findOne({email});
        if(existCompany){
            return res.status(400).json({ message: "Company already exists" });
        }
        const newCompany = await Company.create({name,email,phone,city,description});
        newCompany.save();
        res.status(201).json({ message: "Company created successfully", company: newCompany });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating company" });
    }
})

// EDIT company
router.put("/:id", async (req, res)=>{
    try {
        const companyId = req.params.id;
        const { name, email, phone, city, description } = req.body;
        const existCompany = await Company.findById(companyId);
        if (!existCompany) {
            return res.status(404).json({ message: "Company not found" });
        }

        if (email && email !== existCompany.email) {
            const emailExists = await Company.findOne({ email });
            if (emailExists) {
                return res.status(400).json({ message: "Email already in use" });
            }
            existCompany.email = email;
        }

        // Update only provided fields
        if (name) existCompany.name = name;
        if (phone) existCompany.phone = phone;
        if (city) existCompany.city = city;
        if (description) existCompany.description = description;
        existCompany.lastUpdate = Date.now();
        await existCompany.save();
        res.status(200).json({ message: "Company updated successfully", company: existCompany });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error updating company" });
    }
})

// Delete company by ID
router.delete("/:id", async(req, res)=>{

    try {
        const companyId = req.params.id;
        console.log(companyId)
        const existCompany = await Company.findById(companyId);
        if (!existCompany) {
            return res.status(404).json({ message: "Company not found" });
        }
        await existCompany.deleteOne();
        res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error deleting company" });
    }
})

module.exports = router


// const express = require("express");
// const getCompanyModel = require("../models/Company");

// const router = express.Router();

// // Middleware to get city from the URL
// router.use("/:city", (req, res, next) => {
//     req.city = req.params.city.toLowerCase();
//     next();
// });

// // ✅ **GET all companies for a specific city**
// router.get("/:city", async (req, res) => {
//     try {
//         const Company = getCompanyModel(req.city);
//         const companies = await Company.find();
//         res.status(200).json(companies);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching companies" });
//     }
// });

// // ✅ **GET company by ID for a specific city**
// router.get("/:city/:id", async (req, res) => {
//     try {
//         const Company = getCompanyModel(req.city);
//         const company = await Company.findById(req.params.id);
//         if (!company) {
//             return res.status(404).json({ message: "Company not found" });
//         }
//         res.status(200).json(company);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching company by ID" });
//     }
// });

// // ✅ **POST create company in a specific city's collection**
// router.post("/:city", async (req, res) => {
//     try {
//         const { name, email, phone, description } = req.body;
//         const Company = getCompanyModel(req.city);

//         const existCompany = await Company.findOne({ email });
//         if (existCompany) {
//             return res.status(400).json({ message: "Company already exists" });
//         }

//         const newCompany = new Company({ name, email, phone, description });
//         await newCompany.save();
//         res.status(201).json({ message: "Company created successfully", company: newCompany });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating company" });
//     }
// });

// // ✅ **PUT update company by ID**
// router.put("/:city/:id", async (req, res) => {
//     try {
//         const Company = getCompanyModel(req.city);
//         const updatedCompany = await Company.findByIdAndUpdate(req.params.id, req.body, { new: true });

//         if (!updatedCompany) {
//             return res.status(404).json({ message: "Company not found" });
//         }

//         res.status(200).json({ message: "Company updated successfully", company: updatedCompany });
//     } catch (error) {
//         res.status(500).json({ message: "Error updating company" });
//     }
// });

// // ✅ **DELETE company by ID**
// router.delete("/:city/:id", async (req, res) => {
//     try {
//         const Company = getCompanyModel(req.city);
//         const existCompany = await Company.findById(req.params.id);
//         if (!existCompany) {
//             return res.status(404).json({ message: "Company not found" });
//         }
//         await existCompany.deleteOne();
//         res.status(200).json({ message: "Company deleted successfully" });
//     } catch (error) {
//         res.status(500).json({ message: "Error deleting company" });
//     }
// });

// module.exports = router;
