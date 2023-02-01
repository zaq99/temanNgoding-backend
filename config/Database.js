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

// const connectDB = async () => {
//     try {
//         await mongoose.connect(DB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("MongoDB Connected...");
//     } catch (err) {
//         console.error(err.message);
//         // Exit process with failure
//         process.exit(1);
//     }
// };

export default db;
// export lalu buat database pada xampp
