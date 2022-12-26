import React from 'react'
import "./about.scss";
import ME from "../../assets/myImage.png"
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
function About() {
  return (
    <section id='about'>
            <h5>Master In Computer Application</h5>

      <h2>About Me</h2>

      <div className="container about_container">
     
      <div className="about_me">  
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>
  
       
        <div className="my_details">
            <div className="experience_frontend">
              <h3>FrontEnd Development</h3>
              <div className="experience_content">
                <article className='experience_details'>
                  <IoCheckmarkDoneSharp/>
                  <div>
                  <h4>HTML</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience_details'>
                  <IoCheckmarkDoneSharp/>
                  
                  <div>
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>

                  </div>
                </article>
                <article className='experience_details'>
                  <IoCheckmarkDoneSharp/>
                  <div>
                  <h4>Javascript</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
                <article className='experience_details'>
                  <IoCheckmarkDoneSharp/>
                  <div>
                  <h4>React</h4>
                  <small className='text-light'>Intermediate</small>
                  </div>
                  
                </article>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About