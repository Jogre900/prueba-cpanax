import { lazy } from "react";
import SuspenseComponent from "../../../config/layout/suspense.component";
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
