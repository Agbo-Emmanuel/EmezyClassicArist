import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from "./Auth/Login"
import Sign from "./Auth/Sign"
// import Welcome from "./Pages/Welcome"
import LandingPage from "./Pages/LandingPage"
import Main from './Pages/Main'



const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/sign',
    element : <Sign/>
  },
  // {
  //   path : '',
  //   element : <Welcome/>
  // },
  {
    path : '/',
    element : <Main/>,
    children : [
      {
        path : '',
        element : (<LandingPage/>)
      }
    ]
  }
  
])






const App = () => {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App