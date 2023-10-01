import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./TestimonialApi"

const Testimonial = () => {
  const [data, setdata] = useState(TestimonialApi)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = data.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, data])

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1)
    }, 3000)
    return () => clearInterval(slider)
  }, [index])

  return (
    <>
      <section className='Testimonial' id='clients'>
        <div className='container'>
          <div className='heading text-center'>
            <h4>SEE MY PAST PROJECTS</h4>
            <h1>Previous Work</h1>
          </div>
          <div className='slide'>
            {/*{TestimonialApi.map((val, index) => {
              return <Slide key={index} image={val.image} design={val.design} name={val.name} offcer={val.offcer} post={val.post} date={val.date} desc={val.desc} />
            })}*/}

            {data.map((value, valueIndex) => {
              return <Slide key={value.id} {...value} valueIndex={valueIndex} index={index} />
            })}

            <div className='slide_button'>
              <button className='btn_shadow prev_btn' onClick={() => setIndex(index - 1)}>
                <img className='prev_icon' src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"></img>
              </button>
              <button className='btn_shadow next_btn' onClick={() => setIndex(index + 1)}>
                <img className="next_icon" src="https://cdn3.iconfinder.com/data/icons/faticons/32/arrow-right-01-512.png"></img>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial