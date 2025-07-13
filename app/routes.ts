/* import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/rows", "routes/rows.tsx"),
    route("/rows/:id", "routes/rowX.tsx")


] satisfies RouteConfig;
 */

// After npm i @react-router/fs-routes installed (https://reactrouter.com/how-to/file-route-conventions)

import { type RouteConfig } from "@react-router/dev/routes";
import { flatRoutes } from "@react-router/fs-routes";

export default flatRoutes() satisfies RouteConfig;