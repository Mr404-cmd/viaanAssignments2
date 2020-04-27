const mongoose = require("mongoose")
const url =`mongodb+srv://dbUser:dbUser@cluster0-gzq5g.mongodb.net/test?retryWrites=true&w=majority`
const connectDB=async()=>{
    mongoose.connect(url,{ 
        useUnifiedTopology: true,
        useNewUrlParser: true})
    console.log("db connected successfully");
}
module.exports=connectDB