import React from 'react'
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

const Sidebar = () => {
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
            <p>>portfolio</p>
            <p>node_module</p>
            <p>public</p>
            <p>src</p>
            <p>assets</p>
            <p>>components</p>
            <p>App.css</p>
            <p>App.jsx</p>
            <p>index.css</p>
            <p>index.js</p>
            

        </div>
    </div>
  )
}

export default Sidebar