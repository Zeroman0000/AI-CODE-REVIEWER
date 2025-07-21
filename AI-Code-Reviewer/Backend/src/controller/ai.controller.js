const aiService=require('../services/ai.service')

module.exports.aiResponse= async(req,res)=>{
 const code=req.body.code;

 if(!code){
    return req.status(400).send("code is required");
 }
 const response=await aiService(code);

 res.send(response);
}
