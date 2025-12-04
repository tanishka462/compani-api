const {DataTypes} = require("sequelize");
const sequelize =require("../db");

const Company = sequelize.define(
    "Company",
    {
        company:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        date:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        gst:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        cin:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
     {
    tableName: "companies", 
    timestamps: false,
  }
);
module.exports = Company;
