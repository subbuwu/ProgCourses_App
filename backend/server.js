import 'dotenv/config'
import express from "express"
import { initDB } from './db/index.js';
import userRoutes from "./routes/user.js"

const app = express();

initDB();

app.use("/user",userRoutes);

app.listen(process.env.PORT , ()=>console.log(`Server listening on port ${process.env.PORT}`));