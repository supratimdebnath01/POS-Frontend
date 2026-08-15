
import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import OrderHistory from './pages/cashier/Order History/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from './pages/cashier/Shift Report/ShiftSummaryPage'
import Sidebar from './pages/cashier/sidebar/Sidebar'
import CashierRoutes from './routes/CashierRoutes';
import Login from './pages/Auth/Login'


function App() {

  return (
    <>

      {/* <ShiftSummaryPage/> */}
      {/* <OrderHistory/> */}
      {/* <RefundPage/> */}
      {/* <Sidebar/> */}

      <Routes>
        {/* <Route path='/cashier/*' element={<CashierRoutes/>}/> */}
        <Route path='/' element={<Navigate to="/Login"/>}/>
        {/* <Route path='/cashier/*' element={<CashierRoutes/>}/>
        <Route path='/cashier/*' element={<CashierRoutes/>}/> */}
        <Route path='/login' element={<Login/>}/>
      </Routes>

      
    </>
  )
}

export default App
