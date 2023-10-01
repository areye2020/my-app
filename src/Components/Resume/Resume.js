import React from "react"
import "./Resume.css"

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
                <h4>2018-2022</h4>
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
                        <img className="edu_icon" src="https://www.tacc.utexas.edu/documents/1084364/1085221/utaustin-seal.png/" alt=''></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Enrolled in an integrated honors degree program between the University of Texas Computer Science Department and the Canfield Business Honors Program: <a href="https://csb.utexas.edu/">Texas CSB</a></p>
                    <p>•        As a UTCS ambassador, I conduct departmental tours and meet with prospective students in coffee chats</p>
                    <p>•        Hispanic Association of Computer Sciencetists Junior Officer and cadet in the Army ROTC program</p>
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
                        <img className="edu_icon" src="https://media.bizj.us/view/img/11799957/code2college-1-01-copy*1200xx800-450-0-15.png" alt=''></img>
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
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Codepath</h2>
                      <span>2022</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="cp" alt='' src="https://info.codepath.org/hs-fs/hubfs/logo_codepath_darkandgreen.png?width=3447&name=logo_codepath_darkandgreen.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Completed the Intermediate Software Engineering python curriculum</p>
                    <p>•        Refresher on complex data structures, time and space complexity, sorting, recursion, and object oriented design</p>
                  </ul>
                </div>
                
              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2019-2022</h4>
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
                      <h2>Microsoft SWE Intern</h2>
                      <span>2022</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="cirrus" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        A returning intern to the Dynamics365 space</p>
                    <p>•        Designed and developed an application that customers could use to customize different attributes of their Live Chat Widget such as color and font to match existing styles on their webpage</p>
                    <p>•        Implemented a new feature for customers to preview their customizations live before deployment</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Microsoft Explore Intern</h2>
                      <span>2021</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                      <img className="cirrus" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Designed and developed a custom web application for the Customer Care Application in the Dynamics 365 Customer Service space</p>
                    <p>•        Combined previous web development knowledge while learning the React JavaScript library</p>
                    <p>•        Introduced to the wireframe design tool Figma</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Cirrus Logic SWE Intern</h2>
                      <span>2020</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                        <img className="cirrus" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cirrus_Logic_logo.svg/2560px-Cirrus_Logic_logo.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Created a python script using the BitBucket API to locate stale or merged branches in Git to improve team efficiency</p>
                    <p>•        Continued to expand my JavaFX and FXML skills to develop the UI and UX for panel development</p>
                  </ul>
                </div>
                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>Cirrus Logic SWE Intern</h2>
                      <span>2019</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>
                      <img className="cirrus" alt='' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Cirrus_Logic_logo.svg/2560px-Cirrus_Logic_logo.svg.png"></img>
                      </button>
                    </div>
                  </div>
                  <hr />
                  <ul>
                    <p>•        Developed customer facing "panels" using  JavaFX, FXML and Gradle</p>
                    <p>•        Learned software engineering practices such as SCRUM and developing my source control knowledge/skills in Git</p>
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