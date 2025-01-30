import express from "express";
import { getCompanies, createCompany } from "../controllers/companyController.js";

const router = express.Router();

router.get("/", getCompanies);   // Fetch all companies
router.post("/", createCompany); // Add a new company

export default router;
