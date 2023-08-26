
// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// layouts imports
import { Main, Plian } from './layouts'

// pages imports
import { AllAppointments, Appointment, Dashboard, Signin } from './pages'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Dashboard/>,
        },

        {
          path: '/appointments',
          element: <AllAppointments/>,
        },

        {
          path: '/user/:id',
          element: <Appointment/>,
        }
      ]
    },

    {
      path: '/user',
      element: <Plian/>,
      children: [
        {
          index: true,
          element: <Signin/>,
        }
      ]
    }
  ])
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
     
  )
}

export default App
