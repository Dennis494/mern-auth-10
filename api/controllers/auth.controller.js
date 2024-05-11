import User from '../models/user.model.js';
import bcryptjs from "bcryptjs";//we use 'bycryptjs' because 'bcrypt' usually developes issues during production

//"req" is data we are getting from the client side and "res" is data we send back to the client
export const signup = async (req, res) => {//we include an 'async' function
    const { username, email, password } = req.body;//get the name, email and password from the body...we use 'username' beacause it is required 
    const hashedPassword = bcryptjs.hashSync(password, 10);//hash the password
    const newUser = new User({ username, email, password: hashedPassword });//create a new user. 'User' is coming from the model we created earlier (we are creating it using our model)
    try {
        await newUser.save()//save the data to the db (due to intrnet connection, 'await' is used to tell the javascript to stay in this code until it recieves the result, it helps us not to get an error while waiting for the result)
        res.status(201).json({message: 'User created successfully'});
    } catch (error) {
        res.status(500).json(error.message);
    }

};

