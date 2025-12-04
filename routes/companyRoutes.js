const express = require("express");
const router = express.Router();
const Company = require("../models/company");

router.post("/",async(req,res)=>{
    try{
        const {company,date,gst,cin} = req.body;
        if(!company || !date || !gst || !cin){
            return res.status(400).json({
                error:"All Fields Are Requires"
            });
        }
        const newCompany = await Company.create({company,date,gst,cin});
        res.json({
            message:"Company Added Successfully",
            data:newCompany,
        });
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});

router.get("/",async(req,res)=>{
    try{
        const companies = await Company.findAll();
        res.json(companies);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
});

module.exports = router;
