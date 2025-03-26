import express, { urlencoded } from "express";
import cors from "cors";
import authRoutes from './routes/authRoutes.js'
import {mongoose} from "mongoose";
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();


app.use(cors({
  origin: 'http://localhost:5173', // Your Vercel domain 
  credentials: true
}));

// middleware
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended: false}));

//database connection
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log('Database Connected Successfully'))
.catch((err)=> console.log('Database not Connected' , err))


const PORT = process.env.PORT;


app.use('/', authRoutes );


app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
