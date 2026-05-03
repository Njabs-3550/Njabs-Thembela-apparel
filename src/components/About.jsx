export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <img
              src="/images/nta's workspace.png"
              alt="nta's workspace"
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
                Njabs Thembela Apparel was built on the idea that real presence 
                doesn't need to be loud. Our pieces are designed to move quietly, 
                but leave a lasting impression through silhouette, texture, and detail.
              </p>
              <p>
                We focus on modern streetwear with a refined edge—where relaxed 
                forms meet precise construction. Every garment is intentional, 
                from the weight of the fabric to the way it falls on the body. 
                Nothing is accidental.
              </p>
              <p>
                Our materials are carefully selected for both feel and function—structured 
                cottons, rich denims, durable blends—chosen to age well and carry 
                character over time. Each piece is made to be worn, lived in, and understood.
              </p>
              <p>
                This is streetwear for those who appreciate restraint. For those who 
                notice the balance in proportions, the quiet confidence in fit, and the 
                power of simplicity done right.
              </p>
              <p className="text-espresso/80 font-medium tracking-wider">
                Njabs Thembela Apparel.<br />nta.
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
