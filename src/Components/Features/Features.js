import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>Technologies</h1>
          </div>
          <div className='content grid'>
            <div className='box btn_shadow'>
              <img className="icons" src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' alt='' />
              <h2>Python</h2>
              <p>While I was a student in Code2College, I learned python and used it during on of my summers at Cirrus Logic. This summer, I took Codepath's Intermediate Software Engineering course on Python.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className="icons" src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='' />
              <h2>Java</h2>
              <p>I first worked with Java while interning at Cirrus Logic. I recived a more formal education on Java and object-oriented programming during my data structures course and worked on projects such as tetris, image manipulator, and web crawler.</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className="icons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
              <h2>React.js</h2>
              <p>I was introduced to React during my first internship at Micrsoft. I have developed three web application projects using React to create a more interactive UI (inlucding the one your on right now).</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://www.svgrepo.com/show/353733/figma.svg' alt='' />
              <h2>Figma</h2>
              <p>Talk about Figma using figma for wireframe design</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://rochester.kidsoutandabout.com/sites/default/files/html_css_javascript.jpeg' alt='' />
              <h2>HTML and CSS</h2>
              <p>Talk about HTML and CSS experiance</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' alt='' />
              <h2>GIT</h2>
              <p>Talk about using Git for source control</p>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            {/* {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })} */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features