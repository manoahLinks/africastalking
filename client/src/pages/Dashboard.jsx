import React from 'react'
import { Table } from '../components'
import { useDataContext } from '../hooks/useDataContext'
import useFetch from '../hooks/useFetch'

function Dashboard() {

  const {data: users} = useFetch(`https://africastalking-api.onrender.com/users`)
  return (
    <div className=''>
        <Table users={users}/>
    </div>
  )
}

export default Dashboard