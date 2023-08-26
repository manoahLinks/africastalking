import React from 'react'
import { Appointments, Laboratory, Medication } from '../components'

function Appointment() {
  return (
    <div className='flex-1 grid grid-cols-1 gap-y-8'>
        <div className='bg-white'>

        </div>

        <div className='grid md:grid-cols-3 grid-cols-1 gap-y-4 gap-x-2 '>
          <Appointments/>
          <Medication/>
          <Laboratory/>
        </div>
    </div>
  )
}

export default Appointment