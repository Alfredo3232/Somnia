import routerApp from "../router.ts";
import { Request, Response } from "express";

// In-memory data store (simulating a database)
const users: { id: number; name: string; email: string }[] = [];


routerApp
    .route("/users")
    .get((_, res: Response) => {
        res.json(users);
    })
    .post((req: Request, res: Response) => {
        const { name, email } = req.body;
        const id = users.length + 1;
        const newUser = {
            id,
            name,
            email
        };
        users.push(newUser);
        res.status(201).json(newUser);
    });

routerApp
    .route("/users/:id")
    .get((req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);
        const user = users.find((u) => u.id === userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .put((req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);
        const { name, email } = req.body;
        const userIndex = users.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
            const updatedUser = {
                id: userId,
                name,
                email
            };
            users[userIndex] = updatedUser;
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    })
    .delete((req: Request, res: Response) => {
        const userId = parseInt(req.params.id, 10);
        const userIndex = users.findIndex((u) => u.id === userId);

        if (userIndex !== -1) {
            users.splice(userIndex, 1);
            res.status(204).send();
        } else {
            res.status(404).json({ message: "User not found" });
        }
    });

export default routerApp;
