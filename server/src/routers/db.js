import mongoose from 'mongoose';
import envConfig from '../config/envConfig.js';
const connectDB = async () => {
    try {
        const mongoURI = envConfig.DB.MONGO_URI;
        await mongoose.connect(mongoURI, {
            dbName: envConfig.DB.DB_NAME,
        });
        console.log("Database connected successfully");
    } catch {
        console.log("Database connection failed:");
    }
}
export default connectDB;