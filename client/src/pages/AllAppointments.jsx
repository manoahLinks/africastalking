import React from 'react'
import { AppointmentTable } from '../components'
import useFetch from '../hooks/useFetch'

function AllAppointments() {

    const {data: appointments} = useFetch(`https://africastalking-api.onrender.com/appointments`)

  return (
    <div className=''>
        <AppointmentTable appointments={appointments}/>
    </div>
  )
}

export default AllAppointments