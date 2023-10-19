import React from 'react'
import { useDataContext } from '../hooks/useDataContext';
import { toast } from 'react-toastify';
import { HiPhone, HiShoppingBag } from "react-icons/hi";

function AppoitmentTable({appointments}) {

    const {dispatch} = useDataContext()
    const headers = ['Date', 'Patient number', 'Appointment', 'Doctor', 'Action']

    const handleConfirmAppointment =  async (id) => {
        const response = fetch(`https://africastalking-api.onrender.com/appointments/${id}/update`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()

        if(!response.ok){
            toast.error('An error occured')
        }

        if(response.ok) {
            toast.success(json.message)
            dispatch({type: 'CREATE_DATA', payload: json.data})
        }
    }


    const requestBody = {
        "From":"7070707112",
        "To":"+2349167338474",
        "Eml":"<?xml version=\"1.0\" encoding=\"UTF-8\"?><Response><Play>http://10.121.1.105/media/clip1.3gp</Play></Response>"
    }
    
    const apiKey = {headers:{
        'apikey': "eyJ4NXQiOiJZamd5TW1GalkyRXpNVEZtWTJNMU9HRmtaalV3TnpnMVpEVmhZVGRtTnpkaU9HUmhNR1kzWmc9PSIsImtpZCI6ImFwaV9rZXlfY2VydGlmaWNhdGVfYWxpYXMiLCJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJyYWRpc3lzQGNhcmJvbi5zdXBlciIsImFwcGxpY2F0aW9uIjp7Im93bmVyIjoicmFkaXN5cyIsInRpZXJRdW90YVR5cGUiOm51bGwsInRpZXIiOiJVbmxpbWl0ZWQiLCJuYW1lIjoicnN5cy0xMDA1My10YWRoYWNrMjMuY29tIiwiaWQiOjI0OSwidXVpZCI6ImZkZTcxMDljLTZhYjQtNDk3OS1hMTAwLTRkY2I4ZmZiNWQ1ZiJ9LCJpc3MiOiJodHRwczpcL1wvYXBpbS5lbmdhZ2VkaWdpdGFsLmFpOjQ0M1wvb2F1dGgyXC90b2tlbiIsInRpZXJJbmZvIjp7IlVubGltaXRlZCI6eyJ0aWVyUXVvdGFUeXBlIjoicmVxdWVzdENvdW50Iiwic3RvcE9uUXVvdGFSZWFjaCI6dHJ1ZSwic3Bpa2VBcnJlc3RMaW1pdCI6MCwic3Bpa2VBcnJlc3RVbml0IjpudWxsfX0sImtleXR5cGUiOiJQUk9EVUNUSU9OIiwic3Vic2NyaWJlZEFQSXMiOlt7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiQ2FsbEFQSVByb2R1Y3QiLCJjb250ZXh0IjoiXC9hcGlcL3YxIiwicHVibGlzaGVyIjoicmFkaXN5cyIsInZlcnNpb24iOiIxLjAuMCIsInN1YnNjcmlwdGlvblRpZXIiOiJVbmxpbWl0ZWQifSx7InN1YnNjcmliZXJUZW5hbnREb21haW4iOiJjYXJib24uc3VwZXIiLCJuYW1lIjoiU2VydmljZUFQSVByb2R1Y3QiLCJjb250ZXh0IjoiXC9hcGkiLCJwdWJsaXNoZXIiOiJyYWRpc3lzIiwidmVyc2lvbiI6IjEuMC4wIiwic3Vic2NyaXB0aW9uVGllciI6IlVubGltaXRlZCJ9XSwiaWF0IjoxNjk3NTM0NDEyLCJqdGkiOiIzZDY1MjI4NC04ZjUwLTQ4YTktOWM1Ni1jMzFiYTlkNjMwYTUifQ==.bIWSmrDVIqOAXrhSbua24MGf2YTs5mvX-VJ-ifQEbP7ZePwNY5es8H1JEYjoZymdczJM7fQFVflwNF3OZz5sLnzZV3p7gd9cqcguTKH2-47rio3CCp7q4CNhgXlX8INsTpYmNmBSAa_I9vZP7Hiq5pM2BRHzBmyjvO3zLjWbz7N3u8dlS5M5FjZjQu-lHqpc2ZRceQdWg6IYdbj19l9IZXZnOS_BQSbZZMxkapAjjhK67tTopBmctQoO2EHv7hPG_CPXpCtE1c6fhinET9dmWJKZg5hmsCWhDakLRyadfpjcZcoX4c6ec1GR3kg2OwhbDL5mqy0A6Q8iZiSsrC3uhQ=="
    }}
    
    const accountId = "AC-d922bf0b-cea5-4c3c-9163-7b162513ebc5"

    
    //Make call
     const makeCall = async() => {
        
        var callApi = new window.callApiClientSdk.CallApi();
        callApi.basePath = "https://apim-gateway.esmp-radisys.com/api";
        var response = callApi.makeCall(accountId, requestBody, apiKey);
        console.log("-------response--------", response);
    }


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
            appointments && appointments.data.map((appointment)=>(
                <div key={appointment._id} className='border-b cursor-pointer p-4 grid md:grid-cols-6 grid-cols-3 items-center hover:bg-[#013CC6] hover:bg-opacity-10'>
        
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
                            <div className='flex items-center gap-x-2'>
                                <span className={`px-2 px-1 text-center rounded-md text-white bg-[#013CC6] `}>
                                    <small>Confirmed</small>
                                </span>
                                <span>
                                    <HiPhone/>
                                </span>
                            </div>
                        )
                        :
                        (
                            <span onClick={()=>{handleConfirmAppointment(appointment._id)}} className={`p-2 text-center rounded-md bg-slate-300 `}>
                                <small>Confirm</small>
                            </span>
                        )
                    }
                    
                    
                </div>
            ))
        }
    
    
</div>

  )
}

export default AppoitmentTable