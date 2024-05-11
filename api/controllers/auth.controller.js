import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";//we use 'bycryptjs' because 'bcrypt' usually developes issues during production
import { errorHandler } from '../utils/error.js';
import jwt from "jsonwebtoken";

//"req" is data we are getting from the client side and "res" is data we send back to the client
export const signup = async (req, res, next) => {//we include an 'async' function
    const { username, email, password } = req.body;//get the name, email and password from the body...we use 'username' beacause it is required 
    const hashedPassword = bcryptjs.hashSync(password, 10);//hash the password
    const newUser = new User({ username, email, password: hashedPassword });//create a new user. 'User' is coming from the model we created earlier (we are creating it using our model)
    try {
        await newUser.save()//save the data to the db (due to intrnet connection, 'await' is used to tell the javascript to stay in this code until it recieves the result, it helps us not to get an error while waiting for the result)
        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        next(error);//use the middleware we just created for the error message
    }

};

export const signin = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) return next(errorHandler(404, 'User not found'));//check for email
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) return next(errorHandler(401, 'wrong credentials'));//check if password is correct
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);//token for extra security
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiryDate = new Date(Date.now() + 3600000);//1 hour

        res.cookie('access_token', token, { httpOnly: true, expires: expiryDate}).status(200).json(rest)//add it inside the browser token
    } catch (error) {
      next(error);
    }
}