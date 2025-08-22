import express from 'express';
import dotenv from 'dotenv';
import router from './api/index.js';
import cors from 'cors'
import '../EatoMoji/DB/index.js';
dotenv.config();
const app=express();


app.use(express.json());
app.use(cors())
app.use('/api',router);
app.listen(process.env.PORT,()=>{
  console.log(`Server is running on port ${process.env.PORT}`);
})