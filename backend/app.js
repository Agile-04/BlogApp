import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blogRoute';
import router from './routes/userRoute';
import cors from 'cors';

const app=express();

app.use(cors());

app.use(express.json());

app.use("/api/user",router);

app.use("/api/blog",blogRouter);

mongoose.connect(
    'mongodb+srv://Sindhuja:Sindhuadi123@cluster0.yn2b1tg.mongodb.net/Blog?retryWrites=true&w=majority'
    ).then(()=>app.listen(5000))
    .then(()=>console.log("connected to db and listening to the port 5000")
    ).catch((err)=>console.log(err));





