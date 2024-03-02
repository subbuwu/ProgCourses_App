import { Router } from "express";

import { adminSignUpController } from "../controllers/adminController.js";


const router = Router();



router.post("/signup",adminSignUpController);


export default router;