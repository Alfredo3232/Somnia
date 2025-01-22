import express, { Request, Response } from "express";
import bodyParser from "body-parser";

// Initialize express app
const app = express();
app.use(bodyParser.json());

// In-memory data store (simulating a database)
const users: { id: number; name: string; email: string }[] = [];

// Create a new user (POST)
app.post("/users", (req: Request, res: Response) => {
    const { name, email } = req.body;
    const id = users.length + 1;
    const newUser = { id, name, email };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Read all users (GET)
app.get("/users", (req: Request, res: Response) => {
    res.json(users);
});

// Read a specific user by ID (GET)
app.get("/users/:id", (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const user = users.find((u) => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Update a user (PUT)
app.put("/users/:id", (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const { name, email } = req.body;
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex !== -1) {
        const updatedUser = { id: userId, name, email };
        users[userIndex] = updatedUser;
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Delete a user (DELETE)
app.delete("/users/:id", (req: Request, res: Response) => {
    const userId = parseInt(req.params.id, 10);
    const userIndex = users.findIndex((u) => u.id === userId);

    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
