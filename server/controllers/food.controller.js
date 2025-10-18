// server/controllers/food.controller.js
import sql from "../DB/index.js";

export const listFood= async (req, res)=>{
  try {
    const list= await sql`SELECT id, food_name, category, calories, food_image FROM foods ORDER BY id`
    return res.status(200).json({message:"successfully get the food list", list})
  } catch (error) {
    console.error('Food list error:', error)
    return res.status(500).json({message:"internal error"})
  }
}