import { lazy } from "react";
import SuspenseComponent from "../../../config/layout/suspense.component";

const Products = lazy(() => import("./products"));
const productsConfig = {
  path: "/",
  id: "products",
  element: (
    <SuspenseComponent>
      <Products />
    </SuspenseComponent>
  ),
};

export default productsConfig;
