import { ReactNode } from "react";
import Header from "./header/header";
import "./styles.css";
type LayoutProps = {
  children: ReactNode | ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />

      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
