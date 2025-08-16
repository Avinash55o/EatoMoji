import sql from "../DB/index.js";

export const lestMood= async (req, res)=>{
  try {
    const moodList= await sql`SELECT * FROM FOODS ORDER BY id`
    return res.json({message:"successfully get the mood list", moodList})
  } catch (error) {
    return res.status(500).json({message:"internal error"})
  }
}