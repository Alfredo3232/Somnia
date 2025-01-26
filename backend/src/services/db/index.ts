import { Client } from "pg";

interface pg {
    database: string | undefined;
    host: string | undefined;
    password: string | undefined;
    port: number | undefined;
    user: string | undefined;
}

const startDB = (env: pg) => {
    const client = new Client({
        user     : env.user,
        host     : env.host,
        database : env.database,
        password : env.password,
        port     : env.port
    });

    const connectDB = async () => {
        try {
            await client.connect(); // Establish connection
            console.log("Connected to the somnia database!");
        } catch (err) {
            console.error("Error connecting to the database:", err);
        }
    };

    const fetchData = async () => {
        try {
            const res = await client.query("SELECT NOW()"); // Simple query to test
            console.log("Current time from database:", res.rows[0]);
        } catch (err) {
            console.error("Error running query:", err);
        }
    };

    const closeDB = async () => {
        await client.end(); // Close the database connection
        console.log("Database connection closed.");
    };

    // Execute the connection and query functions
    connectDB()
        .then(() => fetchData())
        .finally(() => closeDB());
};

export default {
    startDB
};
