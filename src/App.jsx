import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CollectionIntro from './components/CollectionIntro';
import Shop from './components/Shop';
import About from './components/About';
import SizeGuide from './components/SizeGuide';
import Contact from './components/Contact';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Navbar 
          scrolled={scrolled} 
          onCartClick={() => setIsCartOpen(true)} 
        />
        <main>
          <Hero />
          <CollectionIntro />
          <Shop />
          <About />
          <SizeGuide />
          <Contact />
        </main>
        <Footer />
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
        />
      </div>
    </CartProvider>
  );
}

export default App;