import { Sequelize } from "sequelize";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_URI } = process.env;

// const db = new Sequelize("solusi_db", "root", "", {
//     host: "localhost",
//     dialect: "mysql",
// });

// // ---------------- mongodb
const db = new Sequelize(DB_URI, {
    define: {
        timestamps: false,
    },
});
// // ------------------- mongodb

export default db;
// export lalu buat database pada xampp
