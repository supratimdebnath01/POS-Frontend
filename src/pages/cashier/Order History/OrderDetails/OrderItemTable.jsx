import { Card, CardContent } from '@/components/ui/card'
import { Table, TableHead, TableHeader, TableRow, TableBody, TableCell } from '@/components/ui/table'

import React from 'react'

const OrderItemTable = ({selectedOrder}) => {
  return (
    <Card>
      <CardContent>
        <h2 className='text-xl font-semibold mb-4'>Order Items</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead className="w-[150px]">Item</TableHead>
              <TableHead className="text-center">Quantity</TableHead>
              <TableHead className="text-center">Price</TableHead>
              <TableHead className="text-right">Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selectedOrder.items.map((item)=>(
              <TableRow key={item.id}>
                <TableCell>
                  <div className='w-10 h-10'>
                    {item.product?.image && <img
                    src={item.product?.image}
                    className='w-10 h-10 object-cover rounded-md'/>}

                  </div>
                </TableCell>
                <TableCell>
                  <div className='flex flex-col'>
                    <span className='font-medium'>{item.product.name.slice(0, 20)}...</span>
                    <span className='text-xs text-gray-500'>SKU: {item.product?.sku}</span>
                  </div>
                </TableCell>
                <TableCell className="text-center">{item.quantity}</TableCell>
                <TableCell className="text-center">₹{item.product?.sellingPrice}</TableCell>
                <TableCell className="text-right">₹{(item.product?.sellingPrice * item.quantity)?.toFixed(1)}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
            
        </Table>
      </CardContent>
    </Card>
  );
};

export default OrderItemTable
