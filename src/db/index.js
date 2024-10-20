import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        console.log(`\n MONGODB connected !! DB HOST: ${Object.keys(connectionInstance.connections)}`);
    } catch (err) {
        console.log("MONGODB connection failed:", err);
        process.exit(1);
    }
};

export default connectDB;
