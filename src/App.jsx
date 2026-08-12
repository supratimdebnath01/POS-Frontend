
import { Route, Routes } from 'react-router'
import './App.css'
import { Button } from './components/ui/button'
import OrderHistory from './pages/cashier/Order History/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from './pages/cashier/Shift Report/ShiftSummaryPage'
import Sidebar from './pages/cashier/sidebar/Sidebar'
import CashierRoutes from './routes/CashierRoutes';


function App() {

  return (
    <>

      {/* <ShiftSummaryPage/> */}
      {/* <OrderHistory/> */}
      {/* <RefundPage/> */}
      <Sidebar/>

      <Routes>
        <Route path='/cashier/*' element={<CashierRoutes/>}/>
      </Routes>

      
    </>
  )
}

export default App
