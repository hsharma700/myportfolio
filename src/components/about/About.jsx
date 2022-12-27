import React, { useRef } from 'react'
import "./about.scss";
// import ME from "../../assets/myImage.png"
import {IoCheckmarkDoneSharp} from 'react-icons/io5'
import {motion, useInView} from "framer-motion";
function About() {
  const ref = useRef(null)
  const isInView = useInView(ref,{once:true})

  return (
    <section id='about' ref={ref}>
            <motion.h5
            animate={{opacity:isInView?1:0,x:isInView?0:-500}}
            exit={{}}
            transition={{duration:isInView?1.5:0}}
            >Master In Computer Application</motion.h5>

      <motion.h2
      animate={{opacity:isInView?1:0, x:isInView?0:500}}
      transition={{duration:isInView?1.5:0}}
      >About Me</motion.h2>

      <div className="container about_container" >
{/*      
      <div className="about_me">  
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div> */}
  
       
        <div className="my_details">
            <motion.div className="experience_frontend"
            animate={{opacity:isInView?1:0, scale:isInView?1:1.4}}
            transition={{duration:isInView?1:0,delay:isInView?1:0}}
           
            >
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
            </motion.div>
          </div>
      </div>
    </section>
  )
}

export default About