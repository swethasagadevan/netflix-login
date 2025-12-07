import React from 'react'
import icon from "../assets/netflix.png"

const Header = () => {
  return (
    <div className='bg-black flex justify-center'>
        <img src={icon} alt="Netflix icon" width="7%"/>
    </div>
  )
}

export default Header;