/// <reference types="../globals.d.ts" />
import routerApp from "./router/index";
import cleanEnv from "./helpers/cleanEnv";

import startDB from "./services/db/index";
import startLlm from "./services/llm";

// We are going to start the server in a modular way, I want to remain things simple for now
// if this project starts to become bigger we will do dependency injection
const startServer = async () => {
    const deps: DepsType = {
        cleanEnv
    };

    deps.db = startDB(deps.cleanEnv.pg);
    deps.llm = await startLlm(deps.cleanEnv.llm);
    const server = routerApp(deps);


    server.listen(cleanEnv.srv.port, () => {
        process.stdout.write(
            "Running at ---------------> " +
                `\x1b[3m\x1b[96mhttp://localhost:${cleanEnv.srv.port}\x1b[39m\x1b[23\x1b[0m` +
                "\n"
        );
    });
};

// Runs if the file is ran
if (require.main === module) startServer();
