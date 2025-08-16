import sql from "../DB/index.js";

export const listFood= async (req, res)=>{
  try {
    const list= await sql`SELECT id, name, category, calories FROM FOODS ORDER BY id`
    return res.json({message:"successfully get the food list", list})
  } catch (error) {
    return res.status(500).json({message:"internal error"})
  }
}