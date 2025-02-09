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
    },
    llm: {
        // Model URL
        baseUrl     : env.LLM_URL,
        apiKey      : env.LLM_API_KEY,
        // Model Info
        model       : env.LLM_MODEL,
        temperature : env.LLM_TEMP ? Number(env.LLM_TEMP) : 1,
        top_p       : env.LLM_TOP_P ? Number(env.LLM_TOP_P) : 1,
        max_tokens  : env.LLM_MAX_TOKENS ? Number(env.LLM_MAX_TOKENS) : 2048
    }
};

export default cleanEnv;
