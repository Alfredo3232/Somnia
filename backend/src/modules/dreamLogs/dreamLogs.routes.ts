import express from "express";
import { getAllDreamLogs } from "./dreamLogs.controller";

const router = express.Router();

router.post("/", getAllDreamLogs);

export default router;
