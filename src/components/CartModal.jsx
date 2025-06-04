import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Trash2, ShoppingBag } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const CartModal = ({ isOpen, onClose, cartItems, updateCartItemQuantity, removeCartItem, clearCart }) => {
  const totalAmount = cartItems.reduce((sum, item) => {
    const pricePerSqft = 25; // Placeholder price
    const itemTotal = parseFloat(item.area) * item.quantity * pricePerSqft;
    return sum + itemTotal;
  }, 0);

  const handlePlaceOrder = () => {
    if(cartItems.length === 0){
        toast({
            title: "Cart is Empty",
            description: "Please add items to your cart before placing an order.",
            variant: "destructive",
        });
        return;
    }
    toast({
      title: "Order Placed Successfully!",
      description: `Thank you for your order. Total amount: ₹${totalAmount.toFixed(2)}. We will contact you shortly.`,
    });
    clearCart();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] glass-effect border-gray-300">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800 flex items-center">
            <ShoppingBag className="mr-2 h-6 w-6 text-red-600" /> Your Shopping Cart
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Review your selected tiles and proceed to checkout.
          </DialogDescription>
        </DialogHeader>
        
        {cartItems.length === 0 ? (
          <div className="py-8 text-center text-gray-500">
            <ShoppingBag className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <p className="text-xl">Your cart is empty.</p>
            <p>Start adding some beautiful tiles!</p>
          </div>
        ) : (
          <>
            <ScrollArea className="h-[300px] my-4 pr-4">
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}`} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
                    <div className="flex items-center space-x-3">
                      <img  src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-md" src="https://images.unsplash.com/photo-1620596971243-26bec2400c8e" />
                      <div>
                        <p className="font-semibold text-gray-800">{item.name}</p>
                        {item.selectedColor && <p className="text-sm text-gray-500">Color: {item.selectedColor}</p>}
                        <p className="text-sm text-gray-500">Area/pc: {item.area} sqft</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => updateCartItemQuantity(item.id, item.selectedColor, Math.max(1, item.quantity - 1))}
                          className="px-2"
                        >
                          -
                        </Button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => updateCartItemQuantity(item.id, item.selectedColor, item.quantity + 1)}
                          className="px-2"
                        >
                          +
                        </Button>
                      </div>
                      <Button variant="ghost" size="icon" onClick={() => removeCartItem(item.id, item.selectedColor)}>
                        <Trash2 className="h-5 w-5 text-red-500" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center text-lg font-semibold text-gray-800">
                <span>Total Estimated Cost:</span>
                <span>₹{totalAmount.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Final price will be confirmed upon order processing. This is an estimated cost based on ₹25/sqft.</p>
            </div>
          </>
        )}
        
        <DialogFooter className="mt-6">
          <Button variant="outline" onClick={onClose}>Close</Button>
          {cartItems.length > 0 && (
            <Button onClick={handlePlaceOrder} className="bg-red-600 hover:bg-red-700 text-white">
              <ShoppingBag className="mr-2 h-4 w-4" /> Place Order
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;