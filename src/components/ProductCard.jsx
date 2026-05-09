import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const { addToCart } = useCart();

  const selectedColor = product.colors[selectedColorIndex];
  const displayImage = selectedColor.image || product.coverImage;

  // Preload all color images when product card mounts
  useEffect(() => {
    product.colors.forEach((color, index) => {
      const img = new Image();
      img.src = color.image || product.coverImage;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
    });
  }, [product]);

  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-cream-dark mb-3 lg:mb-4">
        {/* Show all images, hide/show based on selection */}
        {product.colors.map((color, index) => (
          <img
            key={color.name}
            src={color.image || product.coverImage}
            alt={`${product.name} in ${color.name}`}
            className={`w-full aspect-[3/4] object-cover transition-opacity duration-300 absolute inset-0 ${
              index === selectedColorIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        
        {/* Placeholder to maintain aspect ratio while images load */}
        <div className="w-full aspect-[3/4]"></div>
        
        {/* Loading indicator for current image */}
        {!loadedImages[selectedColorIndex] && (
          <div className="absolute inset-0 flex items-center justify-center bg-cream-dark z-20">
            <div className="w-6 h-6 border-2 border-espresso/20 border-t-espresso rounded-full animate-spin"></div>
          </div>
        )}

        {/* Hover Overlay */}
        <div className={`absolute inset-0 bg-espresso/5 transition-opacity duration-500 z-20 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-cream/90 backdrop-blur-sm text-espresso/60 text-[10px] tracking-[0.2em] uppercase px-3 py-1">
            {product.subcategory ? product.subcategory.replace('-', ' ') : product.category}
          </span>
        </div>

        {/* Quick Add Button */}
        <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-400 ${
          isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}>
          <button
            onClick={() => addToCart(product, selectedSize)}
            className="w-full bg-white/90 backdrop-blur-sm text-espresso py-3 lg:py-4 text-[10px] lg:text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 font-medium"
          >
            Add to Bag — R{product.price}
          </button>
          
          {/* Size selector inside hover */}
          <div className="flex justify-center gap-1 py-2 bg-white/90 backdrop-blur-sm border-t border-espresso/5">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedSize(size);
                }}
                className={`w-7 h-7 lg:w-8 lg:h-8 text-[9px] lg:text-[10px] transition-all duration-200 ${
                  selectedSize === size
                    ? 'bg-espresso text-cream'
                    : 'text-espresso/40 hover:text-espresso'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Color indicator dots */}
        {product.colors.length > 1 && (
          <div className="absolute top-3 left-3 z-20 flex gap-1.5">
            {product.colors.map((color, index) => (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedColorIndex(index);
                }}
                className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-full border transition-all duration-200 ${
                  selectedColorIndex === index 
                    ? 'border-espresso scale-125 ring-1 ring-espresso/30' 
                    : 'border-white/80 hover:border-white'
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="px-1">
        <h3 className="text-espresso text-xs lg:text-sm font-light leading-snug">
          {product.name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-espresso/50 text-xs">R{product.price}</span>
          <span className="text-espresso/30 text-[10px] uppercase tracking-wider">
            {selectedColor.name}
          </span>
        </div>
      </div>
    </div>
  );
}
