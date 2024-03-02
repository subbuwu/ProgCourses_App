import { Admin } from "../db/index.js";
import { adminSchema } from "../types/index.js";

export const adminSignUpController = async (req, res) => {
    
    const { username, password } = req.headers;
    if (!username || !password) {
        res.send("Missing Inputs");
        return;
    }
    
    try {
        const existingAdmin = await Admin.findOne({
            username,
            password
        });

        if (existingAdmin) {
            res.json({
                message: "Admin Already Exists"
            });
            return;
        }

        const parsedPayload = adminSchema.safeParse({ username, password });
        if (parsedPayload.success) {
            try {
                await Admin.create({
                    username,
                    password,
                });
                res.json({
                    message: "Admin created successfully"
                });
            } catch (err) {
                console.log(err);
                res.status(500).json({
                    message: "Error creating admin"
                });
            }
        } else {
            res.send(parsedPayload);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error"
        });
    }
};