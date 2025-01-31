import app from "./app";

import  usersRoutes  from "../modules/users/users.routes";

const initializeRouter = (deps: DepsType) => {
    app.use("/users", usersRoutes(deps));

    return app;
};

export default initializeRouter;
