import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import RestaurantCard from "./restaurant-card";

function Restaurant() {
    const restaurants = [
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/f996b31033fd07603bfb28cb4e526683", 
            price: "ITEMS AT ₹149",
            name: "Chinese Wok", 
            rating: 4.0, 
            time: "45-50 min", 
            cuisine: "Chinese, Asian, Tibetian, Desserts", 
            location: "Omaxe Mall" 
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/2ce18342-6c04-4ebc-9725-788819ddaa56_107452.JPG", 
            price: "ITEMS AT ₹199",
            name: "Chaayos Chai+Snacks=Relax", 
            rating: 4.6, 
            time: "35-40 min", 
            cuisine: "Bakery, Beverages, Chaat, Snacks, Dessert", 
            location: "Kashmiri Gate"
        },
        { 
            link: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/5/0c39b5c3-e722-4b4a-853f-ddb5b21e9e74_804724.JPG", 
            price: "50% OFF",
            name: "KFC", 
            rating: 4.6, 
            time: "35-40 min", 
            cuisine: "Burgers, Rolls & Wrap, Fast Food", 
            location: "Chandani Chowk"
        }
    ];

    return (
        <div id="carousel">
            <div className="carousel-header">
                <h2><b>Top restaurant chains in Delhi</b></h2>
                <ul id="arrow-list">
                    <li><CiCircleChevLeft /></li>
                    <li><CiCircleChevRight /></li>
                </ul>
            </div>
            <div className="restaurant-cards">
                {restaurants.map((item, index) => (
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
    );
}

export default Restaurant;
