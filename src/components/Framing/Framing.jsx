import React from "react";
import style from "./Framing.module.css";
import starimage from "../../assets/images/star.svg";

const Framing = () => {
  return (
    <div>
      <div className={style.section3}>
        <h1>Framing Project</h1>
        <div className={style.center}>
          <div className={style.images}>
            <img src={starimage} alt="star image" />
          </div>
          <div className={style.bigText}> With Strategy</div>
        </div>
      </div>
    </div>
  );
};

export default Framing;
