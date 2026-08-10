import React from 'react'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { EyeIcon } from 'lucide-react'
import { PrinterIcon } from 'lucide-react'

const orders=[
  {
    id: 1,
    createdAt:"Jul 10, 2026 , 11:36 AM",
    customer:{
      fullName:"Ram Das",
      phone:"9876543210"
    },
    totalAmount:2599,
    paymentType: "CASH",
    status: "COMPLETED",
    items: [
      {
        id:2,
        product:{
          image:"https://imagescdn.thecollective.in/img/app/product/3/368681-3640432.jpg",
          name: "Men blue shirt",
          sellingPrice: 499,
          sku: "SHRT-2-CUTTON-BLU-2026"
        },
        quantity: 2,

      }
    ]
  }
]

const OrderTable = ({handleViewOrderDetails}) => {
  return (
    <div>
       <h2 className='text-xl font-bold mb-4'>Recent Orders</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Order ID</TableHead>
              <TableHead className="">Date/Time</TableHead>
              <TableHead className="">Customer</TableHead>
              <TableHead className="">Amount</TableHead>
              <TableHead className="">Payment Type</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order)=>(
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.customer.fullName}</TableCell>
                <TableCell>{order.totalAmount}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell className="text-right">
                  <div className='flex justify-end gap-2'>
                    <Button onClick={
                      ()=> handleViewOrderDetails(order)                      
                    } variant={"ghost"} size={"icon"}>
                      <EyeIcon className='h-4 w-4'/>
                    </Button>

                    <Button variant={"ghost"} size={"icon"}>
                      <PrinterIcon className='h-4 w-4'/>
                    </Button>
                  </div>
                </TableCell>
             
              </TableRow>
            ))}
          </TableBody>
            
        </Table>
    </div>
  );
};

export default OrderTable
