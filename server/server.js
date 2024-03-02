import 'dotenv/config'
import express from "express"
import { initDB } from './db/index.js';
import userRoutes from "./routes/user.js"
import adminRoutes from "./routes/admin.js"

const app = express();

initDB();

app.use("/user",userRoutes);
app.use("/admin",adminRoutes);

app.listen(process.env.PORT , ()=>console.log(`Server listening on port ${process.env.PORT}`));