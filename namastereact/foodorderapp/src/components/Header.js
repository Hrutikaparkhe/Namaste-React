import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  return (
    <div className="header">
      <img className="logo" alt="logo-img" src={LOGO_URL}></img>
      <div className="navBar">
        <Link to={"/"} className="navbar-link-style">
          <h4>Home</h4>
        </Link>
        <Link to={"./about"} className="navbar-link-style">
          <h4>About</h4>
        </Link>
        <Link to={"/contact"} className="navbar-link-style">
          <h4>Contact</h4>
        </Link>
        <button
          className="logIn-btn"
          onClick={() => {
            login === "Log In" ? setLogin("Log Out") : setLogin("Log In");
          }}
        >
          {login}
        </button>
      </div>
    </div>
  );
};
export default Header;
