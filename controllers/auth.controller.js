import sql from "../DB/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async(req, res)=>{
  try {
    const {name, email, password} = req.body;
    // find all fields are given or not
    if (!name || !email || !password) {
      return res.status(400).json({message:"all fields are required"})}
    // check if the user already exists
    const existinguser= await sql`SELECT name FROM users WHERE email = ${email} LIMIT 1`
    if (existinguser) {
      return res.status(409).json({message:"The user already exists"})
    }

    // hash the password
    const hashPassword= await bcrypt.hash(password,10);

    //store in the DB
    cosnt [user]= await sql`INSERT INTO user (email, password_hash) VALUES (${email},${hashPassword})`

    

  } catch (error) {
    
  }
}