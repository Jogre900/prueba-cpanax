import { lazy } from "react";
import SuspenseComponent from "../../../config/layout/suspense.component";
import { RouteObject } from "react-router-dom";
const Users = lazy(() => import("./users"));

const usersConfig = {
  id: "users",
  path: "users",
  element: (
    <SuspenseComponent>
      <Users />
    </SuspenseComponent>
  ),
};

export default usersConfig;
