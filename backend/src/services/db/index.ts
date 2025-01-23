import { Client } from "pg";

export = () => {
    // Database connection configuration
    const client = new Client({
        user     : "", // Username you created
        host     : "", // Assuming you're running PostgreSQL locally
        database : "", // Database name you created
        password : "", // Password you assigned to the user
        port     : 0 // Default PostgreSQL port
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
