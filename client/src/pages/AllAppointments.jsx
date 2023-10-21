import React from 'react'
import { AppointmentTable } from '../components'
import useFetch from '../hooks/useFetch'

function AllAppointments() {

    const {data: appointments, isPending} = useFetch(`https://africastalking-api.onrender.com/appointments`)

  return (
    <div className=''>
        <AppointmentTable appointments={appointments} isPending={isPending}/>
    </div>
  )
}

export default AllAppointments