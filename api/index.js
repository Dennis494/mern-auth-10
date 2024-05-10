import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
//initialize dotenv
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB');
}) .catch((err) => {
    console.log(err);
});

//create application
const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});