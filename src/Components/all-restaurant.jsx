import React, { useState } from "react";
import RestaurantCard from "./restaurant-card";

function AllRestaurants() {
    const [searchTerm, setSearchTerm] = useState("");
    const restaurants = [
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/zgxbigsbfkwk9rcf7kfp", 
            price: "199",
            name: "Baozi Momos", 
            rating: 4.3, 
            time: "25-30 min", 
            cuisine: "Chinese", 
            location: "Janakpuri" 
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/exbqvz2nvjzeebvwlmr2", 
            price: "300",
            name: "Kaarobaar: Modern-Desi Bistro", 
            rating: 3.9, 
            time: "45-50 min", 
            cuisine: "North Indian,Continental", 
            location: "Rajinder Nagar"
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/xdhfsov7mgqycr0uuott", 
            price: "250",
            name: "Naivedyam", 
            rating: 4.6, 
            time: "35-40 min", 
            cuisine: "South Indian", 
            location: "Connaught Place"
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/qe6wtw5awj2rdfxc5g6u", 
            price: "150",
            name: "Mourya Sweets and Chat Bhandar", 
            rating: 3.6, 
            time: "50-55 min", 
            cuisine: "North Indian", 
            location: "Paharganj"
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/vcrqkiimqbszigatwroq", 
            price: "199",
            name: "Social", 
            rating: 4.0, 
            time: "35-40 min", 
            cuisine: "North Indian,Chinese", 
            location: "Saket"
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/slahwcdcjbkut8idhlft", 
            price: "400",
            name: "Hai Sen Bao", 
            rating: 4.4, 
            time: "55-60 min", 
            cuisine: "South Indian,North Indian,Chinese", 
            location: "Karkardooma"
        }
    ];

    // Filter the restaurants based on the search term
    const searchedRestaurants = restaurants.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    console.log(searchedRestaurants);

    // Handle the input change
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <div className="AllRestaurants">
                <hr />
                <h2><b>Restaurants with online food delivery in Delhi</b></h2>
                <div id="filterButtons">
                    <input 
                        type="text" 
                        placeholder="Search Here" 
                        id="searchBar" 
                        value={searchTerm} 
                        onChange={handleSearch} 
                    />
                    <button className="filterButton">Fast Delivery</button>
                    <button className="filterButton">Rating 4+</button>
                    <button className="filterButton">Less than ₹250</button>
                    <button className="filterButton">Offers</button>
                </div>
                <div id="restaurantList">
                    {searchedRestaurants.map((item, index) => (
                        <RestaurantCard 
                            key={index} 
                            link={item.link} 
                            price={item.price}
                            name={item.name} 
                            rating={item.rating} 
                            time={item.time} 
                            cuisine={item.cuisine} 
                            location={item.location} 
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default AllRestaurants;
