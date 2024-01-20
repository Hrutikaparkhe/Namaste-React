import { useState, useEffect } from "react";
import { MENU_DATA_URL } from "./constants";
const UseMenuCard = (resId) => {
  const [menudetails, setMenuDetails] = useState(null);
  useEffect(() => {
    fetchMenuInfo();
  }, []);
  const fetchMenuInfo = async () => {
    const data = await fetch(MENU_DATA_URL + resId);
    const json = await data.json();
    setMenuDetails(json?.data);
  };
  return menudetails;
};
export default UseMenuCard;
