import express from "express";
import { getAllPersona } from "./persona.controller";

const router = express.Router();

router.post("/", getAllPersona);

export default router;
