import express from "express";
import cors from "cors";

// import router
import UserRoute from "./routes/UserRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
// panggil sebagai midleware
app.use(UserRoute);

app.listen(5000, () => console.log("Server up and running..."));
