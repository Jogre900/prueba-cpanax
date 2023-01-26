import RouteProvider from "./config/route/route";
import { BrowserRouter } from "react-router-dom";
import Layout from "./config/layout/layout";
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <RouteProvider />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
