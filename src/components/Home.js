import React from 'react';
import dotted from '../images/dotted.png';
import colors from '../images/colors.png';
import profil from '../images/profil.png';
const Data = () => {
  return (
<section id="app">
    <section className="banner">
        <header className="header">
          <a href="#" className="logo">
            <span>My</span>Portfolio_
          </a>
          <ul>
            <li><a id="one" href="#Home">Home</a></li>
            <li><a id="two" href="#Portfolio">Portfolio</a></li>
            <li><a id="three" href="#About">About</a></li>
            <li><a id="four" href="#ContactMe">Contact</a></li>
          </ul>
        </header>
        <section>
          <div className="content">
            <h3>Hey_</h3>
            <h2>I'm <span id="text">Vinay Bhaskar</span></h2>
            <p>
              Hello there! 👋 I'm Vinay, a passionate and dynamic individual diving headfirst into the world
              of web development.<br></br>As a recent graduate and aspiring full-stack developer, I bring fresh
              perspectives and a hunger for learning to every project.
            </p>
          </div>
        </section>
        <img src={dotted} id='dotted' alt="logo"/>
        <img src={colors} id='color' alt="logo"/>
        <img src={profil} id='profil' alt="logo"/>
      </section>
</section>
  )
}

export default Data;
