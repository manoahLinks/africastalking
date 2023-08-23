
// rrd imports
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: 'Main layout',
      children: [
        {
          index: true,
          element: 'index route',
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
