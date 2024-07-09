const express = require("express");
const path = require("path");
const rout  = express.Router();
rout.get('/blog' , (req , res)=>{
    res.sendFile(path.join(__dirname , '../templet/index.html'));
})
module.exports = rout;