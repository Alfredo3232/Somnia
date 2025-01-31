import express, { Application } from "express";

// Initialize express and modules
const app: Application = express();

app.use(express.json());

export default app;
