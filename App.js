import React, { PureComponent, createElement } from "react";
import ReactDOM from "react-dom/client";
import data from "./dummy-data.json";


const apiResponse  = () =>{
        const restaurantData = data.data.cards.filter(item => {
            return item.card.card ? item.card.card : null;  
        })
        console.log(restaurantData);
};

apiResponse();
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className= "logo" src="https://graphicsprings.com/wp-content/uploads/2024/01/Screen-Shot-2024-01-25-at-5-12-43-PM.png.webp" alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resName, cuisine} = props;

    return (
        <div className="res-card">
            {/* <img className="res-logo" src= `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +  {} alt="" /> */}
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
             <h4>4.4 stars</h4>
             <h4>38 Minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                
                {/* <RestaurantCard restData = data"/> */}
                <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body></Body>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />);