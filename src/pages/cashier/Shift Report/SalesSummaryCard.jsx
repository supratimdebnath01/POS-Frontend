import { Card, CardContent } from '@/components/ui/card'
import React from 'react'

const shiftData={
    cashier:{
        fullName: "Ram Das"
    },
    shiftStart: "Aug 9, 2026, 08:22 AM",
    shiftEnd: "",
    totalOrders: 59,
    totalSales: 69999,
    totalRefund:21999,
    netSales: 48000

}

const SalesSummaryCard = () => {
  return (
       <Card>
        <CardContent>
            <h2 className="text-xl font-semibold mb-4">Sales Summary</h2>
           
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Orders: </span>
                    <span className="font-medium">{shiftData.totalOrders}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Sale: </span>
                    <span className="font-medium">₹{shiftData.totalSales}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Refund: </span>
                    <span className="font-medium text-red-500">- ₹{shiftData.totalRefund}</span>
                </div>
                <div className="flex justify-between border-t">
                    <span className="text-muted-foreground">Net Sales: </span>
                    <span className="font-medium">₹{shiftData.netSales}</span>
                </div>
            </div>

        </CardContent>
      </Card>
  );
};

export default SalesSummaryCard
