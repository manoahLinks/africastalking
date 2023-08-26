import React from 'react'
import {TfiPencilAlt} from 'react-icons/tfi'

function Medication() {
  return (
    <div className='flex flex-col gap-y-2 bg-white p-5'>
        <span className='flex items-center gap-x-2'>
            <small>Medications:</small>
            <TfiPencilAlt/>
        </span>
        <div className="grid grid-cols-1">
            <span className='flex'>
                <small>Drugs Prescribed :</small>
                
            </span>
        </div>
    </div>
  )
}

export default Medication