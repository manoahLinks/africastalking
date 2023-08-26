import React from 'react'
import {TfiPencilAlt, TfiAlarmClock, TfiCalendar} from 'react-icons/tfi'

function Appointment() {
  return (
    <div className='flex flex-col gap-y-2 bg-white p-5'>
        <span className='flex items-center gap-x-2'>
            <small>Appointments:</small>
            <TfiPencilAlt/>
        </span>

        <small className='text-green-400'>Your appointment with Doctor Ameh is confirmed</small>

        <span className='flex items-center'>
            <div className='flex items-center gap-x-2'>
                <small>Time</small>
                <TfiAlarmClock/> :
            </div>

            <small>8:00am</small>
        </span>

        <span className='flex items-center'>
            <div className='flex items-center gap-x-2'>
                <small>Date</small>
                <TfiCalendar/> :
            </div>

            <small>25/08/2023</small>
        </span>

        <span className='flex justify-items-center'>
            <div className='flex items-center gap-x-2'>
                <small>Reason:</small>
                {/* <TfiCalendar/> : */}
            </div>

            <small></small>
        </span>

        <span className='flex items-center gap-x-2'>
            <div className='flex items-center gap-x-2'>
                <small>status:</small>
                {/* <TfiCalendar/> : */}
            </div>

            <small className='p-1 rounded-md text-xs text-green-700 bg-green-200'>Confirmed</small>
        </span>


    </div>
  )
}

export default Appointment