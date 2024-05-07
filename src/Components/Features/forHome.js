import React from "react"
import "./forHome.css"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h4>Features</h4>
            <h1>Technologies</h1>
          </div>
          <div className='content icon-grid'>
            <div className='box btn_shadow'>
              <div className="center">
                <img className="icons" src='https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png' alt='' />
              </div>
              <h2>Python</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className="icons" src='https://cdn-icons-png.flaticon.com/512/226/226777.png' alt='' />
              </div>
              <h2>Java</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className="icons" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='' />
              </div>
              <h2>React.js</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className='icons' src='https://www.freepnglogos.com/uploads/javascript/logo-html-5-css-javascript-source-code-for-the-taking-23.png' alt='' />
              </div>
              <h2>HTML, CSS, &amp; JavaScript </h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className='icons' src='https://www.svgrepo.com/show/353733/figma.svg' alt='' />
              </div>
              <h2>Figma</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className='icons' src='https://www.rstudio.com/wp-content/uploads/2018/10/RStudio-Logo-Flat.png' alt='' />
              </div>
              <h2>R Programming Language</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className="icons" src='https://logos-world.net/wp-content/uploads/2021/10/Tableau-Emblem.png' alt='' />
              </div>
              <h2>Tableau</h2>
              <a href=''>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <div className="center">
                <img className='icons' src='https://cdn.icon-icons.com/icons2/1735/PNG/512/wireshark_113218.png' alt='' />
              </div>
              <h2>Wireshark</h2>
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
