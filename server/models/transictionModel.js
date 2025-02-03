import mongoose from 'mongoose'


const transactionSchema = new mongoose.Schema({

 useId: {type:String , required:true},
 plan: {type:String , required:true},
 amount: {type:Number , required:true},
 credits: {type:Number , required:true},
 payment: {type:Boolean , required:true},
 credits: {type:Number , default:false},
 date:{type:Number}, 
})


const transactionModel = mongoose.models.user || mongoose.model("user",transactionSchema)

export default transactionModel; 