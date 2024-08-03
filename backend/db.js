const mongoose = require("mongoose");



const connectToMongo = ()=>{
        mongoose.connect("mongodb+srv://yoyohp456:Meatpulao123@cluster1.rlcxurn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
        .then(()=>{
            console.log("mongodb connected")
        })
        .catch((err)=>{
            console.log("there is a problem in your connection"+err.message)
        })
}
module.exports = connectToMongo;