import React from 'react'

function AppoitmentTable({appointments}) {
    const headers = ['Date', 'Patient number', 'Appointment', 'Doctor', 'Action']
    return (
    <div className='grid grid-cols-1 bg-white p-2'>
    {/* header */}
    <div className='font-semibold p-4 grid md:grid-cols-6 grid-cols-3 border-b border-slate-200'>
        <div className='flex gap-x-2 items-center '>
            <input 
                type="checkbox"
                className='appearance-none rounded-md text-xs' 
                name="" 
                id="" 
            />
            <small className=''>Card ID</small>
        </div>
        {headers && headers.map((header)=>(
            <small>{header}</small>
        ))}
    </div>

    {/* body */}
    {
            appointments ? appointments.data.map((appointment)=>(
                <div onClick={``} className='border-b cursor-pointer p-4 grid md:grid-cols-6 grid-cols-3 items-center hover:bg-[#013CC6] hover:bg-opacity-10'>
        
                    <div className='flex gap-x-2 items-center'>
                        <input 
                            type="checkbox"
                            className='rounded-md' 
                            name="" 
                            id="" 
                        />
                        <small className='text-blue-400'>#AHGA68</small>
                    </div>
                    <small>{appointment.date}</small>
                    <small>{appointment.createdBy}</small>
                    <small className='p-1 rounded-full bg-amber-100 text-amber-500 whitespace-nowrap truncate'>{appointment.date}. {appointment.time == 1 && `8am-10am` || appointment.time == 2 && `10am-12pm` || appointment.time == 3 && `12pm-2pm` || appointment.time == 4 && `2pm-4pm` || appointment.time == 5 && `4pm-6pm` }</small>
                    <small>Dr. Fatima </small>
                    
                    {
                        appointment.isConfirmed ?
                        (
                            <span className={`p-2 text-center rounded-md text-white bg-[#013CC6] `}>
                                <small>Confirmed</small>
                            </span>
                        )
                        :
                        (
                            <span className={`p-2 text-center rounded-md bg-slate-300 `}>
                                <small>Confirm</small>
                            </span>
                        )
                    }
                    
                    
                </div>
            )) : <small>No appointment yet...</small>
        }
    
    
</div>

  )
}

export default AppoitmentTable