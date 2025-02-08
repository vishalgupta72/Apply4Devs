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
