import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { PrinterIcon } from "lucide-react";
import React from "react";

const ReturnReceiptDialog = ({
  showReturnReceiptDialog,
  setShowReturnReceiptDialog,
  selectedOrder,
}) => {
  return (
    <Dialog open={showReturnReceiptDialog}
      onOpenChange={setShowReturnReceiptDialog}>
      <DialogContent className="min-w-2xl">
        <DialogHeader>
          <DialogTitle>Return Receipt</DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <h3 className="font-bold text-lg">SHOP & STOP</h3>
            <p>23,first st.</p>
            <p>Tel : 987-888-3430</p>
          </div>
          <div className="text-center mb-4">
            <h4 className="font-bold">Return Receipt</h4>
          </div>
          <div>
            {/* <p>Return #: RTN -{Date.now().toString.substring(8)}</p> */}
            <p>Original Order : {selectedOrder.id}</p>
            <p>Date : {new Date().toLocaleDateString()}</p>
            <p>Customer : {selectedOrder?.customer?.fullName}</p>
          </div>
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
              {selectedOrder.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="w-10 h-10">
                      {item.product?.image && (
                        <img
                          src={item.product?.image}
                          className="w-10 h-10 object-cover rounded-md"
                        />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">
                        {item.product.name.slice(0, 20)}...
                      </span>
                      <span className="text-xs text-gray-500">
                        SKU: {item.product?.sku}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">{item.quantity}</TableCell>
                  <TableCell className="text-center">
                    ₹{item.product?.sellingPrice}
                  </TableCell>
                  <TableCell className="text-right">
                    ₹{(item.product?.sellingPrice * item.quantity)?.toFixed(1)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <DialogFooter>            
              <Button><PrinterIcon className="h-4 w-4"/>Print & Complete</Button>  
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReturnReceiptDialog;
