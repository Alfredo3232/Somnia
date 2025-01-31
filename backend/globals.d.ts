import { Pool } from "pg";

declare global {
    interface DepsType {
        cleanEnv: {
            pg: {
                database: string | undefined;
                host: string | undefined;
                password: string | undefined;
                port: number | undefined;
                user: string | undefined;
            };
            srv: {
                port: number;
            };
        };
        db?: {
            pool: Pool;
            closeDB: () => Promise<void>;
        };
    }
}
