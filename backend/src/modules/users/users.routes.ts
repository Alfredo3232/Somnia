import express from "express";
import {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
} from "./users.controller";

const router = express.Router();

router.post("/", createUser);
router.get("/", getAllUsers);

router.put("/:id", updateUser);
router.get("/:id", getUserById);
router.delete("/:id", deleteUser);

export default router;
