import React from "react"
import "./Home.css"
import hero from "../pic/hero copy.jpg"
import Features from "../Features/forHome"
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
              Hi, I’m <span>Adriana Reyes</span>
            </h1>

            <p>I'm Adriana Reyes, a Computer Science student at The University of Texas at Austin. With internships at Salesforce and Microsoft, I've honed my skills in software engineering, enhancing platform quality and creating customer-centric solutions. During my time at Microsoft, I got introduced to the world of SaaS B2B solutions and continued to develop my knowledge and interest in this area during my internship at Salesforce this past summer. Beyond my studies, I'm dedicated to promoting diversity in tech as a member of the Hispanic Association of Computer Scientists and a UT Computer Science Ambassador. Additionally, I'm fluent in Spanish and have a strong passion for cybersecurity and UI/UX design.</p>
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
              <img className='left_img' src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <Features/>
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