import User from '../models/User';
import bcrypt from 'bcryptjs';
export const getAllUser = async(req,res,next)=>{
    let users;
    try{
         users=await User.find( )
    }catch(err){
        return console.log(err);
    }
    if(!users){
       return res.status(404).json({message:"no users fouhnd"});
    }else{
       return res.status(200).json({users});
    }

}

export const signup=async(req,res,next)=>{
    const {name,email,work,password}=req.body;

    let existingUser;
    try{
      existingUser=await User.findOne({email})
    }catch(err){
       return console.log(err);
    }
    if(existingUser){
       return res.status(400).json({message:"user already existed"});
    }
    const hashedpassword=bcrypt.hashSync(password);
    const user =new User({
        name,
        email,
        work,
        password:hashedpassword,
        blogs:[]
    });

    try{
      await user.save();
    }catch(err){
       return console.log(err);
    }

    return res.status(201).json({user})
}

//login route

export const login=async(req,res,next)=>{

   const {email,password}=req.body;

   let existingUser;
    try{
      existingUser=await User.findOne({email})
    }catch(err){
       return console.log(err);
    }
    if(!existingUser){
       return res.status(404).json({message:"user not found"});
    }

    const isPasswordCorrect = bcrypt.compareSync(password,existingUser.password);

    if(!isPasswordCorrect){
      return res.status(400).json({message:"Invalid credentials"});
    }
    return res.status(200).json({message:"Login successful",user:existingUser});

}