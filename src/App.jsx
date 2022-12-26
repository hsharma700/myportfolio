import React from 'react'
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Websites from "./components/websites/Websites";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Cursor from './components/animated_cursor/Cursor';
function App() {
  return (
    <>
    <Header/>
    <Navbar/>
    <About/>
    <Websites/>
    <Contact/>
    <Footer/>
    <Cursor/>
    </>
  )
}

export default App