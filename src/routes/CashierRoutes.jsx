import CashierDashboardLayout from '@/pages/cashier/CashierDashboardLayout'
import CreateOrder from '@/pages/cashier/CreateOrder'
import OrderHistory from '@/pages/cashier/Order History/OrderHistory'
import React from 'react'
import { Route, Routes } from 'react-router'

const CashierRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<CreateOrder/>}/>
        <Route path='/orders' element={<OrderHistory/>}/>
    </Routes>
  )
}

export default CashierRoutes
