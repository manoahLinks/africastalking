import React from 'react'

function Signin() {
  return (
    <div className='w-full md:w-4/12 m-auto grid grid-cols-1 p-5 bg-[#FAFAf6] rounded-md gap-y-4'>
        <h4 className='text-center font-bold'>Sign in</h4>
        <div className='flex flex-col '>
            <label>Branch Code</label>
            <input
                type='text'
                className='w-full border-slate-200 text-xs'
            />
        </div>

        <div className='flex flex-col '>
            <label>User ID</label>
            <input
                type='text'
                className='w-full border-slate-200 text-xs'
            />
        </div>

        <button className=' bg-[#013CC6] p-2 rounded-md bg-[#] text-white'>Sign  in</button>
    </div>
  )
}

export default Signin