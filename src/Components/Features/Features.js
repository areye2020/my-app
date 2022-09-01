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
              <ul>
                    <p>•        Learned through the Code2College curriculum during my Junior year of high school</p>
                    <p>•        Developed a python script using BitBucket API while at Cirrus Logic</p>
                    <p>•        Completed Codepath's Intermediate Software Engineering course on Python</p>
              </ul>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className="icons" src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='' />
              <h2>Java</h2>
              <ul>
                    <p>•        Learned while interning at Cirrus Logic</p>
                    <p>•        Formal education on Java and object-oriented programming during my data structures course</p>
                    <p>•        Developed projects such as tetris, image manipulator, and web crawler</p>
              </ul>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className="icons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
              <h2>React.js</h2>
              <ul>
                    <p>•        Introduced during my Summer 2021 internship at Microsoft</p>
                    <p>•        Developed three web application projects using <strong>HTML, CSS, and React</strong> to create a more interactive user interface and experience</p>
              </ul>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://www.svgrepo.com/show/353733/figma.svg' alt='' />
              <h2>Figma</h2>
              <ul>
                    <p>•        Two years of experiance working with the user interface design app</p>
                    <p>•        Mainly use to design and create wireframes for web applications</p>
              </ul>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://www.rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-Flat.png' alt='' />
              <h2>R Programming Language</h2>
              <ul>
                    <p>•        Learned while taking a Data Science course in Fall 2021</p>
                    <p>•        Completed projects on regression modeling, casual inference, and predictive modeling</p>
              </ul>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img className='icons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg/1200px-CSS3_and_HTML5_logos_and_wordmarks.svg.png' alt='' />
              <h2>HTML, CSS, &amp; JavaScript </h2>
              <ul>
                    <p>•        Started web development in 2018</p>
                    <a href='https://areye2020.pythonanywhere.com/'><p>•        Developed 5 web applications including my Code2College <u>capstone project to raise awareness about the Austin Homelessness crisis</u></p></a>
              </ul>
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