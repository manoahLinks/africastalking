import React from 'react'

function PatientInformation() {
  return (
    <div className='flex flex-col gap-y-4'>
        <h4>Patient's Information</h4>
        <div className='grid grid-cols-4 gap-x-4'>
            <div className='flex flex-col gap-y-2'>
                <label className='text-[12px]'>Patient name</label>
                <input 
                    type="text"
                    className='w-full border-slate-200 text-xs'
                    placeholder='enter customer name' 
                    name="" 
                    id="" 
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <label className='text-[12px]'>Card Number</label>
                <input 
                    type="number"
                    className='w-full text-xs border-slate-200'
                    placeholder='enter invoice ID' 
                    name="" 
                    id="" 
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <label className='text-[12px]'>Start Date</label>
                <input 
                    type="date"
                    className='text-xs border-slate-200'
                 />
            </div>

            <div className='flex flex-col gap-y-2'>
                <label className='text-[12px]'>End Date</label>
                <input 
                    type="date"
                    className='text-xs border-slate-200'
                 />
            </div>
        </div>
    </div>
  )
}

export default PatientInformation