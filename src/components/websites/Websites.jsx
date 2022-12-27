import React from 'react'
import "./websites.scss";
import Website1 from "../../assets/portfolio1.png"
import Website2 from "../../assets/portfolio2.png"
import Website3 from "../../assets/portfolio3.png"
import Website4 from "../../assets/portfolio4.png"

const websitesData = [
{
  id:1,
  image:Website1,
  title:'Portfolio Website 1',
  github:"https://github.com/hsharma700/portfolio",
  live:'https://hsharma700.github.io/portfolio'
},
{
  id:2,
  image:Website2,
  title:'Netflix Clone 1',

  github:"https://github.com/hsharma700/netflix_clone1",
  live:'https://hsharma700.github.io/'
},
{
  id:3,
  image:Website3,
  title:'Sample Website 1',

  github:"https://github.com/hsharma700/website1",
  live:'https://hsharma700.github.io/website1/'
},
{
  id:4,
  image:Website4,
  title:'Sample Website 2',

  github:"https://github.com/hsharma700/cloudNow",
  live:'https://hsharma700.github.io/cloudNow/'
},
]


function Websites() {
  return (
    <section id='websites'>
      <h5>Projects</h5>
      <h2>Websites</h2>
      <div className="container portfolio_container">
       {websitesData.map((item)=>
        <article className="portfolio_item">
        <div className="portfolio_item-image">
          <img src={item.image} alt="" />
        </div>
          <h3>{item.title}</h3>
          <div className='portfolio_item-cta'>
          <a href={item.github} className='btn' target="_blank">Github</a>
          <a href={item.live} className='btn btn-primary' target="_blank">Live View</a>
          </div>
      </article>
       )}
        

      </div>
    </section>
  )
}

export default Websites