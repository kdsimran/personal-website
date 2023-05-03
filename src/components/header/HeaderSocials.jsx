import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/simran-dhaliwal-660390181/" target = "_blank"><BsLinkedin/></a>
        <a href="https://github.com/kdsimran" target = "_blank"><FaGithub/></a>

    </div>
  )
}

export default HeaderSocials