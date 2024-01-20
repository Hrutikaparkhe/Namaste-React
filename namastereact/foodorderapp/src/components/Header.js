import { useState } from "react";
import { LOGO_URL } from "./utils/constants";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./utils/UseOnlineStatus";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  const online = UseOnlineStatus();
  return online ? (
    <div className="header">
      <img className="logo" alt="logo-img" src={LOGO_URL}></img>

      <div className="navBar">
        <Link to={"/"} className="navbar-link-style">
          <h4>Home</h4>
        </Link>
        <Link to={"/grocery"} className="navbar-link-style">
          <h4>Grocery</h4>
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
        <h4>{online ? "🟢" : "🔴"}</h4>
      </div>
    </div>
  ) : (
    <div>loading....</div>
  );
};
export default Header;
