import routes from "./routes/index.ts";

// We are going to start the server in a modular way, I want to remain things simple for now
// if this project starts to become bigger we will do dependency injection
const startServer = () => {
    const PORT = 3000;

    routes.listen(PORT, () => {
        process.stdout.write("Running at ---------------> " + `\x1b[3m\x1b[96mhttp://localhost:${PORT}\x1b[39m\x1b[23\x1b[0m` + "\n");
    });
};

// Runs if the file is ran
if (require.main === module) {
    startServer();
}
