import { LOGO_URL } from "./utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo-img" src={LOGO_URL}></img>
      <div className="navBar">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Cart</h4>
      </div>
    </div>
  );
};
export default Header;
