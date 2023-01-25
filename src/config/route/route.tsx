import { createBrowserRouter, RouterProvider, RouteObject } from "react-router-dom";
import { routeConfig } from "./routeConfig";
const router = createBrowserRouter(
  routeConfig.map(
    (r): RouteObject => ({
      path: r.path,
      element: r.element,
    })
  )
);

const RouteProviderComp = () => {
  return <RouterProvider router={router} />;
};

export default RouteProviderComp;
