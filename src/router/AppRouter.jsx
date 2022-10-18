import React from 'react'
import { Routes,Route } from 'react-router-dom'
import {AuthRoutes} from '../auth/routes/AuthRoutes'
import {ContentRoutes} from '../webcontent/routes/ContentRoutes'

export const AppRouter = () => {
  return (
  <Routes >

    <Route path="/auth/*"  element={<AuthRoutes/>} />


   

    <Route path="/*"  element={<ContentRoutes/>} />


  


   

  </Routes>
  )
}
