import React from "react";
import "./header.scss";
import Dwn from "./Dwn";
import ME from '../../assets/myImage.png'
function Header() {
  return (
    <header id="home">
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Himanshu Sharma</h1>
        <h5 className="text-light">Front-End Developer</h5>
        <Dwn />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  );
}

export default Header;
