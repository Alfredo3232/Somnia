import { Router } from "express";
import {
    insertUsers,
    getAllUsers,
    getUsersById,
    updateUsersById,
    deleteUsersById
} from "./users.controller";
const router = Router();

const UsersRoutes = (deps: DepsType) => {
    router
        .post("/", insertUsers(deps))
        .get("/", getAllUsers(deps))
        .get("/:id", getUsersById(deps))
        .put("/:id", updateUsersById(deps))
        .delete("/:id", deleteUsersById(deps));

    return router;
};

export default UsersRoutes;
