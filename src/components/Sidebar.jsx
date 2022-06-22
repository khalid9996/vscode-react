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
        <div className="sidebar__explorer"></div>
    </div>
  )
}

export default Sidebar