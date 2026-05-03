import { useState } from 'react';
import products, { categories, collectionInfo } from '../data/products';
import ProductCard from './ProductCard';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');
  const { notification } = useCart();

  // Get subcategories based on active category
  const getSubcategories = () => {
    if (activeCategory === 'all') return [];
    const categoryProducts = products.filter(p => p.category === activeCategory);
    const subcats = [...new Set(categoryProducts.map(p => p.subcategory))];
    return subcats;
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = activeCategory === 'all' || product.category === activeCategory;
    const subcategoryMatch = activeSubcategory === 'all' || 
      getSubcategories().length === 0 || 
      product.subcategory === activeSubcategory;
    return categoryMatch && subcategoryMatch;
  });

  const subcategories = getSubcategories();

  return (
    <section id="shop" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 text-center">
          <p className="text-espresso/40 text-xs tracking-[0.3em] uppercase mb-4">
            {collectionInfo.season}
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-espresso tracking-[0.05em] mb-4">
            {collectionInfo.name}
          </h2>
          <div className="w-24 h-[1px] bg-espresso/20 mx-auto"></div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setActiveSubcategory('all');
              }}
              className={`px-6 py-2.5 text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-espresso text-cream'
                  : 'bg-transparent text-espresso/60 hover:text-espresso border border-espresso/20 hover:border-espresso/40'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Subcategory Filter (if available) */}
        {subcategories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setActiveSubcategory('all')}
              className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all duration-300 ${
                activeSubcategory === 'all'
                  ? 'bg-espresso/80 text-cream'
                  : 'bg-transparent text-espresso/40 hover:text-espresso border border-espresso/10 hover:border-espresso/30'
              }`}
            >
              All {categories.find(c => c.id === activeCategory)?.name}
            </button>
            {subcategories.map(sub => (
              <button
                key={sub}
                onClick={() => setActiveSubcategory(sub)}
                className={`px-4 py-1.5 text-[10px] tracking-[0.15em] uppercase transition-all duration-300 ${
                  activeSubcategory === sub
                    ? 'bg-espresso/80 text-cream'
                    : 'bg-transparent text-espresso/40 hover:text-espresso border border-espresso/10 hover:border-espresso/30'
                }`}
              >
                {sub.replace('-', ' ')}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-y-24">
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${0.05 * index}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-espresso/30 text-lg">No products found in this category</p>
          </div>
        )}
      </div>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-espresso text-cream px-8 py-4 text-sm tracking-wider animate-fade-in-up">
          {notification}
        </div>
      )}
    </section>
  );
}