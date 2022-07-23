import React, { useState } from 'react'
import "./sidebar.css"
import {VscFiles} from "react-icons/vsc"
import {VscSearch} from "react-icons/vsc"
import {VscSourceControl} from "react-icons/vsc"
import {VscDebugAltSmall} from "react-icons/vsc"
import {VscExtensions} from "react-icons/vsc"
import {VscRemoteExplorer} from "react-icons/vsc"
import {VscLiveShare} from "react-icons/vsc"
import {HiOutlineUserCircle} from "react-icons/hi"
import {VscSettingsGear} from "react-icons/vsc"
import {FiMoreHorizontal} from "react-icons/fi"
import {MdOutlineExpandMore} from "react-icons/md"
import {IoIosArrowForward} from "react-icons/io"
import {BsFolderFill} from "react-icons/bs"
import {SiJavascript} from "react-icons/si"
import {FaCss3} from "react-icons/fa"
import {IoLogoNodejs} from "react-icons/io"
import {FaGitAlt} from "react-icons/fa"
import {AiFillExclamationCircle} from "react-icons/ai"

const Sidebar = () => {

  const [portExpand, setPortExpand] = useState(true);
  const [srcExpand, setSrcExpand] = useState(true);
  const [componentExpand, setComponentExpand] = useState(true);
  return (
    <div className='sidebar'>
        {/* sidebar nav */}
        <div className='sidebar__nav'>
            <VscFiles className='sidenavicon'/>
            <VscSearch className='sidenavicon'/>
            <VscSourceControl className='sidenavicon'/>
            <VscDebugAltSmall className='sidenavicon'/>
            <VscExtensions className='sidenavicon'/>
            <VscRemoteExplorer className='sidenavicon'/>
            <VscLiveShare className='sidenavicon'/>

            <div className='sidebar__nav__bottom'>
                <HiOutlineUserCircle className='sidenavicon'/>
                <VscSettingsGear className='sidenavicon'/>
            </div>
        </div>

        {/* sidebar explorer */}
        <div className="sidebar__explorer">
            <div className='explorer__txt'><p>Explorer</p><FiMoreHorizontal/></div>
            <div onClick={() => setPortExpand(portExpand===false? (true):(false))} className='sidebar__expansion'>{portExpand? (<MdOutlineExpandMore/>):(<IoIosArrowForward/>)}<p>portfolio</p></div>
            
            {portExpand && <div className='explorer_portfolio'>
            <div className='sidebar__expansion'><IoIosArrowForward/><BsFolderFill color='rgb(93, 204, 93)'/><p>node_module</p></div>
            <div className='sidebar__expansion'><IoIosArrowForward/><BsFolderFill color='rgb(13, 122, 212)'/><p>public</p></div>
            <div onClick={() => setSrcExpand(srcExpand===true? (false):(true))} className='sidebar__expansion'>{srcExpand? (<MdOutlineExpandMore/>):(<IoIosArrowForward/>)}<BsFolderFill color='rgb(11, 141, 11)'/><p>src</p></div>

            {srcExpand && <div className='explorer_src'>
            <div className='sidebar__expansion'><IoIosArrowForward/><BsFolderFill color='rgb(218, 167, 0)'/><p>assets</p></div>
            <div onClick={() => (setComponentExpand(componentExpand===true? (false):(true)))} className='sidebar__expansion'>{componentExpand? (<MdOutlineExpandMore/>):(<IoIosArrowForward/>)}<BsFolderFill color='rgb(218, 167, 0)'/><p>components</p></div>
            
            {componentExpand && <div className='explorer_components'>
            <div className='sidebar__expansion'><FaCss3 color='rgb(13, 122, 212)'/><p>App.css</p></div>
            <div className='sidebar__expansion'><SiJavascript color='rgb(218, 167, 0)'/><p>App.js</p></div>
            <div className='sidebar__expansion'><FaCss3 color='rgb(13, 122, 212)'/><p>index.css</p></div>
            <div className='sidebar__expansion'><SiJavascript color='rgb(218, 167, 0)'/><p>index.js</p></div>
            </div>}
            </div>}
            <div className='sidebar__expansion'><FaGitAlt color='rgb(160, 29, 29)'/><p>.gitignore</p></div>
            <div className='sidebar__expansion'><IoLogoNodejs color='rgb(93, 204, 93)'/><p>pakage-lock.json</p></div>
            <div className='sidebar__expansion'><IoLogoNodejs color='rgb(93, 204, 93)'/><p>pakage.json</p></div>
            <div className='sidebar__expansion'><AiFillExclamationCircle color='rgb(0, 176, 235)'/><p>README.md</p></div>
            </div>}

        </div>
    </div>
  )
}

export default Sidebar