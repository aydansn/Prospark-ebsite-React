import React from "react";
import style from "./OurClever.module.css";
import mainimage from "../../assets/images/main1.webp";
const OurClever = () => {
  return (
    <div>
      <div className={style.section1}>
        <button>
          <p className={style.home}>Home / Service</p>
        </button>
        <h1 className={style.our}>Our Clever</h1>
        <h1 className={style.app}>Approuch</h1>
        <img src={mainimage} alt="main-image" />
      </div>
    </div>
  );
};

export default OurClever;
