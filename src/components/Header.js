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
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Card</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
