import React from 'react'
import style from "./Realistic.module.css";

const Realistic = () => {
  return (
    <div>
          <div className={style.section4}>
        <div className={style.allCircle}>
          <div className={style.real}>
            <button>
              {" "}
              <h2>Realistic Research</h2>{" "}
            </button>
          </div>
          <div className={style.real2}>
            <button>
              <h2> Use Proven Source</h2>{" "}
            </button>
          </div>
          <div className={style.real3}>
            <button>
              <h2> Work together</h2>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Realistic;