import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function Cart({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-warm-gray flex justify-between items-center">
            <h2 className="text-2xl font-bold text-brown">Shopping Cart</h2>
            <button onClick={onClose} className="text-brown hover:text-brown-dark">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {cart.length === 0 ? (
              <div className="text-center text-brown-light mt-20">
                <p className="text-xl">Your cart is empty</p>
                <p className="mt-2">Add some items to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={`${item.id}-${item.size}`} className="flex gap-4 p-4 bg-cream rounded-lg">
                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-brown">{item.name}</h3>
                      <p className="text-sm text-brown-light">Size: {item.size}</p>
                      <p className="font-bold text-brown">R{item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-warm-gray flex items-center justify-center hover:bg-brown hover:text-cream transition-colors"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-warm-gray flex items-center justify-center hover:bg-brown hover:text-cream transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-warm-gray p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-semibold text-brown">Total:</span>
                <span className="text-2xl font-bold text-brown">R{cartTotal}</span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="btn-primary w-full mb-3"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="btn-secondary w-full"
              >
                Continue Shopping
              </button>
            </div>
          )}
        </div>
      </div>

      {showCheckout && <CheckoutForm onClose={() => setShowCheckout(false)} />}
    </>
  );
}