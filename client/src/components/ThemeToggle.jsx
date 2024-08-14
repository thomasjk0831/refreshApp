import React from 'react'
import { useDashboardContext } from '../pages/DashboardLayout'
import Wrapper from '../assets/wrappers/ThemeToggle'
import { BsFillSunFill, BsFillMoonFill} from 'react-icons/bs'

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme} = useDashboardContext()
  return (
    <Wrapper onClick={toggleDarkTheme}>
    {isDarkTheme ? <BsFillSunFill className='toggle-icon' />
    : <BsFillMoonFill />}
    </Wrapper>
  )
}

export default ThemeToggle