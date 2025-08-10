const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const mongoDB = async () => {
    try {
        const mongoUrl = process.env.MONGO_URL;
        if (!mongoUrl) {
            throw new Error("⚠️ MONGO_URL is not defined in environment variables");
        }
        await mongoose.connect(mongoUrl);
        console.log('✅ MongoDB connected successfully!');
    } catch (error) {
        console.error('❌ MongoDB connection error:', error.message);
    }
};
module.exports = { mongoDB };
