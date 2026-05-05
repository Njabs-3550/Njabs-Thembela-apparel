import { useState, useEffect, useRef } from 'react';
import products, { categories, collectionInfo } from '../data/products';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isFilterSticky, setIsFilterSticky] = useState(false);
  const filterRef = useRef(null);
  const { notification } = useCart();

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  // Sticky filter detection
  useEffect(() => {
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        setIsFilterSticky(rect.top <= 80);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="shop" className="bg-white">
      {/* Section Header */}
      <div className="pt-20 pb-8 lg:pt-32 lg:pb-12 text-center px-8">
        <p className="text-espresso/40 text-[10px] lg:text-xs tracking-[0.4em] uppercase mb-3">
          {collectionInfo.season}
        </p>
        <h2 className="text-3xl lg:text-6xl font-light text-espresso tracking-[0.02em]">
          {collectionInfo.name}
        </h2>
      </div>

      {/* Category Filter — Sticky */}
      <div 
        ref={filterRef}
        className={`bg-white z-30 transition-all duration-300 ${
          isFilterSticky 
            ? 'sticky top-[72px] lg:top-[80px] shadow-[0_1px_3px_rgba(0,0,0,0.05)]' 
            : ''
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-4 lg:py-5 scrollbar-hide">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex-shrink-0 px-5 py-2.5 text-[11px] lg:text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-espresso text-cream'
                    : 'text-espresso/50 hover:text-espresso hover:bg-espresso/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid — Zara Style: Full width, large images */}
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pb-24 lg:pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-32">
            <p className="text-espresso/20 text-lg tracking-wider">No products found</p>
          </div>
        )}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-espresso text-cream px-8 py-3 text-xs tracking-[0.15em] uppercase animate-fade-in-up shadow-xl">
          {notification}
        </div>
      )}
    </section>
  );
}