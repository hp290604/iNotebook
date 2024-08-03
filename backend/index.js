const express = require("express");
const app = express();
const connectToMongo = require("./db");
const userModel = require('./models/user.js');
connectToMongo();
app.use("/api/auth",require('./routes/auth'));
app.use("/api/notes",require('./routes/notes'));
app.get("/",(req,res)=>{
    res.send(`hello world`);
})
app.listen(3000,()=>{
    console.log("all set")
})