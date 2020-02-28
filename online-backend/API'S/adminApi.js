//create a mini express obj
const express=require("express")
adminApi=express.Router()

//import the body-parser module
const bodyParser=require("body-parser")
adminApi.use(bodyParser.json())

//import the bcrypt module
const bcrypt=require("bcrypt")

//import the mongoose module
const mongoose=require("mongoose")

//import the multer module
const multer=require("multer")

const xlsxtojson=require("xlsx-to-json-lc");

const xlstojson=require("xls-to-json-lc");

//import the Registration schema
const registration=require("../registrationSchema")

//import the batch schema
const batches=require("../BatchSchema")

//import the questionpaper schema
const qp=require("../questionPaperSchema")

const upload=multer({dest:'uploads/'})



//connect with the database url

const dburl="mongodb+srv://akhil:akhil@cluster0-ys629.mongodb.net/test?retryWrites=true&w=majority"

//connect to the database
mongoose.connect(dburl,{useNewUrlParser:true,useUnifiedTopology:true}).then((result)=>{
    console.log("database is successfully connected")
}).catch((error)=>{
    console.log("error in connecting to database")
})



adminApi.post("/questionpaper",upload.single("excelsheets"),(req,res)=>{
    req.body=JSON.parse(req.body.data)
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
        exceltojson = xlsxtojson;
        console.log("xlsx")
    } else {
        exceltojson = xlstojson;
    }
    try {
        exceltojson({
            input: req.file.path, //the same path where we uploaded our file
            output: null, //since we don't need output.json
            lowerCaseHeaders:true
        }, function(err,result){
            console.log(result)
            
            if(err) {
                return res.json({error_code:1,err_desc:err, data: null});
            }
             
            else{
                //create a doc
            const questionpaperobj=new qp({
                options : result,
                questionpaperid:req.body.questionpaperid, 
                questionpapername:req.body.questionpapername
            })
            questionpaperobj.save().then(()=>{
                res.json({message:"questionpaper uploaded successfully"})
            }).catch((err)=>{
                console.log(err)
            })
            }            
        });
    } catch (e){
        res.json({error_code:1,err_desc:"Corupted excel file"});
    }
})

adminApi.get("/getquestionpaper",(req,res)=>{
    qp.find().exec().then((result)=>{
           res.json({message:result})
    }).catch((err)=>{
        console.log(err)
    })
})


adminApi.post("/login",(req,res)=>{
     if(req.body.username=="akhil")
     {
      if(req.body.password=="akhil")
      {
          res.json({message:"logged in successfully"})
      }    
      else{
          res.json({message:"invalid password"})
      }
     }
     else{
         res.json({message:"invalid username"})
     }  

})


adminApi.post("/register",(req,res)=>{
    registration.findOne({username:req.body.username}).exec().then((result)=>{
        if(result!=null)
        {
            res.json({message:`username with ${req.body.username} already exists`})
        }

        else{
              bcrypt.hash(req.body.password,7).then((hashedPassword)=>{
                req.body.password=hashedPassword
                
                //create a document 
                let registerStudents=new registration({
                    batchname:req.body.batchname,
                    studentid:req.body.studentid,
                    username:req.body.username,
                    password:req.body.password,
                    email:req.body.email,
                    phoneno:req.body.phoneno,
                    select:req.body.select,
                    address:req.body.address
                })         
                registerStudents.save()
                res.json({message:"Inserted successfully"})
              }).catch((err)=>{
                  console.log("error occured in hashing the password",err)
              })
        }
    }).catch((err)=>{
        console.log("error occured in finding the username",err)
    })
})

adminApi.get("/getbatchdetails",(req,res)=>{
    batches.find().exec().then((result)=>{
        res.json({message:result})
    }).catch((err)=>{
        console.log(err)
    })
})

adminApi.post("/batchdetails",(req,res)=>{
    registration.findOne({batchno:req.body.batchno}).exec().then((result)=>{
        if(result!=null)
        {
            res.json({message:`batchno with ${req.body.batchno} already exists`})
        }

        else{
                //create a document 
                let BatchDetails=new batches({
                    batchno:req.body.batchno,
                    batchname:req.body.batchname,
                     from:req.body.from,
                     to:req.body.to
                 })         
                 BatchDetails.save()
                 res.json({message:"BatchDetails Inserted successfully"})
            
         }
     }).catch((err)=>{
         console.log("error occured in finding the batchno",err)
     })
 })

 adminApi.get("/getallstudents",(req,res)=>{
         registration.find().exec().then((result)=>{
             res.json({message:result})
         }).catch((err)=>{
             console.log(err)
         })
 })
 
 adminApi.put("/updatestudentdetails",(req,res)=>{
       registration.updateOne({studentid:req.body.studentid},
         {$set:{name:req.body.name,email:req.body.email,phoneno:req.body.phoneno,
         select:req.body.select,address:req.body.address}}).exec().then((result)=>{
             if(result)
             {
                 res.json({message:`student with id ${req.body.studentid1} updated successfully`})
             }
         }).catch((err)=>{
             console.log("error occured in updating the details",err)
         })
 })







//export the AdminApi
module.exports=adminApi;