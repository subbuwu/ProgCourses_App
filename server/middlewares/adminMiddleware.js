import { Admin } from "../db";

export const adminMiddleware = async (req,res,next) => {
    const { username,password } = req.headers;

    if(!username || !password) {
        res.send("Missing Credentials");
        return;
    }

    try {
        const existingAdmin = await Admin.findOne({
            username,
            password,
        })
        if(existingAdmin){
            next();
        }
        else{
            res.json({
                message : "Wrong Credentials or Admin Doesn't Exist , sign up"
            })
        }
    } catch (err) {
        res.send("Error occured , try again");
    }

    
}