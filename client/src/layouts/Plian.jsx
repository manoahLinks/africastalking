import React from 'react'
import { Outlet } from 'react-router-dom'

function Plian() {
  return (
    <div className='grid grid-cols-1 h-screen w-full'>
        <Outlet/>
    </div>
  )
}

export default Plian