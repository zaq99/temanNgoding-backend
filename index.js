import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// import router
import UserRoute from "./routes/UserRoute.js";

const app = express();
// app.use(cors());
// app.use(express.json());
// panggil sebagai midleware
// app.use(UserRoute);

// ------------------------- mongodb
mongoose.connect(
    "mongodb://mongo:YX8HzpU0p1kmX8Doedy0@containers-us-west-172.railway.app:5496",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(UserRoute);
// ------------------------- mongodb

app.listen(5000, () => console.log("Server up and running..."));
