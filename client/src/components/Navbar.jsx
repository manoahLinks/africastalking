import React from 'react'
import {TfiBell, TfiSearch} from 'react-icons/tfi'
import Profile from '../assets/Profileavtar.png';

function Navbar() {
  return (
    <div className='flex justify-between pt-10'>
        <div className='relative flex w-8/12 items-center'> 
            <TfiSearch className='absolute ml-2 '/>
            <input
                type='text'
                className='px-8 w-full text-xs placeholder-slate-300 border-slate-200  rounded-md'
                placeholder='search'
            />
        </div>

        <div className='flex gap-x-8 items-center'>
            <div className='relative rounded-md bg-white'>
                <TfiBell/>
                <div className='absolute -top-2 left-4 p-1 bg-yellow-200 rounded-full'></div>
            </div>
            <img className='h-10 w-10' src={Profile} alt="" />
        </div>
    </div>
  )
}

export default Navbar