import UserModel from "./user.model.js";
import jwt from "jsonwebtoken";

export default class UserController{

    // User SignUp 
    signUp(req,res){
        const { name, email, password } = req.body;
        const user = UserModel.signUp(name, email, password);
        res.status(201).send(user);
    }

    // User Signin
    signIn(req,res){
        const result = UserModel.signIn(req.body.email,req.body.password)
        if(!result){
            return res.status(200).send('Incorrect Credentials');
        } else{
                // create token for Jwt 
                const token = jwt.sign({
                    userId: result.id,
                    email: result.email
                },"df9DU2NjOQVH7Kyq0zi96IF1izOWah93",
                {
                    expiresIn: '1h',
                });

                // send token
                return res.status(200).send(token);
        }
    }
}