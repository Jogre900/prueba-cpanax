import { Route, Routes } from "react-router-dom";
import { routeConfig } from "./routeConfig";

const RouteProviderComp = () => {
  return (
    <Routes>
      {routeConfig.map((r) => (
        <Route key={r.id} path={r.path} element={r.element} />
      ))}
    </Routes>
  );
};

export default RouteProviderComp;
