import React, { useState } from 'react'
import "./navbar.scss";
import {FaHome} from 'react-icons/fa'
import {ImUser} from 'react-icons/im'
import {AiFillAppstore} from 'react-icons/ai'
import {RiMessage3Fill} from 'react-icons/ri'

function Navbar() {

  const [activeNav, setActiveNav] = useState('#home')


  return (
    <nav>
      <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav==='#home'?'active':''}><FaHome/></a>
      <a href="#about" onClick={()=>setActiveNav("#about")} className={activeNav==='#about'?'active':''}><ImUser/></a>
      <a href="#websites" onClick={()=>setActiveNav("#websites")} className={activeNav==='#websites'?'active':''}><AiFillAppstore/></a>
      <a href="#contact" onClick={()=>setActiveNav("#contact")}className={activeNav==='#contact'?'active':''}><RiMessage3Fill/></a>
    </nav>
  )
}

export default Navbar