import sql from "../DB/index.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config()

export const signup = async(req, res)=>{
  try {
    const {name, email, password} = req.body;
    // find all fields are given or not
    if (!name || !email || !password) {
      return res.status(400).json({message:"all fields are required"})}

    // check if the user already exists
    const existinguser= await sql`SELECT name FROM users WHERE email= ${email} LIMIT 1`
    if (existinguser.length > 0) {
      return res.status(409).json({message:"The user already exists"})
    }

    // hash the password
    const hashPassword= await bcrypt.hash(password,10);

    //store in the DB
    const [user]= await sql`INSERT INTO users (name ,email, password_hash) VALUES (${name},${email},${hashPassword}) RETURNING id, email`
    
    //create jwt token
    const token= jwt.sign({id: user.id, email: user.email}, process.env.JWT_SECRET,{expiresIn:'7d'})
    console.log(token)
    if(!token){
      return res.status(500).json({message:"token generation failed"})
    }

    res.status(201).json({token, message:"signup successfull"})

    } catch (error) {
      console.log('singup error:', error)
      res.status(500).json({error:"signup unsuccessfull"})
    }
}


// sign-in controller
export const signIn= async(req,res)=>{
  try {
    //destructuring
    const {email,password}= req.body
    //check all the fields are given or not
    if(!email || !password){
      return res.status(400).json({message:"ALL fields are required"})
    }
    //check if email is there or not
    const [user]= await sql`SELECT id, email, password_hash, name FROM users WHERE email= ${email} LIMIT 1`
    if(!user){
      return res.status(401).json({message:"unauthorized! not able to find the user"})
    }
    //check if pass is correct or not
    const correct_pass= await bcrypt.compare(password, user.password_hash)
    console.log(correct_pass)
    if(!correct_pass){
      return res.status(401).json({message:"password is incorrect"})
    }
    console.log(res.json())
    res.status(200).json({user:{id:user.id ,email: user.email, name:user.name},message:"successfully signin"})
  } catch (error) {
    console.log('signin error:', error)
    res.status(500).json({error:"signin failed"})
  }
}