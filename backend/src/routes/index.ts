import routerApp from "../router";

import { usersRoutes } from "../modules/users";
import { personaRoutes } from "../modules/persona";
import { dreamLogRoutes } from "../modules/dreamLogs";

routerApp.use("/users", usersRoutes);
routerApp.use("/persona", personaRoutes);
routerApp.use("/dream-logs", dreamLogRoutes);

export default routerApp;
