import React from 'react'
import {TfiBell} from 'react-icons/tfi'
import Profile from '../assets/Profileavtar.png';

function Navbar() {
  return (
    <div className='flex justify-between pt-6'>
        <div className='flex w-8/12'> 
            <input
                type='text'
                className='w-full border-slate-200 text-xs rounded-md'
                placeholder='search'
            />
        </div>

        <div className='flex gap-x-4 items-center'>
            <div className='relative rounded-md p-5 bg-white'>
                <TfiBell/>
                <div className='absolute -top-2 left-10 p-2 bg-yellow-200 rounded-full'></div>
            </div>
            <img src={Profile} alt="" />
        </div>
    </div>
  )
}

export default Navbar