const jwt=require("jsonwebtoken")

let checkAuthorizedStudent=(req,res,next)=>{
    
    let TokenWithBearer=req.headers["authorization"]
    if(TokenWithBearer===undefined)
    {
        res.json({message:"please login to access this page"})

    }

    if(TokenWithBearer.startsWith("Bearer "))
    {
        token=TokenWithBearer.slice(7,TokenWithBearer.length);
        jwt.verify(token,"abcde",(err,result)=>{
            if(err)
            {
                res.json({message:"please relogin-session expired"})
            }
                next();
        })
    }
}

module.exports=checkAuthorizedStudent;