import { Link } from "react-router-dom";
// import navbarimage from "../assets/images/Prospark Logo.webp";
import navbarimage from "../../assets/images/Prospark Logo.webp"
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.butunNavbar}>
      <div className={style.logoHisse}>
        <img src={navbarimage} alt="navbar logo" />
      </div>
      <div className={style.links}>
       <Link to="/home">Home</Link>
       <Link to="/about">About</Link>
       <Link to="/blog">Blog</Link>
       <Link to="/pages">Pages</Link>
       <Link to="/pricing">Pricing</Link>
       <Link to="/service">Service</Link>
      </div>
      <div class={style.navRight}>
                <div class={style.basket}><i class="fa-solid fa-basket-shopping"></i></div>
                <div class={style.getInTouch}><button>GET IN TOUCH</button></div>
            </div>
    </div>
  )
}

export default Navbar;