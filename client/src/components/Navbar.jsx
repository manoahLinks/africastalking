import React from 'react'
import {TfiBell, TfiSearch} from 'react-icons/tfi'
import Profile from '../assets/Profileavtar.png';

function Navbar() {

    const makeVoiceCall = async () => {
       
        const response = fetch(`https://voice.sandbox.africastalking/call`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
                'ApiKey': '0668cfd186f078a9066fb251daaa7f3c135f3be2158fa6a7e5119b93bc5f5b70'
            },
            body: 
                {
                    username: 'sandbox', 
                    phoneNumber: '+2348079390551'
                }
            
        }).then((response)=>{
            console.log('Voice call init')
        }).catch((error)=>{
            console.log(error)
        })


    }
  return (
    <div className='flex justify-between pt-10'>
        <div className='relative flex w-8/12 items-center'> 
            <TfiSearch className='absolute ml-2 '/>
            <input
                type='text'
                className='px-8 w-full text-xs placeholder-slate-300 border-slate-200  rounded-md'
                placeholder='search'
            />
        </div>

        <div className='flex gap-x-8 items-center'>
            <div onClick={makeVoiceCall} className='relative rounded-md bg-white hover:bg-slate-200'>
                <TfiBell/>
                <div className='absolute -top-2 left-4 p-1 bg-yellow-200 rounded-full'></div>
            </div>
            <img className='h-10 w-10' src={Profile} alt="" />
        </div>
    </div>
  )
}

export default Navbar