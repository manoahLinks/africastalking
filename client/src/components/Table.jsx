import React from 'react'

function Table({users}) {
    const headers = ['Date', 'Patient name', 'Payable Amount', 'Paid Amount', 'Due']
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
                users ? users.data.map((user)=>(
                    <div onClick={``} className='border-b  p-4 grid md:grid-cols-6 grid-cols-3'>
            
                        <div className='flex gap-x-2 items-center'>
                            <input 
                                type="checkbox"
                                className='rounded-md' 
                                name="" 
                                id="" 
                            />
                            <small className='text-blue-400'>#AHGA68</small>
                        </div>
                        <small>23/09/2023</small>
                        <small>{user.fullname}</small>
                        <small>$100</small>
                        <small>$0.00</small>
                        <small>$0.00</small>
                    </div>
                )) : <small>No user yet...</small>
            }
        
        
    </div>
  )
}

export default Table