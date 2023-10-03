import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>EXPERIENCE</h4>
            <h1>My Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2018-2023</h4>
                <h1>Education</h1>
              </div>

              <div className='content'>
                {/* {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })} */}
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>University of Texas at Austin</h2>
                      <span>(2020 - 2024)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="edu_icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/University_of_Texas_at_Austin_logo.svg/2560px-University_of_Texas_at_Austin_logo.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Currently pursuing a degree in Computer Science in UT's rigorous and cutting-edge computer science program.</p>
                    <p>•        Proudly serve as a Department of Computer Science Ambassador at [University Name], dedicating my time to provide tours and engage in coffee chats with prospective students, offering valuable insights into the program and fostering a sense of community.</p>
                    <p>•        Actively involved in the Hispanic Association of Computer Scientists (HACS) at [University Name], where I collaborate with fellow members to promote diversity and inclusivity in the tech field while participating in various initiatives and events.</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <a href="https://code2college.org/">
                        <h2>Code2College</h2>
                      </a>
                      <span>(2018-2020)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="edu_icon" src="https://media.bizj.us/view/img/11799957/code2college-1-01-copy*1200xx800-450-0-15.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Introduction to career in technology<a href="https://code2college.org/"> by this amazing company</a></p>
                    <p>•        Participated in professional development workshops, case competitions and STEM exploratory projects</p>
                    <p>•        Completed a full-stack web application curriculum that incorporated front-end, back-end and database technologies</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2019-2023</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {/* {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })} */}
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Texas Army National Guard</h2>
                      <span>(2020 - 2023)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="cirrus" src="https://www.nicepng.com/png/detail/211-2118812_us-army-us-army-png-logo.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Diligently pursued efforts to locate and neutralize cyber threats by linking historical digital footprints to cyber signatures</p>
                    <p>•        Specialized in Network Analysis gaining proficiency in industry standard tools such as Nmap and Wireshark</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Salesforce SWE Intern</h2>
                      <span>(2023)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="cirrus" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Elevated platform-wide quality while working on Quality Maturity Model enhancements</p>
                    <p>•        Established accountability measures by integrating a Tableau dashboard</p>
                    <p>•        Revamped user experience with features like data sorting and multipage navigation</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Microsoft SWE Intern</h2>
                      <span>(2022, 2021)</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                      <img className="cirrus" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Engineered a customer-facing application allowing customization of Live Chat Widget attributes, enhancing user interaction</p>
                    <p>•        Successfully implemented a real-time customization preview, enabling customers to assess modifications prior to deployment</p>
                    <p>•        Designed and developed a Custom Web Application tailored to the Customer Service Hub in Dynamics 365</p>
                  </ul>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume