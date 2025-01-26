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

export default cleanEnv;