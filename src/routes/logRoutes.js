import express from "express";
import { getLogsByUserId } from "../controllers/logController.js";

const router = express.Router();

router.get("/logs/:user_id", getLogsByUserId);

export default router;
