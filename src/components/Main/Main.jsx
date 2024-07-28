
import style from "./Main.module.css"; 
import mainimage from "../../assets/images/main1.webp";
import main2image from "../../assets/images/main2svg.svg";
import starimage from "../../assets/images/star.svg";
import userfoto from "../../assets/images/userfoto.webp";
import user2foto from "../../assets/images/user2foto.webp";
import icon1 from "../../assets/images/icon1svg.svg";
import icon2 from "../../assets/images/icon2.svg";
import icon3 from "../../assets/images/icon3.svg";

const Main = () => {
  return (
   <div>
       <div className={style.section1}>
            <button><p class={style.home}>Home / Service</p>
             </button>
                <h1 class={style.our}>Our Clever</h1>
                <h1 class={style.app}>Approuch</h1>
                <img src={mainimage} alt="main image" />
        </div>

        <div className={style.section2}>
            <div class={style.allBoxs}>
                <div class={style.box1}>
                   <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <h3>01</h3>
                    <h3 class={style.difH3}>Ads Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div class={style.box2}>
                    <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <h3>02</h3>
                    <h3>Data Analytics</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div class={style.box3}>
                    <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                     <h3>03</h3>
                    <h3>SEO Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
            <div class={style.allBoxs}>
                <div class={style.box1}>
                   <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <h3>01</h3>
                    <h3 class={style.difH3}>Ads Design</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div class={style.box2}>
                    <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                    <h3>02</h3>
                    <h3>Data Analytics</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div class={style.box3}>
                    <button> <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                     <h3>03</h3>
                    <h3>SEO Marketing</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
            </div>
          <img src={main2image} alt="main2 image" />
        </div>

        <div className={style.section3}>
            <h1>Framing Project</h1>
            <div className={style.center}>
                <div className={style.images}>  
                    <img src={starimage} alt="star image" />
                </div>
                <div className={style.bigText}> With Strategy</div>
             </div>
        </div>

        <div className={style.section4}>
            <div className={style.allCircle}> 
                <div className={style.real}><button> <h2>Realistic Research</h2> </button></div>
                <div className={style.real2}><button><h2> Use Proven Source</h2> </button></div>
                <div className={style.real3}><button><h2> Work together</h2> </button></div>
            </div>
        </div>
        <div className={style.section3}>
            <h1>Ready to build</h1>
            <div className={style.center}>
                <div className={style.images}>  
                    <img src={starimage} alt="star image" />
                </div>
                <div className={style.bigText}> your Brand</div>
             </div>
        </div>

        <div className={style.section5}>
            <div className={style.section5Left}>
                <button>Growth Focused</button>
                <h1>Boost your brand with <br/> collaboration
                </h1>
                <p>Our goal is to collaborate closely with you, understanding your unique business objectives, and crafting tailored strategies to achieve tangible and measurable results. Get in touch with us today to discuss how our expertise can drive your digital success.</p>
            </div>
            <div className={style.section5Right}>
               <img src={userfoto} alt="user foto" />
            </div>
        </div>

        <div className={style.section5}>
            <div className={style.section5Right}>
               <img src={user2foto} alt="user foto" />
            </div>

            <div className={style.section5Left}>
                <button>Scalability</button>
                <h1>Partnering for <br /> Everlasting Success
                </h1>
                <p>Our goal is to collaborate closely with you, understanding your unique business objectives, and crafting tailored strategies to achieve tangible and measurable results. Get in touch with us today to discuss how our expertise can drive your digital success.</p>
            </div>
        </div>

        <div className={style.section3}>
            <h1>Strategy &</h1>
            <div className={style.center}>
                <div className={style.images}>  
                    <img src={starimage} alt="star image" />
                </div>
                <div className={style.bigText}>Execution</div>
             </div>
        </div>
        <div className={style.section6}>
            <div className={style.allMonitor}>
                <div className={style.firstMonitor}>
                    <button><img src={icon1}alt="icon1 foto" /></button>
                    <h3>Outstanding <br/>Support</h3>
                    <p>With your approval, we put our meticulously <br/>  designed strategy into action. From content <br/> creation and campaign launch</p>
                </div>

                <div className={style.firstMonitor}>
                    <button><img src={icon2} alt="icon2 foto" /></button>
                    <h3>Monitoring & <br/> Optimization</h3>
                    <p>We believe in continuous improvement. We <br/> closely monitor campaign performance, analyzing</p>
                </div>

                <div  className={style.firstMonitor}>
                    <button><img src={icon3} alt="icon3 foto" /></button>
                    <h3>Reporting & <br/> Analysis</h3>
                    <p>Transparency is key. We provide detailed reports outlining campaign performance, highlighting successes.</p>
                </div>
            </div>
        </div>
        <div className={style.section7}>
            <h1>Let’s Work </h1>
            <div className={style.center}>
                <div className={style.images}>  
                    <img src={starimage} alt="star image" />
                </div>
                <div className={style.bigText}> Together.
                </div>

             </div>
             <button>
                <i class="fa-solid fa-arrow-down"></i>
                Get in touch
             </button>
        </div>
   </div>
  )
}

export default Main;