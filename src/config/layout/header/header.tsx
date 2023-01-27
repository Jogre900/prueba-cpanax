import { Link } from "react-router-dom";
import { routeConfig } from "../../route/routeConfig";
import "./styles.css";
const Header = () => {
  return (
    <>
      <nav className="header justify-content-end align-items-center bg-primary">
        {routeConfig.map((elem) => (
          <Link
            key={elem.id}
            to={elem.path}
            className="decoration-none upper-case white-space-nowrap bold font-size-20 color-superlight link"
          >
            {elem.id}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
