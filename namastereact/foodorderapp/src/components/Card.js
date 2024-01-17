import { IMG_URL } from "./utils/constants";
const Card = (props) => {
  const { restData } = props;
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId } = restData?.info;
  return (
    <div className="card-container">
      <img className="card-img" alt="src-img" src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>Ratings: {avgRating}</h4>
      <div>{cuisines.join(", ")}</div>
      <h5>{costForTwo}</h5>
      <div>{restData?.info?.sla?.deliveryTime} mins</div>
    </div>
  );
};
export default Card;
