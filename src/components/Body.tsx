import React, { useEffect, useState } from "react";
import data from "../data/data.json";
import RestaurantCard from "./RestaurantCard";
import { API } from "../utils/constants";
import Shimmer from "./Shimmer";

// Define types for Restaurant Data
interface Restaurant {
  info: {
    name: string;
    avgRating: number;
    [key: string]: any; // Add additional fields if needed
  };
}

const Body: React.FC = () => {
  const [restData, setRestData] = useState<Restaurant[]>([]);
  const [filteredData, setFilteredData] = useState<Restaurant[]>([]);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(API);
    const json = await response.json();

    // Adjust the path based on the actual API response structure
    const globalRestData: Restaurant[] =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setRestData(globalRestData);
    setFilteredData(globalRestData);
  };

  if (restData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            value={searchText}
            placeholder="search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={() => {
              const filterData = restData.filter((e) =>
                e?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredData(filterData);
            }}
          >
            search
          </button>
        </div>

        <button
          className="filter-button"
          onClick={() => {
            const topRated = restData.filter(
              (res) => res.info.avgRating > 4.4
            );
            setFilteredData(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredData.map((item, index) => (
          <RestaurantCard key={index} resData={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
