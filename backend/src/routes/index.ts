import routerApp from "../router";

import { usersRoutes } from "../modules/users";
import { personaRoutes } from "../modules/persona";
import { dreamLogsRoutes } from "../modules/dreamLogs";

routerApp.use("/users", usersRoutes);
routerApp.use("/persona", personaRoutes);
routerApp.use("/dream-logs", dreamLogsRoutes);

export default routerApp;
