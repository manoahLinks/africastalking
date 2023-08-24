
// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// layouts imports
import { Main, Plian } from './layouts'

// pages imports
import { Dashboard, Signin } from './pages'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          index: true,
          element: <Dashboard/>,
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
