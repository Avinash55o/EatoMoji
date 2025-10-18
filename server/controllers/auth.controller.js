// server/controllers/auth.controller.js
import sql from "../DB/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const signup = async(req, res)=>{
  try {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({message:"all fields are required"})
    }

    const existinguser= await sql`SELECT name FROM users WHERE email= ${email} LIMIT 1`
    if (existinguser.length > 0) {
      return res.status(409).json({message:"The user already exists"})
    }

    const hashPassword= await bcrypt.hash(password,10);
    const [user]= await sql`INSERT INTO users (name ,email, password_hash) VALUES (${name},${email},${hashPassword}) RETURNING id, email, name`
    
    const token= jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET,{expiresIn:'7d'})
    
    res.status(201).json({token,user:{id:user.id ,email: user.email, name:user.name}, message:"signup successfull"})
  } catch (error) {
    console.log('signup error:', error)
    res.status(500).json({error:"signup unsuccessfull"})
  }
}

export const signIn= async(req,res)=>{
  try {
    const {email,password}= req.body
    if(!email || !password){
      return res.status(400).json({message:"ALL fields are required"})
    }
    
    const [user]= await sql`SELECT id, email, password_hash, name FROM users WHERE email= ${email} LIMIT 1`
    if(!user){
      return res.status(401).json({message:"unauthorized! not able to find the user"})
    }
    
    const correct_pass= await bcrypt.compare(password, user.password_hash)
    if(!correct_pass){
      return res.status(401).json({message:"password is incorrect"})
    }
    
    // ADD JWT TOKEN GENERATION
    const token= jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET,{expiresIn:'7d'})
    
    res.status(200).json({
      token,
      user:{id:user.id ,email: user.email, name:user.name},
      message:"successfully signin"
    })
  } catch (error) {
    console.log('signin error:', error)
    res.status(500).json({error:"signin failed"})
  }
}