import routes from "./routes/index";
import postgres from "./services/db/index";

// We are going to start the server in a modular way, I want to remain things simple for now
// if this project starts to become bigger we will do dependency injection
const startServer = () => {
    const env = process.env;

    const cleanEnv = {
        pg: {
            database : env.PG_DATABASE,
            host     : env.PG_HOST,
            password : env.PG_PASSWORD,
            port     : env.PG_PORT ? Number(env.PG_PORT) : undefined,
            user     : env.PG_USER
        },
        srv: {
            port: env.SRV_PORT ? Number(env.SRV_PORT) : 3000
        }
    };

    if (cleanEnv.pg.port !== undefined && isNaN(cleanEnv.pg.port))
        throw new Error("Invalid PG_PORT. Please ensure it's a valid number.");

    postgres.startDB(cleanEnv.pg);

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
