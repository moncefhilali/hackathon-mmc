import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import EventDetails from '../Event/EventDetails'
import { Outlet } from 'react-router-dom'

export default function EventComp() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
