import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './CheckoutForm';

export default function CartDrawer({ isOpen, onClose }) {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-espresso/30 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      ></div>

      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[480px] bg-cream z-50 transform transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-8 border-b border-espresso/10">
            <h2 className="text-espresso text-lg tracking-[0.15em] uppercase">
              Shopping Bag ({cart.length})
            </h2>
            <button 
              onClick={onClose}
              className="text-espresso/50 hover:text-espresso transition-colors duration-300"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-8">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <p className="text-espresso/30 text-lg tracking-wider uppercase mb-4">
                  Your bag is empty
                </p>
                <p className="text-espresso/30 text-sm">
                  Add pieces to start your collection
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {cart.map((item, index) => (
                  <div 
                    key={`${item.id}-${item.size}`} 
                    className="flex gap-6 pb-8 border-b border-espresso/5"
                    style={{ animation: `fadeInUp 0.6s ${0.1 * index}s cubic-bezier(0.16, 1, 0.3, 1) forwards` }}
                  >
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-32 object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="text-espresso text-sm font-light mb-1">
                        {item.name}
                      </h3>
                      <p className="text-espresso/40 text-xs mb-3">
                        Size: {item.size}
                      </p>
                      <p className="text-espresso text-sm mb-3">
                        R{item.price}
                      </p>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 border border-espresso/20 w-fit">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso/50 hover:text-espresso transition-colors"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm text-espresso">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center text-espresso/50 hover:text-espresso transition-colors"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="text-espresso/20 hover:text-espresso/60 transition-colors self-start mt-1"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cart.length > 0 && (
            <div className="border-t border-espresso/10 p-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-espresso/60 text-sm tracking-wider uppercase">
                  Subtotal
                </span>
                <span className="text-espresso text-lg">
                  R{cartTotal.toLocaleString()}
                </span>
              </div>
              <p className="text-espresso/30 text-xs">
                Shipping calculated at checkout
              </p>
              <button
                onClick={() => setShowCheckout(true)}
                className="btn-luxury w-full text-center block"
              >
                Proceed to Checkout
              </button>
              <button
                onClick={onClose}
                className="w-full text-espresso/50 text-xs tracking-wider uppercase hover:text-espresso transition-colors py-2"
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