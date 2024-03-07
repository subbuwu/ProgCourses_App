import { userSchema } from "../types/index.js";
import { Course, User } from "../db/index.js";

export const userSignUpController = async (req, res) => {
    const { username, password } = req.headers;
    if (!username || !password) {
        res.send("Missing Inputs");
        return;
    }
    
    try {
        const existingUser = await User.findOne({
            username,
            password
        });

        if (existingUser) {
            res.json({
                message: "User Already Exists"
            });
            return;
        }

        const parsedPayload = userSchema.safeParse({ username, password });
        if (parsedPayload.success) {
            try {
                await User.create({
                    username,
                    password,
                });
                res.json({
                    message: "User created successfully"
                });
            } catch (err) {
                console.log(err);
                res.status(500).json({
                    message: "Error creating user"
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

export const purchaseCourseController = async(req,res) => {
    const courseId = req.params.courseId;
    const { username } = req.headers;
    try {
        const user = await User.findOne({ username });
        
        user.purchasedCourses.push(courseId);

        await user.save();

        res.json({
            message: "Purchased course successfully"
        });
    } catch (error) {
        res.send(error);
    }
}


export const getCoursesController = async (req,res) => {
    const courses = await Course.find({})
    res.send(courses);
}
