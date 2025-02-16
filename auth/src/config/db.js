import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });

        console.log("Mongodb connected");
    } catch (error) {
        console.error("Database Connection error")
        process.exit(1);
    }
};
export default connectDB;