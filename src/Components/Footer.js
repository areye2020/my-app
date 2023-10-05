import React from "react"
import logo1 from "./pic/headshot.png"
import "./footer.css"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img className="smallImage" style={{borderRadius: "45%",  height: "6%", width: "6%",}}src={logo1} alt='' />
          </div>
          <p>© ADRIANA REYES</p>
        </div>
      </footer>
    </>
  )
}

export default Footer