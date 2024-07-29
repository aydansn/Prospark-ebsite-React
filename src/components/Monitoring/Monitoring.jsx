import React from 'react';
import style from "./Monitoring.module.css";
import icon1 from "../../assets/images/icon1svg.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";

const Monitoring = () => {
  return (
    <div>
         <div className={style.section6}>
        <div className={style.allMonitor}>
          <div className={style.firstMonitor}>
            <button>
              <img src={icon1} alt="icon1 foto" />
            </button>
            <h3>
              Outstanding <br />
              Support
            </h3>
            <p>
              With your approval, we put our meticulously <br /> designed
              strategy into action. From content <br /> creation and campaign
              launch
            </p>
          </div>

          <div className={style.firstMonitor}>
            <button>
              <img src={icon2} alt="icon2 foto" />
            </button>
            <h3>
              Monitoring & <br /> Optimization
            </h3>
            <p>
              We believe in continuous improvement. We <br /> closely monitor
              campaign performance, analyzing
            </p>
          </div>

          <div className={style.firstMonitor}>
            <button>
              <img src={icon3} alt="icon3 foto" />
            </button>
            <h3>
              Reporting & <br /> Analysis
            </h3>
            <p>
              Transparency is key. We provide detailed reports outlining
              campaign performance, highlighting successes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Monitoring