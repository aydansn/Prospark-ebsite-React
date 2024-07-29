import React from 'react'
import main2image from "../../assets/images/main2svg.svg";
import style from "./Design.module.css";
import { UpOutlined } from "@ant-design/icons";

const Design = () => {
  return (
   <div>
      <div className={style.section2}>
        <div className={style.allBoxs}>
          <div className={style.box1}>
            <button>
              <UpOutlined />
            </button>
            <h3>01</h3>
            <h3 className={style.difH3}>Ads Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className={style.box2}>
            <button>
            <UpOutlined />
            </button>
            <h3>02</h3>
            <h3>Data Analytics</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className={style.box3}>
            <button>
            <UpOutlined />
               </button>
            <h3>03</h3>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <div className={style.allBoxs}>
          <div className={style.box1}>
            <button>
            <UpOutlined />
             </button>
            <h3>01</h3>
            <h3 className={style.difH3}>Ads Design</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className={style.box2}>
            <button>
            <UpOutlined /> </button>
            <h3>02</h3>
            <h3>Data Analytics</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
          <div className={style.box3}>
            <button>
            <UpOutlined /> </button>
            <h3>03</h3>
            <h3>SEO Marketing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
          </div>
        </div>
        <img src={main2image} alt="main2 image" />
      </div>
   </div>
  )
}

export default Design