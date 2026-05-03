import { useState } from 'react';
import { categories, collectionInfo } from '../data/products';

export default function CollectionIntro() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* Collection Header */}
        <div className="text-center mb-20 lg:mb-28">
          <p className="text-espresso/40 text-xs tracking-[0.4em] uppercase mb-4">
            {collectionInfo.season}
          </p>
          <h2 className="text-3xl lg:text-5xl font-light text-espresso tracking-[0.05em] mb-6">
            {collectionInfo.name}
          </h2>
          <div className="w-24 h-[1px] bg-espresso/20 mx-auto mb-6"></div>
          <p className="text-espresso/50 text-sm lg:text-base max-w-xl mx-auto leading-relaxed">
            {collectionInfo.description}
          </p>
        </div>

        {/* Category Grid - One image per category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.filter(cat => cat.id !== 'all').map((category, index) => (
            <a
              key={category.id}
              href="#shop"
              className="group relative overflow-hidden cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
              onMouseEnter={() => setActiveCategory(category.id)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {/* Image */}
              <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-cream-dark">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-espresso/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Category Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="bg-cream/95 backdrop-blur-sm p-4 lg:p-6 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-espresso text-lg lg:text-xl tracking-[0.1em] uppercase mb-2">
                    {category.name}
                  </h3>
                  <p className="text-espresso/50 text-xs leading-relaxed">
                    {category.description}
                  </p>
                  <div className={`mt-4 flex items-center gap-2 text-espresso/40 text-xs tracking-[0.2em] uppercase transition-all duration-500 ${
                    activeCategory === category.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`}>
                    <span>Explore</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* View Full Collection CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <a href="#shop" className="btn-luxury inline-block">
            View Full Collection
          </a>
        </div>
      </div>
    </section>
  );
}