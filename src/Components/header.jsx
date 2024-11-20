import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import { MdOutlineShoppingCart } from "react-icons/md";



function Header() {
    return (
       <>
            <div id= "header">
                <img 
                    src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
                    alt="Header Logo"
                />
                <ul>
                    <li><CiSearch /> &nbsp; Search </li>
                    <li><CiDiscount1 />&nbsp;Offers</li>
                    <li><TfiHelpAlt />&nbsp;Help</li>
                    <li><LuUser2 />&nbsp;Sign In</li>
                    <li><MdOutlineShoppingCart />&nbsp;Cart</li>

                </ul>
            </div>
        </>
    )
}

export default Header;
