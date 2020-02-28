//import the mongoose module
const mongoose=require("mongoose")
//get a schema object
let Schema=mongoose.Schema

let questiopaperSchema=new Schema({
options:[{
  questionno:Number,
  question:String,
  a:String, 
  b:String, 
  c:String, 
  d:String,
  correctanswer:String}],
  questionpaperid:Number, 
  questionpapername:String,
  
})

//export the model for above schema
module.exports=mongoose.model("questionPaper",questiopaperSchema)
