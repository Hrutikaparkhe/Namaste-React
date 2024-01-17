import { useState } from "react";
import Card from "./Card";
import dataList from "./utils/mockData";
const Body = () => {
  const [restList, setRestList] = useState(dataList);

  return (
    <div className="body">
      <div className="container">
        <button
          className="container-btn"
          onClick={() => {
            const filteredList = restList.filter((restData) => restData.info.avgRating > 4.5);
            setRestList(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
        <div className="card">
          {restList.map((restaurant) => (
            <Card key={restaurant.info.id} restData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
