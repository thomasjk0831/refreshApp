import React from 'react'
import Wrapper from '../assets/wrappers/SmallSidebar'
import { useDashboardContext } from '../pages/DashboardLayout'
import { FaTimes } from 'react-icons/fa'
import Logo from './Logo'
import links from '../utils/links'
import { NavLink } from 'react-router-dom'

const SmallSidebar = () => {
  const data = useDashboardContext()
  const { showSidebar, toggleSidebar } = useDashboardContext()
  return (
    <Wrapper>
      <div className={showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"} >
        <div className="content">
          <button type ='button' className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map(({ text, path, icon})=> 
              <NavLink to ={path} key={text} className="nav-link" onClick={toggleSidebar} end>
                <span className="icon">
                  {icon}
                </span>
                {text}
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default SmallSidebar