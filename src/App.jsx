
import './App.css'
import { Button } from './components/ui/button'
import OrderHistory from './pages/cashier/Order History/OrderHistory'
import RefundPage from './pages/cashier/Refund/RefundPage'
import ShiftSummaryPage from './pages/cashier/Shift Report/ShiftSummaryPage'
import CashierRoutes from './routes/CashierRoutes'


function App() {

  return (
    <>

      {/* <ShiftSummaryPage/> */}
      {/* <OrderHistory/> */}
      {/* <RefundPage/> */}

      <CashierRoutes/>
    </>
  )
}

export default App
