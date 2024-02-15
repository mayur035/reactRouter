import React from 'react'
import Header from '../Header/header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/footer'

const Routes = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Routes