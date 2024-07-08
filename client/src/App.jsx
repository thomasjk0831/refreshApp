import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
  Addjob,
  Admin,
  Deletejob
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error/>,
    children:[
      {
        index: true,
        element: <Landing />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />
      },
      {
        path: 'addjob',
        element: <Addjob />
      },
      {
        path: 'admin',
        element: <Admin />
      },
      {
        path: 'deletejob',
        element: <Deletejob />
      },

    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App