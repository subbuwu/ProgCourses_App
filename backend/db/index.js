import mongoose from 'mongoose';
const { Schema } = mongoose;

export const initDB = async () => {
    try {
        const res = await mongoose.connect(process.env.MONGO_DB_URL);
        if(res) console.log(`Mongo DB Connected`);
    } catch (error) {
        console.log(error)
    }
}

const courseSchema = new Schema({
    title : String,
    description : String,
    imageLink : String,
    price : Number
})

export const Course = mongoose.model("Course",courseSchema);

const userSchema = new Schema({
    username:String,
    password:String,
    purchasedCourses: [{
        type: mongoose.Schema.ObjectId,
        ref: 'Course'
    }]
})

export const User = mongoose.model("User",userSchema);