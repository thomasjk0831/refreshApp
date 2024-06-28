import React from 'react'
import { useRouteError, Link } from 'react-router-dom'

const Error = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <div>
    <h1>Error</h1>
    <Link to="/">home</Link>
    </div>
  )
}

export default Error