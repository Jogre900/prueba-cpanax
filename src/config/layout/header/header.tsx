import { Link } from "react-router-dom";
import { routeConfig } from "../../route/routeConfig";
import "./styles.css";
const Header = () => {
  return (
    <>
      <nav className="header justify-content-end align-items-center">
        {routeConfig.map((elem) => (
          <Link
            key={elem.id}
            to={elem.path}
            className="text-white decoration-none upper-case white-space-nowrap fw-500"
          >
            {elem.id}
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Header;
