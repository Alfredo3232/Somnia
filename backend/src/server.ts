import routes from "./routes/index.ts";

// We are going to start the server in a modular way, I want to remain things simple for now
// if this project starts to become bigger we will do dependency injection
const startServer = () => {
    const PORT = 3000;

    routes.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
};

// Runs if the file is ran
if (require.main === module) {
    startServer();
}
