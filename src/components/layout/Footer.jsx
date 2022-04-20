import React from 'react'
import {FaGithub} from 'react-icons/fa'

function Footer() {

  const footerYear= new Date().getFullYear();
  return (
    <footer className='footer p-10 bg-info-content text-white footer-center '>
      <div>
      <FaGithub />
      <p>Copyright &copy; {footerYear} All rights reserved </p>
      </div>
    </footer>
  )
}

export default Footer