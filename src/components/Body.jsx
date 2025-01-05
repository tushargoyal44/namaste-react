import data from "../data/data.json";
import RestaurantCard  from "./RestaurantCard";
import {useEffect, useState} from "react";


const Body = () => {
    let [restData, setRestData] = useState(data);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0748&lng=72.8856&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
            mode: 'no-cors'
        }).then(res => console.log(res)
        );

    }
    return (
        <div className="body">
            <div className="filter">
             <button className="filter-button" onClick={() => {
                 setRestData(restData.filter(res => res.info.avgRating > 4.0));
             }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restData.map((item, index) => (<RestaurantCard key={index} resData={item.info} />))}
            </div>
        </div>
    )
}

export default Body;