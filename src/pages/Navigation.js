import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Navigation = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Navigation