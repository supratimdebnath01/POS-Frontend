import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import React from 'react'

const ReturnReceiptDialog = ({
  showReturnReceiptDialog,
  setShowReturnReceiptDialog,
  selectedOrder
}) => {
  return (
    <Dialog open={showReturnReceiptDialog} onOpenChange={setShowReturnReceiptDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Return Receipt</DialogTitle>
        </DialogHeader>
      </DialogContent>

      <div className='bg-background max-h-96 overflow-y-auto'>
        <div>
          <h3 className='font-bold text-lg'>SHOP & STOP</h3>
          <p>23,first st.</p>
          <p>Tel : 987-888-3430</p>
        </div>
        <div className='text-center mb-4'>
          <h4 className='font-bold'>Return Receipt</h4>
        </div>

      </div>

    </Dialog>
  )
}

export default ReturnReceiptDialog
