// models ini berupa struktur table bagaimana data kita nanti tersimpan di database

// import { Sequelize } from "sequelize";
import mongoose from "mongoose";

// database yg dituju
// import db from "../config/Database.js";

// const { DataTypes } = Sequelize;

// const User = db.define(
//     "data",
//     {
//         name: DataTypes.STRING,
//         bahasa: DataTypes.STRING,
//         error: DataTypes.STRING,
//         penyebab: DataTypes.STRING,
//         solusi: DataTypes.STRING,
//     },
//     {
//         freezeTableName: true,
//     }
// );

// export default User;

// // function yang akan menggenarate table, jika table user tidak terdapat didatabase
// // function akan running ketika memanggil userModels
// (async () => {
//     await db.sync();
// })();

// ------------------------ mongodb
const User = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    bahasa: {
        type: String,
        required: true,
    },
    error: {
        type: String,
        required: true,
    },
    penyebab: {
        type: String,
        required: true,
    },
    solusi: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Data", User);
