import React from 'react'

function PatientInformation() {
  return (
    <div className='flex flex-col gap-y-4'>
        <h4>Patient's Information</h4>
        <div className='grid grid-cols-4 gap-x-4'>
            <div className='flex flex-col gap-y-2'>
                <small>Patient name</small>
                <input 
                    type="text"
                    className='w-full placeholder-slate-300 border-slate-200 text-xs'
                    placeholder='enter customer name' 
                    name="" 
                    id="" 
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <small>Card Number</small>
                <input 
                    type="number"
                    className='w-full placeholder-slate-300 text-xs border-slate-200'
                    placeholder='enter invoice ID' 
                    name="" 
                    id="" 
                />
            </div>

            <div className='flex flex-col gap-y-2'>
                <small>Start Date</small>
                <input 
                    type="date"
                    className='text-xs border-slate-200'
                    placeholder='start date'
                 />
            </div>

            <div className='flex flex-col gap-y-2'>
                <small>End Date</small>
                <input 
                    type="date"
                    className='text-xs  border-slate-200'
                 />
            </div>
        </div>
    </div>
  )
}

export default PatientInformation