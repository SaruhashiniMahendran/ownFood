import { Link } from "react-router";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img className="img" src={LOGO_URL} />
        <h3 className="resName">Nithushan</h3>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              About us
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact us
            </Link>
          </li>
          <li>
            <Link className="link" to="/card">
              Card
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
