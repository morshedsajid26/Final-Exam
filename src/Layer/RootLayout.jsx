import React from 'react'
import SideBar from '../Component/SideBar'
import { Outlet } from 'react-router-dom'

import vector2 from '/Vector2.png'


const RootLayout = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-[#2D3142] to-[#4F5D75] py-7 text-white'>
        <div className='w-[1224px] h-full bg-[#2D3142] mx-auto flex rounded-[18px] overflow-hidden'>
            <SideBar/>

            <main className=' w-full h-full'>
                <div className='flex justify-between bg-gradient-to-r from-[#212430] to-[#141722] py-[26px] px-7'>
                    <h2>Performance Comercial</h2>
                    <img  src={vector2} alt="" />
                </div>

                <div className='bg- h-full '>
                    <Outlet/>
                </div>

            </main>

        </div>

    </div>
  )
}

export default RootLayout