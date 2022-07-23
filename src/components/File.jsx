import React, { useState } from 'react'
import './file.css'

const File = () => {
  const [activeFile, setActiveFile] = useState("js");
  return (
    <nav className='nav'>
    <div className='file__div'>
    <p className={activeFile==="js"? ('active__file'):('')} onClick={()=> (setActiveFile("js"))}>JavaScript.js</p>
    <p className={activeFile==="css"? ('active__file'):('')} onClick={()=> (setActiveFile("css"))}>CSS.css</p>
    <p className={activeFile==="py"? ('active__file'):('')} onClick={()=> (setActiveFile("py"))}>Python.py</p>
    </div>
    </nav>
  )
}

export default File