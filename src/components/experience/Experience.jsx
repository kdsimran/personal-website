import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import {TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandReact} from 'react-icons/tb';
import {TbBrandCpp, TbBrandPython, TbBrandMysql, TbSquareLetterR, TbBrandGit} from 'react-icons/tb';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <TbBrandHtml5 className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <TbBrandCss3 className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <TbBrandReact className="experience__details-icon" />
              <h4>React</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <TbBrandCpp className="experience__details-icon" />
              <h4>C++ & C</h4>
            </article>
            <article className="experience__details">
              <TbBrandPython className="experience__details-icon" />
              <h4>Python & Vpython</h4>
            </article>
            <article className="experience__details">
              <TbBrandMysql className="experience__details-icon" />
              <h4>MySql & Query Optimization</h4>
            </article>
            <article className="experience__details">
              <TbSquareLetterR className="experience__details-icon" />
              <h4>R</h4>
            </article>
            <article className="experience__details">
              <TbBrandGit className="experience__details-icon" />
              <h4>Git/GitHub</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience