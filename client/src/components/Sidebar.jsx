import React from 'react'
import {TfiLayoutGrid2, TfiSettings, TfiSupport, TfiNotepad, TfiEmail, TfiWallet} from 'react-icons/tfi'
import Logo from './Logo'

// rrd imports
import { Link } from 'react-router-dom'

function Sidebar() {

    const headers = [
        {
            title: 'Dashboard',
            icon: <TfiLayoutGrid2/>,
            path: ''
        },

        {
            title: 'Lab Test',
            icon: <TfiSupport/>,
            path: ''
        },

        {
            title: 'Appointment',
            icon: <TfiNotepad/>,
            path: ''
        },

        {
            title: 'Message',
            icon: <TfiEmail/>,
            path: ''
        },

        {
            title: 'Payment',
            icon: <TfiWallet/>,
            path: ''
        },

        {
            title: 'Settings',
            icon: <TfiSettings/>,
            path: ''
        }
    ]

  return (
    <div className='flex flex-col items-center pt-6 gap-y-12'>
        <Logo/>
        
        <div className='flex flex-col gap-y-8'>
            {headers && headers.map((header)=>(
                <Link to={header.path} className='flex gap-x-6'>
                    {header.icon}
                    <small>{header.title}</small>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Sidebar