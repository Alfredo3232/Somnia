import { OpenAI } from "openai";

const startLlm = async (env: DepsType["cleanEnv"]["llm"]) => {
    const client = new OpenAI({
        baseURL : env.baseUrl,
        apiKey  : env.apiKey
    });

    const info = {
        model       : env.model,
        messages    : null,
        temperature : env.temperature,
        top_p       : env.top_p,
        max_tokens  : env.max_tokens
    };

    return {
        client,
        info
    };
};

export default startLlm;
