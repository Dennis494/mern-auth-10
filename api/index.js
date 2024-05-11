import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
//initialize dotenv
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB');
}) .catch((err) => {
    console.log(err);
});

//create application
const app = express();

//recieve JSON (allow json as the input of our backend)
app.use(express.json());

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

//use api route
app.use('/api/user', userRoutes);
//use another route since the first one was the user
app.use("/api/auth", authRoutes)

