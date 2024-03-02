import { User } from "../db/index.js";

export const userMiddleware = async (req,res,next) => {
    const { username , password } = req.headers;
    if (!username || !password) {
        res.send("Missing Username or Password for User");
        return;
    }
    try {
        const existingUser = await User.findOne({
            username,
            password
        })
        if(existingUser){
            next();
        }
        else{
            res.json({
                message : "Wrong Credentials or User Doesn't Exist , sign up"
            })
        }
    } catch (err) {
        res.send("Error occured , try again");
    }
}