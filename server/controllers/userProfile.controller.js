// server/controllers/userProfile.controller.js
import sql from "../DB/index.js";
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }
    
    // Add check for JWT_SECRET
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET is not defined');
      return res.status(500).json({ error: "Server configuration error" });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    return res.status(401).json({ error: "Invalid token" });
  }
};

export default async function userProfile(req, res) {
  try {
    const user_profile = await sql`select * from users where id=${req.user.id}`
    if(!user_profile || user_profile.length === 0){
      return res.status(404).json({error:"user not found"})
    }
    return res.status(200).json(user_profile[0])
  } catch (error) {
    console.error('User profile error:', error)
    return res.status(500).json({error:"internal server error"})
  }
}

export { verifyToken };