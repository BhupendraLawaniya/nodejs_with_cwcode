const users = require("../Models/users.models");

exports.register = async(req, res)=>{
    const{username, email, phonenumber, password}=req.body;
    console.log(req.body,"ddddddddd")

    try{
        let user = await users.findOne({email});
        if(user){
            return res.status(400).json({message:"user already exist"})
        }

        //create new user in db
       user = new users({
        username,
        email,  
        phonenumber,
        password
       });

       await user.save();

       res.status(200).json({message:"user save successfully",
        user:{
            username:user.username,
            email:user.email,
            phonenumber:user.phonenumber,
        },
       });
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
}