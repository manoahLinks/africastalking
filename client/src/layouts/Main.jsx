import React from 'react'
import { Navbar, PatientInformation, Sidebar } from '../components'
import { Outlet } from 'react-router-dom'

function Main() {
  
  return (
    <div className='text-slate-700 grid grid-cols-1 md:grid-cols-5 flex-1 h-screen'>
        <div className='flex flex-col items-center bg-white md:flex hidden'>
            <Sidebar/>
        </div>
        <div className="w-full overflow-y-auto flex flex-col flex-1 md:col-span-4 gap-y-10 bg-[#FAFAF6] bg-opacity-60 md:px-10 px-6">
            <Navbar/>
            <PatientInformation/>
            <Outlet/>
        </div>
    </div>
  )
}

export default Main