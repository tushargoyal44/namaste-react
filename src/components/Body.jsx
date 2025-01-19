import data from "../data/data.json";
import RestaurantCard  from "./RestaurantCard";
import {useEffect, useState} from "react";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";


const Body = () => {    
    const [restData, setRestData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchText, setSearchText] = useState("");
    

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
    const response =  await fetch(API);
  
    const json = await response.json();
    var globalRestData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestData(globalRestData);
    setFilteredData(globalRestData);
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
                const filterData = restData.filter((e) => e.info.name.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredData(filterData);
             }}>search</button>
             </div>
             
             <button className="filter-button" onClick={() => {
                 setFilteredData(restData.filter(res => res.info.avgRating > 4.4));
             }}>Top Rated Restaurants</button>
            
            </div>
             
            <div className="res-container">
                {filteredData.map((item, index) => (<RestaurantCard key={index} resData={item.info} />))}
            </div>
            
        </div>
    )
}
export default Body;