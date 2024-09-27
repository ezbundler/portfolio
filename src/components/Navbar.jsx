import React from 'react'
import logo from '../assets/raviKumarLogo.webp'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Navbar = () => {
  return (
   <nav className='flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      <a href='/' className='text-lg font-bold text-white'>
      <img src={logo} alt="logo" srcset=""className='mx-2' width={50}height={33} />
      </a>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/akash-chaudhary-1ba0121a1" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
        <FaLinkedin/>
      </a>
      <a href="https://github.com/ezbundler" target='_blank' rel='noopener noreferrer' aria-label='Github'>
        <FaGithub/>
      </a>
      <a href="https://www.instagram.com/doomed_ak/" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
        <FaInstagram/>
      </a>
      <a href="" target='_blank' rel='noopener noreferrer' aria-label='LinkedIn'>
        <FaLinkedin/>
      </a>
    </div>
   </nav>
  )
}

export default Navbar