import { useEffect, useState } from "react";
import Card from "./Card";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import UseOnlineStatus from "./utils/UseOnlineStatus";

const Body = () => {
  const online = UseOnlineStatus();
  const [restList, setRestList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearcheText] = useState("");

  useEffect(() => {
    fetchApiData();
  }, []);
  const fetchApiData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const filtereArr = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestList(filtereArr);
    setFilteredList(filtereArr);
  };
  if (!online) {
    return <h4>You or Offline!! please check your connectivity status</h4>;
  }
  return restList.length > 0 ? (
    <div className="body">
      <div className="container">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearcheText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedData = restList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setFilteredList(searchedData);
            }}
          >
            Search
          </button>
          <button
            className="container-btn"
            onClick={() => {
              const filteredList = restList.filter((restData) => restData.info.avgRating > 4);
              setRestList(filteredList);
              setFilteredList(filteredList);
            }}
          >
            Top rated Restaurants
          </button>
        </div>

        <div className="card">
          {filteredList.map((restaurant) => (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id} className="link-style">
              <Card restData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <ShimmerUI />
  );
};
export default Body;
