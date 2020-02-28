//import the mongoose module
const mongoose=require("mongoose")
//get a schema object
let Schema=mongoose.Schema

let BatchSchema=new Schema({
    batchno:Number,
    batchname:String,
    from:Date,
    to:Date,    
})

//export the model for above schema
module.exports=mongoose.model("BatchCollection",BatchSchema)
