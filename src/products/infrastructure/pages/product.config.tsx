import { lazy } from "react";
import SuspenseComponent from "../../../config/layout/suspense.component";
import { RouteObject } from "react-router-dom";

const Products = lazy(() => import("./products"));
const productsConfig: RouteObject = {
  path: "/",
  element: (
    <SuspenseComponent>
      <Products />
    </SuspenseComponent>
  ),
};

export default productsConfig;
