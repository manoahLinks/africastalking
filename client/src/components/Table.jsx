import React from 'react'

function Table() {
    const headers = ['Date', 'Customer', 'Payable Amount', 'Paid Amount', 'Due']
  return (
    <div className='grid grid-cols-1 bg-white'>
        {/* header */}
        <div className='md:text-[14px] font-semibold border-b text-[10px] p-4 grid grid-cols-6'>
            <div className='flex gap-x-2 items-center'>
                <input 
                    type="checkbox"
                    className='rounded-md' 
                    name="" 
                    id="" 
                />
                <h4>Card ID</h4>
            </div>
            {headers && headers.map((header)=>(
                <h4>{header}</h4>
            ))}
        </div>

        {/* body */}
        
        <div className='font-light md:text-[14px] border-b text-[10px] p-4 grid grid-cols-6'>
            <div className='flex gap-x-2 items-center'>
                <input 
                    type="checkbox"
                    className='rounded-md' 
                    name="" 
                    id="" 
                />
                <p className='text-blue-400'>#AHGA68</p>
            </div>
            <p>23/09/2023</p>
            <p>Jacob Marcus</p>
            <p>$100</p>
            <p>$0.00</p>
            <p>$0.00</p>
        </div>
        
    </div>
  )
}

export default Table