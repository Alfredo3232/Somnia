import express from "express";
import bodyParser from "body-parser";

// Initialize express and modules
const app = express();
app.use(bodyParser.json());

export default app;
