import routes from "./routes/index";
import postgres from "./services/db/index";
import cleanEnv from "./helpers/cleanEnv";

// We are going to start the server in a modular way, I want to remain things simple for now
// if this project starts to become bigger we will do dependency injection
const startServer = async () => {
    const db = postgres.startDB(cleanEnv.pg);
    console.log(db);

    routes.listen(cleanEnv.srv.port, () => {
        process.stdout.write(
            "Running at ---------------> " +
                `\x1b[3m\x1b[96mhttp://localhost:${cleanEnv.srv.port}\x1b[39m\x1b[23\x1b[0m` +
                "\n"
        );
    });
};

// Runs if the file is ran
if (require.main === module) startServer();
