import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.png';
import './about.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year in Project Team</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
          I am a Computer Science student at the University of Michigan. 
                        I have a passion for learning and developing new skills. 
                        I am a hardworking and dedicated individual who is always looking for new opportunities to learn and grow. 
                        I am currently looking for a co-op or intern position for the summer and/or fall of 2023.
          </p>
          {/* <a href="#contact" className="btn btn-primary">Let's Talk</a> */}
        </div>
      </div>
    </section>
  )
}

export default Intro