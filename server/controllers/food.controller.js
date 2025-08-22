import sql from "../../EatoMoji/DB/index.js";
// get request dont required the req.body cause they don't have a body.
export const listFood= async (req, res)=>{
  try {
    const list= await sql`SELECT id, food_name, category, calories FROM foods ORDER BY id`
    return res.status(200).json({message:"successfully get the food list", list})
  } catch (error) {
    return res.status(500).json({message:"internal error"})
  }
}