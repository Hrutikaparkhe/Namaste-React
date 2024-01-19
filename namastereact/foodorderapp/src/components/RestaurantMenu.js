import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_IMAGE } from "./utils/constants";
import { MENU_DATA_URL } from "./utils/constants";
const RestaurantMenu = () => {
  const [menuDetails, setMenuDetails] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenuInfo();
  }, []);
  const fetchMenuInfo = async () => {
    const data = await fetch(MENU_DATA_URL + resId);
    const json = await data.json();
    setMenuDetails(json?.data);
  };
  if (menuDetails === null) {
    return <ShimmerUI />;
  }
  const { name, cuisines, feeDetails, locality, areaName, totalRatingsString, costForTwoMessage } = menuDetails?.cards[0]?.card?.card?.info;
  const { message } = feeDetails;
  const { itemCards } = menuDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;
  return (
    <>
      <div className="menu-info">
        <div>
          <h3>{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <div>
            {areaName},{locality}
          </div>
          <div>{message}</div>
          <h4>{costForTwoMessage}</h4>
        </div>

        <div className="rest-ratings">
          <h4>{totalRatingsString}</h4>
        </div>
      </div>

      {itemCards.map((item) => (
        <div className="menu-container" key={item.card.info.id}>
          <div>
            <h3>{item.card.info.name}</h3>
            <h4>Rs {item.card.info.price / 100}</h4>
            <div>{item.card.info.description}</div>
          </div>
          <div className="menu-image">
            <img src={MENU_IMAGE + item.card.info.imageId} alt="menu-img" className="menu-img-style"></img>
          </div>
        </div>
      ))}
    </>
  );
};
export default RestaurantMenu;
