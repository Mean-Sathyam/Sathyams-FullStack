//import the express module
const express=require("express")  
app=express();

//import the path module
const path=require("path")
app.use(express.static(path.join(__dirname,'dist/ONLINE-EXAMINATION')))

//import the AdminApi and studentApi
const adminApp=require("./online-backend/API'S/adminApi")
const studentApp=require("./online-backend/API'S/studentApi")

app.use("/admin",adminApp)
app.use("/student",studentApp)

//assign a port no
const PORT=3000;
app.listen(PORT,()=>{console.log(`server listening on ${PORT}`)})