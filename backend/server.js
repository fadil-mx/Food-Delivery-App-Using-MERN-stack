import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodroute.js';
import userrouter from './routes/userroute.js';
import "dotenv/config";


const app=express();

app.use(express.json());
app.use(cors());

connectDB();

//api endpoint
app.use("/api/food",foodRouter);
app.use("/images",express.static("uploads"));
app.use("/api/user",userrouter)




app.get("/",(req,res)=>{
    res.send('server is ready');
})

app.listen(3000,()=>{
    console.log('server started at 3000');
})

//mongodb+srv://admin-fadil:<password>@cluster0.u3bs9zf.mongodb.net/?