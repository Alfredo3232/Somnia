import { Pool } from "pg";
import { OpenAI } from "openai";

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
            llm: {
                baseUrl: string | undefined;
                apiKey: string | undefined;
                model: string | undefined;
                temperature: number | undefined;
                top_p: number | undefined;
                max_tokens: number | undefined;
            };
        };
        db?: {
            pool: Pool;
            closeDB: () => Promise<void>;
        };
        llm?: {
            client: OpenAI;
            info: {
                model: string | undefined;
                messages: string | null;
                temperature: number | undefined;
                top_p: number | undefined;
                max_tokens: number | undefined;
            };
        };
    }
}
