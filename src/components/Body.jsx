import data from "../data/data.json";
import RestaurantCard  from "./RestaurantCard";
import {useEffect, useState} from "react";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";


const Body = () => {    
    const [restData, setRestData] = useState([]);
    const [searchText, setSearchText] = useState([]);
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    const response =  await fetch(API);
  
    const json = await response.json();
    setRestData(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(restData.length === 0){
       return <Shimmer />   
    }

    return (
        <div className="body">
            <div className="filter">
             <div className="search">
             <input type="text" value={searchText} placeholder="search" onChange={(e) => {setSearchText(e.target.value)}} />
             <button onClick={() => {
                const filterData = restData.filter((e) => e.info.name.includes(searchText));
                setRestData(filterData);
             }}>search</button>
             </div>
             <button className="filter-button" onClick={() => {
                 setRestData(restData.filter(res => res.info.avgRating > 4.4));
             }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {restData.map((item, index) => (<RestaurantCard key={index} resData={item.info} />))}
            </div>
        </div>
    )
}
export default Body;