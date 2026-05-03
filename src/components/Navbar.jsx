import { useState } from 'react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { name: 'Collection', href: '#shop' },
  { name: 'About', href: '#about' },
  { name: 'Size Guide', href: '#size-guide' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ scrolled, onCartClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-cream/95 backdrop-blur-md shadow-[0_1px_20px_rgba(60,36,21,0.05)]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <a 
            href="#" 
            className="text-espresso text-lg lg:text-xl tracking-[0.3em] font-bold transition-opacity duration-300 hover:opacity-70"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            NJABS THEMBELA APPAREL
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-espresso/70 text-xs tracking-[0.2em] uppercase hover:text-espresso transition-colors duration-300 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-espresso transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button
              onClick={onCartClick}
              className="relative text-espresso/70 hover:text-espresso transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-espresso text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-6">
            <button onClick={onCartClick} className="relative text-espresso">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-espresso text-cream text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-espresso w-6 h-6 relative flex flex-col justify-center gap-1.5"
            >
              <span className={`block h-[1.5px] bg-espresso transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></span>
              <span className={`block h-[1.5px] bg-espresso transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-[1.5px] bg-espresso transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-96 pb-8' : 'max-h-0'}`}>
          <div className="flex flex-col space-y-6 pt-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-espresso/70 text-sm tracking-[0.2em] uppercase hover:text-espresso transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}