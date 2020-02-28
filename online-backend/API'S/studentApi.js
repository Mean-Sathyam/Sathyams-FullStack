const express=require("express")
studentApi=express.Router()

//import the body-parser module
const bodyParser=require("body-parser")
studentApi.use(bodyParser.json())

//import the bcrypt module
const bcrypt = require("bcrypt");

//import the jsonwebtoken module
const jwt=require("jsonwebtoken")

//import the util package
const util=require("util")

//import the 
const checkauth=require("../verifyToken")

//import the registration schema
const registration1=require("../registrationSchema")

//import the registration schema
const qp1=require("../questionPaperSchema")

//import the mongoose module
const mongoose=require("mongoose")

//connect with the database url
const dburl="mongodb+srv://akhil:akhil@cluster0-ys629.mongodb.net/test?retryWrites=true&w=majority"

//connect to the database
mongoose.connect(dburl,{useUnifiedTopology:true,useNewUrlParser:true}).then((result)=>{
    console.log("database is successfully connected")
}).catch((error)=>{
    console.log("error in connecting to database",error)
})

studentApi.get("/getallstudentdetails",checkauth,(req,res)=>{
    registration1.find().exec().then((result)=>{
          res.json({message:result})
    }).catch((err)=>{
        console.log(err)
    })
})

studentApi.get("/angularquestionpaper/:qid",(req,res)=>{
   qp1.findOne({questionpaperid:req.params.qid}).exec().then((result)=>{
       res.json({message:result})
   }).catch((err)=>{
       console.log(err)
   })
})

studentApi.get("/mongodbquestionpaper/:qid",(req,res)=>{
    qp1.findOne({questionpaperid:req.params.qid}).exec().then((result)=>{
        res.json({message:result['options']})
    }).catch((err)=>{
        console.log(err)
    })
 })


 studentApi.get("/expressjsquestionpaper/:qid",(req,res)=>{
    qp1.findOne({questionpaperid:req.params.qid}).exec().then((result)=>{
        res.json({message:result['options']})
    }).catch((err)=>{
        console.log(err)
    })
 })


 studentApi.get("/nodejsquestionpaper/:qid",(req,res)=>{
    qp1.findOne({questionpaperid:req.params.qid}).exec().then((result)=>{
        res.json({message:result['options']})
    }).catch((err)=>{
        console.log(err)
    })
 })

 studentApi.post("/result",(req,res)=>{
     qp1.findOne({questionpaperid:req.body.questionpaperid}).exec().then((result)=>{
                       
     }).catch()
        
 })

studentApi.post("/login",(req,res)=>{
    registration1.findOne({username:req.body.username}).exec().then((result)=>{
        if(result==null)
        {
            res.json({message:"username is invalid"})
        }
        else {
            bcrypt.compare(req.body.password,result.password).then((result)=>{
                if(result==false)
                {
                    res.json({message:"invalid password"})
                }
                else{
                   
                    jwt.sign({username: req.body.username}, "Akhil",{expiresIn:30}, (err, token)=>{
                        res.json({message:"logged in successfully", token: token, username: req.body.username});
                    } )
                }
            }).catch((err)=>{
                console.log(err)
            })
        }
        
    }).catch((err)=>{
        console.log(err)
    })
})

//export the studentApi
module.exports=studentApi;
