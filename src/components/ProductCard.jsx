import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const { addToCart } = useCart();

  const selectedColor = product.colors[selectedColorIndex];
  const displayImage = selectedColor.image || product.coverImage;

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden mb-6 bg-cream-dark">
        <img
          src={displayImage}
          alt={`${product.name} in ${selectedColor.name}`}
          className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 ease-out"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
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
          <p className="text-espresso/40 text-xs mt-1 leading-relaxed">{product.description}</p>
        </div>
        <span className="text-espresso/60 text-sm">R{product.price}</span>
        
        {/* Selected Color Label */}
        <p className="text-espresso/40 text-[10px] tracking-wider uppercase">
          {selectedColor.name}
        </p>

        {/* Color Swatches */}
        <div className="flex gap-2 pt-1">
          {product.colors.map((color, index) => (
            <button
              key={color.name}
              onClick={() => {
                setSelectedColorIndex(index);
                setShowColorPicker(true);
              }}
              onMouseEnter={() => setSelectedColorIndex(index)}
              className={`w-7 h-7 rounded-full border-2 transition-all duration-300 relative ${
                selectedColorIndex === index 
                  ? 'border-espresso scale-110' 
                  : 'border-espresso/20 hover:border-espresso/50'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            >
              {selectedColorIndex === index && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="w-2 h-2 bg-white rounded-full shadow-sm"></span>
                </span>
              )}
            </button>
          ))}
        </div>

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
    </section>
  );
}
