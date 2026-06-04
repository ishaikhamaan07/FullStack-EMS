import "dotenv/config";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

import connectDB from "./config/db.js";
import User from "./models/User.js";

const seedAdmin = async() => {
    try {
        await connectDB();

        const existingAdmin = await User.findOne({
            email: "admin@example.com",
        });

        if (existingAdmin) {
            console.log("Admin user already exists");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash("Admin@123", 10);

        await User.create({
            email: "admin@example.com",
            password: hashedPassword,
            role: "ADMIN",
        });

        console.log("Admin user created successfully");
        process.exit(0);

    } catch (error) {
        console.error("Seed failed:", error);
        process.exit(1);
    }
};

seedAdmin();