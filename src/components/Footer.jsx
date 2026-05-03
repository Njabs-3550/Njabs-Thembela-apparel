export default function Footer() {
  return (
    <footer className="bg-espresso text-cream/70 py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-cream text-lg tracking-[0.2em] uppercase mb-6">
              Njabs Thembela Apparel
            </h3>
            <p className="text-cream/40 text-xs leading-relaxed">
              Premium apparel for the discerning individual. 
              Crafted with intention since 2020.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-6">
              Collection
            </h4>
            <ul className="space-y-3">
              <li><a href="#shop" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Shop All</a></li>
              <li><a href="#shop" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">New Arrivals</a></li>
              <li><a href="#shop" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Tops</a></li>
              <li><a href="#shop" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Trousers</a></li>
              <li><a href="#shop" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Outerwear</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-6">
              Information
            </h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">About Us</a></li>
              <li><a href="#size-guide" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Size Guide</a></li>
              <li><a href="#contact" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Contact</a></li>
              <li><a href="#" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Shipping</a></li>
              <li><a href="#" className="text-cream/40 text-xs hover:text-cream/70 transition-colors">Returns</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream/50 text-xs tracking-[0.2em] uppercase mb-6">
              Follow
            </h4>
            <div className="flex gap-6">
              <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors">
                <span className="text-xs tracking-wider">Instagram</span>
              </a>
              <a href="#" className="text-cream/40 hover:text-cream/70 transition-colors">
                <span className="text-xs tracking-wider">Pinterest</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-cream/10 mt-16 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-xs">
            &copy; 2024 Njabs Thembela Apparel. All rights reserved.
          </p>
          <p className="text-cream/30 text-xs">
            Crafted with intention
          </p>
        </div>
      </div>
    </footer>
  );
}