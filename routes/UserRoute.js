import express from "express";

// import semua method pada controllers
import {
    getData,
    getDataById,
    createData,
} from "../controllers/UserController.js";

const router = express.Router();

router.get("/data", getData);
router.get("/data/:id", getDataById);
router.post("/data", createData);

export default router;
