
import mongoose from "mongoose";


const connectDB  = async()=>{


  mongoose.connection.on('connected',()=>{
    console.log("Database connected")
  })
  await mongoose.connect(`mongodb://127.0.0.1:27017/Imagify`)


}

// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String
// }); 

// module.exports  = mongoose.model("usermodel",userSchema); 

export default connectDB 