import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/header/header";
import { routeConfig } from "./routeConfig";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <div>test-1</div>,
    },
    {
      path: "/test-2",
      element: <div>test-2</div>,
    },
  ]
  // routeConfig.map(
  //   (r): RouteObject => ({
  //     path: r.path,
  //     element: r.element,
  //   })
  // )
);

const RouteProviderComp = () => {
  return (
    <Routes>
      {routeConfig.map((r) => (
        <Route key={r.id} path={r.path} element={r.element} />
      ))}
      {/* <Route path="/" element={<div>Home</div>} />
      <Route path="/test-2" element={<div>test-2</div>} /> */}
    </Routes>
  );
};

export default RouteProviderComp;
