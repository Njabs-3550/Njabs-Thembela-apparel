import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function CheckoutForm({ onClose }) {
  const { cart, cartTotal } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'South Africa',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const itemsList = cart.map(item => 
      `• ${item.name} (Size: ${item.size}) × ${item.quantity} — R${item.price * item.quantity}`
    ).join('%0A');
    
    const message = `*NJABS THEMBELA APPAREL— New Order*%0A%0A` +
      `*Customer*%0A${formData.firstName} ${formData.lastName}%0A${formData.email}%0A${formData.phone}%0A%0A` +
      `*Shipping Address*%0A${formData.address}%0A${formData.city}%0A${formData.country}%0A%0A` +
      `*Order*%0A${itemsList}%0A%0A` +
      `*Total: R${cartTotal}*%0A%0A` +
      `Notes: ${formData.notes || 'None'}`;

    const whatsappUrl = `https://wa.me/+27696165741?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50" onClick={onClose}></div>
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-cream w-full max-w-xl max-h-[90vh] overflow-y-auto">
          <div className="p-8 lg:p-12">
            {/* Header */}
            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-espresso/40 text-xs tracking-[0.3em] uppercase mb-2">
                  Checkout
                </p>
                <h3 className="text-espresso text-2xl font-light">
                  Complete Your Order
                </h3>
              </div>
              <button 
                onClick={onClose}
                className="text-espresso/30 hover:text-espresso transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input-luxury"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input-luxury"
                />
              </div>
              
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="input-luxury"
                />
              </div>
              
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  className="input-luxury"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="input-luxury"
                  />
                </div>
                <div>
                  <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="input-luxury"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Order Notes
                </label>
                <textarea
                  name="notes"
                  rows="3"
                  value={formData.notes}
                  onChange={handleChange}
                  className="input-luxury resize-none"
                  placeholder="Special instructions..."
                ></textarea>
              </div>

              {/* Order Summary */}
              <div className="border-t border-espresso/10 pt-8 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-espresso/60 text-sm tracking-wider uppercase">
                    Order Total
                  </span>
                  <span className="text-espresso text-2xl font-light">
                    R{cartTotal.toLocaleString()}
                  </span>
                </div>
                <p className="text-espresso/30 text-xs">
                  You will be redirected to WhatsApp to complete your order
                </p>
                <button 
                  type="submit" 
                  className="btn-luxury w-full flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Complete Order via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}