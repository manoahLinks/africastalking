import React from 'react'

function MedicationForm() {
  return (
    <div className='flex flex-col gap-y-4'>
        <h4 className='text-center font-semibold'>Medication Order</h4>
        <div className='grid grid-cols-2 gap-x-8'>
            <div className="flex flex-col gap-y-2">
                <small>Medicine</small>
                <input 
                    type="text" 
                    name="medicine"
                    className='text-xs placeholder-slate-300 border border-slate-300 rounded-md'
                    placeholder='enter drug name' 
                />
            </div>

            <div className="flex flex-col gap-y-2">
                <small>Dosage</small>
                <input 
                    type="text" 
                    name="dosage"
                    className='text-xs placeholder-slate-300 border border-slate-300 rounded-md' 
                    placeholder='enter dosage'
                />
            </div>
        </div>

        <button
            className='text-white p-2 w-6/12 m-auto bg-[#013CC6] rounded-md'
        >
            <small>save</small>
        </button>
    </div>
  )
}

export default MedicationForm