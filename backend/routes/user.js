import { Router } from "express";
import { getCoursesController, purchaseCourseController, userSignUpController } from "../controllers/userController.js";
import { userMiddleware } from "../middlewares/userMiddleware.js";

const router = Router();

/*
@User Signup 
POST , Public Route
*/
router.post("/signup",userSignUpController);

/*
@User See Courses
GET , Protected Route
*/
router.get("/courses",userMiddleware,getCoursesController);

/*
@User Post Courses
Post , Protected Route
*/
router.post("/courses/:courseId",userMiddleware,purchaseCourseController);

export default router;