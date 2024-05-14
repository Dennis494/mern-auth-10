import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
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

app.use(cookieParser());

app.listen(3000, () => {
    console.log('Server listening on port 3000')
});

//use api route
app.use('/api/user', userRoutes);
//use another route since the first one was the user
app.use("/api/auth", authRoutes)


//create middleware
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    });
});
