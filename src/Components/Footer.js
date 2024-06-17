import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Aman Singh Rajput</h4>
      <h4>Copyright &copy; 2024 ASR</h4>
      <div className='footerLinks'>
        <a href="https://github.com/amansingh4207" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/aman-s-5077a7218/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:amansingh4207@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/code_runner07/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer