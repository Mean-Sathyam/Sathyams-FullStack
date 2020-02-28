//import the mongoose module
const mongoose=require("mongoose")
//get a schema object
let Schema=mongoose.Schema

let registrationSchema=new Schema({
    batchname:String,
    studentid:Number,
    username:String,
    password:String,
    email:String,
    phoneno:String,
    select:String,
    address:String
})

//export the model for above schema
module.exports=mongoose.model("studentRegistration",registrationSchema)
