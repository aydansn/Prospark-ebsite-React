
import starimage from "../../assets/images/star.svg";
import { UpOutlined } from "@ant-design/icons";
import React from 'react'
import style from "./Work.module.css";

const Work = () => {
  return (
    <div>
          <div className={style.section7}>
        <h1>Let’s Work </h1>
        <div className={style.center}>
          <div className={style.images}>
            <img src={starimage} alt="star image" />
          </div>
          <div className={style.bigText}> Together.</div>
        </div>
        <button>
          <UpOutlined />
          Get in touch
        </button>
      </div>
    </div>
  )
}

export default Work