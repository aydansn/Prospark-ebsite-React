import style from "./Footer.module.css";
import navbarimage from "../../assets/images/Prospark Logo.webp"

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerLeft}>
      <img src={navbarimage} alt="navbar logo" />
      <h5>Newsletter</h5>
            <p>Sign up to receive latest news <br/> and exclusive content.</p>
            <div className={style.yanYana}>
                <div className={style.enter}><input type="text" placeholder="Enter your mail"/></div>
                <div className={style.subscribe}><button>Subscribe</button></div>
            </div>
      </div>
    <div className={style.allBox}>
    <div className={style.box}>
        <div className={style.heading}> Menu </div>
        <div className={style.links}>
        <div className={style.link}>Home V1</div>
        <div className={style.link}>Home V2</div>
        <div className={style.link}>Home V2</div>
        <div className={style.link}>About Us</div>
        <div className={style.link}>Contact</div>
        <div className={style.link}>Pricing</div>
        <div className={style.link}>Blog</div>
        <div className={style.link}>Career</div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.heading}> Pages </div>
        <div className={style.links}>
        <div className={style.link}>Service</div> 
        <div className={style.link}>Service Single</div>
        <div className={style.link}>Project</div>
        <div className={style.link}>Project Single</div>
        <div className={style.link}>Pricing Sinlge</div> 
        <div className={style.link}>Blog Single</div>
        <div className={style.link}>Project</div>
        <div className={style.link}>Career Single</div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.heading}> Utility Pages </div>
        <div className={style.links}>
        <div className={style.link}>Style Guide</div> 
        <div className={style.link}>Changelog</div>
        <div className={style.link}>Licence</div>
        <div className={style.link}>404 Not Found</div>
        <div className={style.link}>Protect Password</div>
        <div className={style.link}><a href="">See More Templates</a></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Footer;