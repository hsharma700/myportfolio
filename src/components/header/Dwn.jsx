import React from 'react'
import {motion} from "framer-motion";

function Dwn() {
  return (
    <div className="dwn">
        <motion.a href="https://www.canva.com/design/DAFS04hLM3M/view" className='btn'
        initial={{opacity:0, x:-100}}
        animate={{opacity:1, x:0}}
        exit={{}}
        transition={{duration:1, delay:1.5}}
        
        >View CV</motion.a>
        <motion.a href="#contact" className='btn btn-primary'
        initial={{opacity:0, x:100}}
        animate={{opacity:1, x:0}}
        exit={{}}
        transition={{duration:1, delay:1.5}}
        
        >Contact</motion.a>
    </div>
  )
}

export default Dwn