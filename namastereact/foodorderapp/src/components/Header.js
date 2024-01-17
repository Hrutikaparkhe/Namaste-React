import { useState } from "react";
import { LOGO_URL } from "./utils/constants";

const Header = () => {
  const [login, setLogin] = useState("Log In");
  return (
    <div className="header">
      <img className="logo" alt="logo-img" src={LOGO_URL}></img>
      <div className="navBar">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Cart</h4>
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
