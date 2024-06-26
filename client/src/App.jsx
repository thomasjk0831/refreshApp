import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  AddJob,
  Admin,
  AllJobs,
  Deletejob,
} from './pages'
// import { HomeLayout } from './pages'
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />
  },
  {
    path: '/addjob',
    element: <AddJob />
  },
  {
    path: '/admin',
    element: <Admin />
  },
  {
    path: '/alljobs',
    element: <AllJobs />
  },
  {
    path: '/deletejob',
    element: <Deletejob />
  },


])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App