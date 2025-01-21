import {CDN_URL} from "../utils/constants.js";
const RestaurantCard = (props) => {
    const {resData} = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        cloudinaryImageId
    } = resData
    return (
        <div className="restaurant-card">
            <div> <img
                src={`${CDN_URL}${cloudinaryImageId}`}
                className="card-img"
                alt={name}
            /></div>
            <h4>{name}</h4>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}
export default RestaurantCard;