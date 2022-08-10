import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import java from "../pic/java.png"
import python from "../pic/python.png"
import react from "../pic/react.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Adriana Reyes</span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter words={[" Developer.", " Student.", " Developer.", " Student."]} loop cursor cursorStyle='|' typeSpeed={90} deleteSpeed={70} delaySpeed={1000}/>
              </span>
            </h2>

            <p>I'm a Junior at the University of Texas at Austin double majoring in Computer Science and Business. I've had the amazing opportunity to gain ReactJS web development experiacne as intern at Microsoft on the Dynamics 365 Platform for the past two summers. With my experiance with Python and Java, I am aspiring to break into the quantitaive trading space.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Connect With Me</h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/adriana-monica-reyes/">
                    <button className='btn_shadow'>
                      <img className="icon-pics" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
                    </button>
                  </a>
                  <a href='#contact'>
                    <button className='btn_shadow'>
                      <img className="icon-pics" src="https://icon-library.com/images/phone-icon-transparent/phone-icon-transparent-13.jpg"></img>
                    </button>
                  </a>
                  <a href='#contact'>
                    <button className='btn_shadow'>
                      <img className="icon-pics" src="https://cdn-icons-png.flaticon.com/512/561/561127.png"></img>
                    </button>
                  </a>
                </div>
              </div>
              <div className='col_1'>
                <h4>Experiance With</h4>
                <button className='btn_shadow'>
                  <img className='python' src={python} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img className='react' src={react} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img className='java' src={java} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home