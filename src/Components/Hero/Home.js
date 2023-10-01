import React from "react"
import "./Home.css"
import hero from "../pic/hero.jpg"
import "../../App.css"
import Resume from "../Resume/Resume"
import Contact from "../Contact/Contact"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hello, My Name is <span>Adriana Reyes</span>
            </h1>
            {/* <h2>
              a
              <span>
                <Typewriter words={[" Developer.", " Student.", " Developer.", " Student."]} loop cursor cursorStyle='|' typeSpeed={90} deleteSpeed={70} delaySpeed={1000}/>
              </span>
            </h2> */}

            <p>I'm Adriana Reyes, a Computer Science student at The University of Texas at Austin. With internships at Salesforce and Microsoft, I've honed my skills in software engineering, enhancing platform quality and creating customer-centric solutions. Beyond my studies, I'm dedicated to promoting diversity in tech as a member of the Hispanic Association of Computer Scientists and a UT Computer Science Ambassador, and I'm fluent in Spanish with a passion for emerging technologies and quantitative finance.</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>Connect With Me</h4>
                <div className='button'>
                  <a href="https://www.linkedin.com/in/adriana-monica-reyes/">
                    <button className='btn_shadow'>
                      <img alt='' className="icon-pics" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"></img>
                    </button>
                  </a>
                  <a href='#contact'>
                    <button className='btn_shadow'>
                      <img alt='' lassName="icon-pics" src="https://icon-library.com/images/phone-icon-transparent/phone-icon-transparent-13.jpg"></img>
                    </button>
                  </a>
                  <a href='#contact'>
                    <button className='btn_shadow'>
                      <img alt='' className="icon-pics" src="https://cdn-icons-png.flaticon.com/512/561/561127.png"></img>
                    </button>
                  </a>
                </div>
              </div>
              {/* <div className='col_1'>
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
              </div> */}
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img className='hero_img' src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Resume/>
      </section>
      {/* <section>
        <Blog/>
      </section> */}
      <section>
        <Contact/>
      </section>
    </>
  )
}

export default Home