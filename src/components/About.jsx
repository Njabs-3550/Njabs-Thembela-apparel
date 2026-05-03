export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=700&h=900&fit=crop&q=85"
              alt="Atelier workspace"
              className="w-full h-[500px] lg:h-[700px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-cream p-8 lg:p-10 shadow-[0_20px_60px_rgba(60,36,21,0.08)]">
              <p className="text-espresso/40 text-xs tracking-[0.3em] uppercase mb-2">Est.</p>
              <p className="text-espresso text-5xl lg:text-6xl font-light">2020</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-slide-right">
            <p className="text-espresso/50 text-xs tracking-[0.3em] uppercase">
              Philosophy
            </p>
            <h2 className="text-4xl lg:text-6xl font-light text-espresso leading-tight">
              The Beauty<br />of Restraint
            </h2>
            <div className="w-16 h-[1px] bg-espresso/30"></div>
            <div className="space-y-6 text-espresso/60 text-sm leading-relaxed max-w-lg">
              <p>
                Njabs Thembela Apparel was founded on the belief that true luxury 
                lies in subtlety. We create pieces that speak quietly but command 
                attention through impeccable cut, superior fabric, and thoughtful detail.
              </p>
              <p>
                Every garment is designed with intention. We source the finest 
                natural materials—Italian wools, Japanese cottons, pure silks—and 
                work with master craftspeople who share our obsession with quality.
              </p>
              <p>
                This is not fashion that shouts. It is clothing for those who 
                understand that elegance is found in the spaces between, in the 
                perfect drape of a trouser, the weight of a coat, the way a shirt 
                collar sits just so.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-espresso/10">
              <div>
                <p className="text-espresso text-3xl lg:text-4xl font-light">1.2k+</p>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mt-1">Clients</p>
              </div>
              <div>
                <p className="text-espresso text-3xl lg:text-4xl font-light">100%</p>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mt-1">Natural Fibers</p>
              </div>
              <div>
                <p className="text-espresso text-3xl lg:text-4xl font-light">14</p>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mt-1">Artisans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}