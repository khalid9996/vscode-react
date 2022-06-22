import React from 'react'
import "./header.css"
import icon from "../assets/vscode.png"
import {MdMinimize} from "react-icons/md"
import {VscChromeMaximize} from "react-icons/vsc"
import {IoMdClose} from "react-icons/io"
const Header = () => {
  return (
    <header>
      <img src={icon} alt="" />
      <p>File</p>
      <p>Edit</p>
      <p>Selection</p>
      <p>View</p>
      <p>Go</p>
      <p>Run</p>
      <p>Terminal</p>
      <p>Help</p>
      <div className='controls'>
      <MdMinimize className='hover'/>
      <VscChromeMaximize className='hover'/>
      <IoMdClose className='hover'/>
      </div>
    </header>
  )
}

export default Header