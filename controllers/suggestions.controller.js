import sql from "../DB/index.js";

export const foodSuggestion = async (req, res) => {
  try {
    const { mood_id } = req.body;
    if (!mood_id) {
      return res.status(400).json({ message: "all fields are required" });
    }
    // taking out the food id with the help of mood id and also they are related so all the food id will come out
    const suggested_food_id = await sql`SELECT food_id FRODSM mood_food_mapping WHERE mood_id= ${mood_id}`;
    //WILL RETURN ARRAY VALUE [{food_id: 1}, {food_id: 2}, {food_id: 3}] SO,

    const foodIds= suggested_food_id.map(row=> row.food_id)
    //RETURN ARRAY OF FOOD ID

    // taking out the food name,image, and all other with the help of food id
    const food_suggestion = await sql`SELECT * FROM foods WHERE id= ANY(${foodIds})`;
    

    return res.status(200).json({message:"all the suggested foods",food_suggestion})
    
  } catch (error) {
    return res.status(400).json({error,message:"something went rong"})
  }
};
