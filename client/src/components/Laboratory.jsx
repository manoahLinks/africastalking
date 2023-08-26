import React, {useState} from 'react'
import {TfiPencilAlt, TfiCloudUp} from 'react-icons/tfi'
import Fullscreenmodal from './Fullscreenmodal'

function Laboratory() {

    const [labForm, setLabForm] = useState(false)

    const handleModal = ()=>{
        setLabForm(false)
    }
  return (
    <div className='flex flex-col bg-white p-5 gap-y-2'>
         <span className='flex items-center gap-x-2'>
            <small>Laboratory:</small>
            <TfiPencilAlt/>
        </span>
        
        <div className='flex flex-col h-90'>
            <span>
                <small>Test Type:</small>
            </span>

            <div className='overflow-y-auto flex flex-col gap-y-2 h-90'>
                <div className='flex flex-col'>
                    <small>Test Result</small>
                    <ul>
                        <small>Hemogloblin: 14:12 g/cli</small>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum aliqua</small>

                    </ul>
                </div>
            </div>
        </div>

        <button 
        onClick={()=>{setLabForm(true)}}
            className='cursor-pointer text-white p-2 rounded-md bg-[#013CC6] justify-center flex gap-x-4'
        >
            <small>Upload Test result</small>
            <TfiCloudUp/>
        </button>
        {labForm && <Fullscreenmodal handleModal={handleModal}/>}
    </div>
  )
}

export default Laboratory