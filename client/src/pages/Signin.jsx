import React from 'react'
import {TfiIdBadge, TfiLock} from 'react-icons/tfi'

function Signin() {
  return (
    <div className='w-8/12 shadow-lg md:w-4/12 m-auto grid grid-cols-1 p-5 bg-[#FAFAf6] bg-opacity-70 rounded-md gap-y-4'>
        <h4 className='text-center font-semibold text-[#013CC6]'>Sign in</h4>
        <div className='flex flex-col gap-y-2'>
            <small>Branch Code</small>
            <div className='flex relative items-center'>
                <TfiLock className='ml-2 absolute'/>
                <input
                    type='text'
                    className='px-8 placeholder-slate-300 rounded-md w-full border-slate-200 text-xs'
                    placeholder=''
                />
            </div>
        </div>

        <div className='flex flex-col gap-y-2'>
            <small>User ID</small>
            <div className='flex relative items-center'>
                <TfiIdBadge className='ml-2 absolute'/>
                <input
                    type='text'
                    className='rounded-md placeholder-slate-200 px-8 w-full border-slate-200 text-xs'
                    placeholder='eg. 1234'
                />
            </div>
            
        </div>

        <button className='bg-opacity-80 mt-5 bg-[#013CC6] p-2 rounded-md bg-[#] text-white'>
            <small>Sign in</small>
        </button>
    </div>
  )
}

export default Signin