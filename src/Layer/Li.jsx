import React from 'react'
import { NavLink } from 'react-router-dom'

const Li = ({className,href,children,liText}) => {
  return (
    <li className=' cursor-pointer'>
        
        <NavLink className={`flex flex-col justify-between items-center ${className}` } to={href}
        end
        style={({ isActive }) => ({
          background: isActive ? "#2D3142" : "transparent",
          borderRadius: isActive? '30px 0 0 30px':'none',
          
          
          
          
        })}  >
        {children}
        {liText}
        
        </NavLink>
        
    </li>
  )
}

export default Li



             