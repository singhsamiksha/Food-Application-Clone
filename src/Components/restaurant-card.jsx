import { MdStars } from "react-icons/md";

function RestaurantCard({ link, name, rating, time, cuisine, location }) {
    return (
        <div id="card">
            <img src={link} alt={name} />
            <h3>{name}</h3>
            <div className="rating">
                <p id="rate"><MdStars /></p>
                <p>{rating}</p>
                <p>&nbsp;&nbsp;•&nbsp;{time}</p>
            </div>
            <p>{cuisine}</p>
            <p>{location}</p>
        </div>
    );
}

export default RestaurantCard;
