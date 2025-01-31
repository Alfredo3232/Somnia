import { Pool } from "pg";

const startDB = (env: DepsType["cleanEnv"]["pg"]) => {
    const pool = new Pool({
        user     : env.user,
        host     : env.host,
        database : env.database,
        password : env.password,
        port     : env.port
    });

    (async () => {
        try {
            await pool.connect();
            console.log("Connected to the somnia database!");
        } catch (err) {
            console.error("Error connecting to the database:", err);
        }
    })();

    const closeDB = async () => {
        await pool.end();
        console.log("Database connection closed.");
    };

    return {
        pool,
        closeDB
    };
};

export default startDB;
