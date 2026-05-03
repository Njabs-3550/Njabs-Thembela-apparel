import { useState, useEffect, useRef } from 'react';

const heroImages = [
  {
    url: "/images/hero1.png",
    alt: "Male model in earth tone streetwear",
    gender: "male"
  },
  {
    url: "/images/hero2.png",
    alt: "Male model in earth tone streetwear",
    gender: "male"
  },
  {
    url: "/images/hero3.png",
    alt: "Female model in neutral minimalist fashion",
    gender: "female"
  },
  {
    url: "/images/hero4.png",
    alt: "Male model in beige outfit",
    gender: "male"
  },
  {
    url: "/images/hero5.png",
    alt: "Female model in earth tone fashion",
    gender: "female"
  },
  {
    url: "/images/hero6.png",
    alt: "Male model in brown and cream outfit",
    gender: "male"
  }
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const sectionRef = useRef(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    heroImages.forEach((image) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === heroImages.length) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === heroImages.length) {
          setImagesLoaded(true);
        }
      };
    });
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-end lg:items-center overflow-hidden bg-espresso">
      {/* Loading Placeholder */}
      {!imagesLoaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-espresso">
          <div className="w-10 h-10 border-2 border-cream/30 border-t-cream rounded-full animate-spin"></div>
        </div>
      )}

      {/* Background Image Slideshow */}
      <div className={`absolute inset-0 z-0 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            } ${isTransitioning && index === currentImage ? 'opacity-80' : ''}`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover object-center md:object-top"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 via-espresso/20 to-espresso/80 lg:bg-gradient-to-r lg:from-espresso/40 lg:via-espresso/20 lg:to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 pb-20 lg:pb-0 lg:pt-24">
        <div className="lg:w-[55%] space-y-6 lg:space-y-10">
          {/* Editorial eyebrow */}
          <p className="text-cream/80 text-xs lg:text-sm tracking-[0.4em] uppercase animate-fade-in-up">
            Earth Form Collection — Autumn Winter 2026
          </p>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light text-cream leading-[0.95] animate-fade-in-up" 
              style={{ animationDelay: '0.2s' }}>
            The Art of<br />Restraint
          </h1>
          
          {/* Subtext */}
          <p className="text-cream/80 text-base lg:text-lg max-w-md leading-relaxed animate-fade-in-up"
             style={{ animationDelay: '0.4s' }}>
            A study in restraint. Clean architectural silhouettes crafted from premium materials. 
            African luxury streetwear for the discerning.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up"
               style={{ animationDelay: '0.6s' }}>
            <a href="#collection" className="btn-luxury inline-block text-center">
              Explore Collection
            </a>
            <a href="#about" className="btn-outline border-cream text-cream hover:bg-cream hover:text-espresso inline-block text-center">
              Our Philosophy
            </a>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 right-8 lg:right-16 z-10 flex gap-3">
        {heroImages.map((image, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImage(index);
                setIsTransitioning(false);
              }, 500);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'bg-cream w-8' 
                : 'bg-cream/40 hover:bg-cream/70'
            }`}
            aria-label={`View image ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute bottom-8 left-8 lg:left-16 z-10">
        <span className="text-cream/60 text-xs tracking-[0.2em]">
          {String(currentImage + 1).padStart(2, '0')} / {String(heroImages.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
