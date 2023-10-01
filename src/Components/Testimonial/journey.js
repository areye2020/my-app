import React, { useState, useEffect } from "react"
import "./Testimonial.css"
import Slide from "./Slide"
import TestimonialApi from "./JourneyApi"
import Card from "../Features/Card"
import Portfolio_data from "../Portfolio/Portfolio_data"
import pride from "../pic/salePride.jpeg"
import football from "../pic/football.png"
import ring from "../pic/ringDay.jpg"
import soccer from "../pic/soccerField.jpg"
import msft from "../pic/newMSFT.png"

const Journey = () => {
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
              <h4>HOW I GOT TO WHERE I AM TODAY</h4>
              <h1>My Journey</h1>
            </div>
            <div className="slide" style={{ textAlign: 'center' }}>
  <div className='right'>
    <div className='content box_shodow mtop'>
      <h1>{TestimonialApi[0].post}</h1>
      <h3>{TestimonialApi[0].date}</h3>
      <p>{TestimonialApi[0].desc}</p>
    </div>
  </div>
  <div className='left box_shodow'>
    <div className='img'>
      <img
        className="websiteImage"
        src={TestimonialApi[0].image}
        alt=''
        style={{ width: '100%', height: '80%' }}
      />
    </div>
    <span className='primary_color'>{TestimonialApi[0].design}</span>

    <div className='img' style={{ marginRight: '10px' }}>
      <img
        className="websiteImage"
        src={TestimonialApi[0].image2}
        alt=''
        style={{ width: '45%', height: '50%' }}
      />
    </div>
    <span className='primary_color'>{TestimonialApi[0].design2}</span>
  </div>
</div>

            <div className="slide" style={{ textAlign: 'center' }}>
              <div className='left box_shodow'>
                <div className='img'>
                  <img className="websiteImage" src={TestimonialApi[1].image} style={{ width: '55%', height: '60%' }} alt='' />
                </div>
                <div className='img'>
                  <img className="websiteImage" src={TestimonialApi[1].image2} style={{ width: '90%', height: '70%' }} alt='' />
                </div>
              </div>
              <div className='right'>
                <div className='content box_shodow mtop'>
                  <h1>{TestimonialApi[1].post}</h1>
                  <h3>{TestimonialApi[1].date}</h3>
                  <p>{TestimonialApi[1].desc}</p>
                </div>
              </div>
            </div>
            <div className="slide" style={{ textAlign: 'center' }}>
  <div className='right' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className='icon'>
      <div className='quote'>
        <i className='fal fa-quote-right'></i>
      </div>
    </div>
    <div className='content box_shodow mtop'>
      <h1 style={{ textAlign: 'center' }}>{TestimonialApi[2].post}</h1>
      <h3>{TestimonialApi[2].date}</h3>
      <p>{TestimonialApi[2].desc}</p>
    </div>
  </div>
  <div className='left box_shodow' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
    <div className='img'>
      <img
        className="websiteImage"
        src={msft}
        alt=''
        style={{ width: '85%', height: '85%' }}
      />
    </div>
    <span className='primary_color' style={{ textAlign: 'center' }}>{TestimonialApi[2].design}</span>
    <div className='img'>
      <img
        className="websiteImage"
        src={soccer}
        alt=''
        style={{ width: '85%', height: '80%' }}
      />
      <span className='primary_color' style={{ textAlign: 'center' }}>{TestimonialApi[2].design2}</span>
    </div>
  </div>
</div>


            <div className="slide" style={{ textAlign: 'center' }}>
  <div className='left box_shodow'>
    <div className='img' style={{ display: 'inline-block' }}>
      <img
        className="websiteImage"
        src={TestimonialApi[3].image}
        alt=''
        style={{ width: '75%', height: '55%' }}
      />
      <span className='primary_color'>{TestimonialApi[3].design}</span>
    </div>
    <div className='img' style={{ display: 'inline-block', marginLeft: '10px' }}>
      <img
        className="websiteImage"
        src={pride}
        style={{ width: '78%', height: '55%' }}
        alt=''
      />
      <span className='primary_color'>{TestimonialApi[3].design2}</span>
    </div>
  </div>
  <div className='right'>
    <div className='icon'>
      <div className='quote'>
        <i className='fal fa-quote-right'></i>
      </div>
    </div>
    <div className='content box_shodow mtop'>
      <h1>{TestimonialApi[3].post}</h1>
      <h3>{TestimonialApi[3].date}</h3>
      <p>{TestimonialApi[3].desc}</p>
    </div>
  </div>
</div>

<div className="slide" style={{ textAlign: 'center' }}>
  <div className='right' style={{ display: 'inline-block' }}>
    <div className='icon'>
      <div className='quote'>
        <i className='fal fa-quote-right'></i>
      </div>
    </div>
    <div className='content box_shodow mtop' style={{ display: 'inline-block' }}>
      <h1>{TestimonialApi[4].post}</h1>
      <h3>{TestimonialApi[4].date}</h3>
      <p>{TestimonialApi[4].desc}</p>
    </div>
  </div>
  <div className='left box_shodow'>
    <div className='img' style={{ display: 'inline-block' }}>
      <img
        className="websiteImage"
        src={football}
        style={{ width: '40%', height: '15%' }}
        alt=''
      />
    </div>
    <span className='primary_color'>{TestimonialApi[4].design}</span>
    <div className='img' style={{ display: 'inline-block', marginLeft: '10px' }}>
      <img
        className="websiteImage"
        src={ring}
        style={{ width: '75%', height: '20%' }}
        alt=''
      />
    </div>
    <span className='primary_color'>{TestimonialApi[4].design2}</span>
  </div>
</div>

            {/* <div className="slide">
              <div className='left box_shodow'>
                  <div className='img'>
                    <img className="websiteImage" src={TestimonialApi[5].image} alt='' />
                  </div>
                  <div className='details mtop'>
                    <span className='primary_color'>{TestimonialApi[5].design}</span>
                    <h2>{TestimonialApi[5].name}</h2>
                    <label>{TestimonialApi[5].offcer}</label>
                  </div>
                </div>

                <div className='right'>
                  <div className='icon'>
                    <div className='quote'>
                      <i class='fal fa-quote-right'></i>
                    </div>
                  </div>

                  <div className='content box_shodow mtop'>
                    <h1>{TestimonialApi[5].post}</h1>
                    <h3>{TestimonialApi[5].date}</h3>
                    <p>{TestimonialApi[5].desc}</p>
                  </div>
                </div>
            </div> */}
            
          </div>
        </section>
      </>
    )
  }

export default Journey