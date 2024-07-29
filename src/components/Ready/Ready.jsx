import React from 'react'
import style from "./Ready.module.css";
import userfoto from "../../assets/images/userfoto.webp";

const Ready = () => {
  return (
    <div>
          <div className={style.section5}>
        <div className={style.section5Left}>
          <button>Growth Focused</button>
          <h1>
            Boost your brand with <br /> collaboration
          </h1>
          <p>
            Our goal is to collaborate closely with you, understanding your
            unique business objectives, and crafting tailored strategies to
            achieve tangible and measurable results. Get in touch with us today
            to discuss how our expertise can drive your digital success.
          </p>
        </div>
        <div className={style.section5Right}>
          <img src={userfoto} alt="user foto" />
        </div>
      </div>
    </div>
  )
}

export default Ready;