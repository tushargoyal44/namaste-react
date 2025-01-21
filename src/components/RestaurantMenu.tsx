import React, { useEffect } from 'react'



export default function RestaurantMenu() {
    useEffect(() => {
        fetchMenu();
    }, []);
    
   const fetchMenu = async () => {
     const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5442047&lng=73.8727799&restaurantId=10290&catalog_qa=undefined&submitAction=ENTER");
     const json = await response.json();
     console.log(json);
     
    }
  return (
    <div>This is our hook</div>
  )
}
