export default async function userProfile(res,req){
  const {user} =req.session
  if(!user){
    return res.status(401).json({error:"unauthorized"})
  }
  try {
    const user_profile=await sql`select * from users where id=${user.id}`
    if(!user_profile){
      return res.status(404).json({error:"user not found"})
    }
    return res.status(200).json(user_profile)
  } catch (error) {
    return res.status(500).json({error:"internal server error"})
  }
}