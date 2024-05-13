import mongoose from "mongoose";

//create schema
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    profilePicture:{
        type: String,
        default: "https://www.shutterstock.com/image-vector/man-icon-vector-260nw-1040084344.jpg",
    }
}, {timestamps: true});


//create the model 
const User = mongoose.model('User', userSchema);//User should always start with upercase and should be singular(mongodb will add the plural form automatically if need be)

//we export it so we can use it anywhere in this project
export default User;
