import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const { solusi_db } = process.env;

// const db = new Sequelize("solusi_db", "root", "", {
//     host: "localhost",
//     dialect: "mysql",
// });

const db = new Sequelize(solusi_db, {
    define: {
        timestamps: false,
    },
});

export default db;
// export lalu buat database pada xampp
