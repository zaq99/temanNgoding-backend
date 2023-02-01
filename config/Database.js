import { Sequelize } from "sequelize";

const db = new Sequelize("solusi_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
});

export default db;
// export lalu buat database pada xampp
