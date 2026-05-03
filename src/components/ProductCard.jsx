import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors ? product.colors[0] : null);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden mb-6 bg-cream-dark">
        <img
          src={product.image}
          alt={product.alt || product.name}
          className="w-full h-[400px] lg:h-[500px] object-cover"
        />
        
        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-espresso/5 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-cream/90 backdrop-blur-sm text-espresso/60 text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {product.subcategory ? product.subcategory.replace('-', ' ') : product.category}
          </span>
        </div>

        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 right-0 p-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          <button
            onClick={() => addToCart(product, selectedSize)}
            className="w-full bg-espresso text-cream py-4 text-xs tracking-[0.2em] uppercase hover:bg-espresso-light transition-colors duration-300"
          >
            Add to Bag — R{product.price}
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-3">
        <div>
          <h3 className="text-espresso text-base lg:text-lg font-light">{product.name}</h3>
          <p className="text-espresso/40 text-xs mt-1">{product.description}</p>
        </div>
        <span className="text-espresso/60 text-sm">R{product.price}</span>
        
        {/* Colors */}
        {product.colors && product.colors.length > 1 && (
          <div className="flex gap-2 pt-2">
            {product.colors.map(color => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`text-[10px] px-2 py-1 border transition-all duration-300 ${
                  selectedColor === color
                    ? 'border-espresso text-espresso'
                    : 'border-espresso/20 text-espresso/40'
                }`}
                title={color}
              >
                {color}
              </button>
            ))}
          </div>
        )}

        {/* Size Selection */}
        <div className="flex gap-2 pt-1">
          {product.sizes.map(size => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 text-xs transition-all duration-300 ${
                selectedSize === size
                  ? 'bg-espresso text-cream'
                  : 'bg-transparent text-espresso/50 hover:text-espresso border border-espresso/20 hover:border-espresso/40'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}