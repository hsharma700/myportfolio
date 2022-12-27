import React from 'react'
import "./footer.scss";
import {ImGithub, ImLinkedin} from "react-icons/im"
function Footer() {
  return (
    <footer>

      <ul className='peralinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#websites">Websites</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="Github"><ImGithub/></a>
        <a href="Linkedin"><ImLinkedin/></a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Himanshu Sharma. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer