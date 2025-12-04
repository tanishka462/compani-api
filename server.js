const express = require("express");
const cors = require("cors");
const sequelize = require("./db");
const companyRoutes = require("./routes/companyRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/company",companyRoutes);

sequelize
.sync()
.then(()=>{
    console.log("All Models Synched");
})
.catch((err)=>{
    console.log("Sync error",err);
})

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
})