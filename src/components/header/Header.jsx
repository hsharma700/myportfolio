import React from "react";
import "./header.scss";
import Dwn from "./Dwn";
import ME from '../../assets/myImage.png';
import {motion} from "framer-motion"
function Header() {
  return (
    <motion.header id="home"
    
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:0.2}}
    >
      <div className="container header_container">
        <motion.h5
        initial={{y:-100, opacity:0}}
        animate={{y:0, opacity:1}}
        exit={{y:0}}
        transition={{duration:1}}
        >Hello I'm</motion.h5>
        <motion.h1
        initial={{opacity:0, scale:4}}
        animate={{opacity:1, scale:1}}
        exit={{}}
        transition={{duration:1,delay:0.5}}
        >Himanshu Sharma</motion.h1>
        <motion.h5 className="text-light"
        initial={{opacity:0, scale:0.1}}
        animate={{opacity:1, scale:1}}
        exit={{}}
        transition={{duration:1,delay:1}}
        
        >Front-End Developer</motion.h5>
        <Dwn />
        <motion.div className="me"
        initial={{opacity:0}}
        animate={{opacity:1}}
        exit={{}}
        transition={{duration:1,delay:2.5}}
        >
          <img src={ME} alt="me" />
        </motion.div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </motion.header>
  );
}

export default Header;
