export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-cream-dark">
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <p className="text-espresso/50 text-xs tracking-[0.3em] uppercase mb-4">Connect</p>
              <h2 className="text-4xl lg:text-6xl font-light text-espresso leading-tight">
                Get in Touch
              </h2>
              <div className="w-16 h-[1px] bg-espresso/30 mt-6"></div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mb-2">Visit Our Atelier</p>
                <p className="text-espresso/70 text-sm leading-relaxed">
                  49 Thami Mnyele Drive<br />
                  Johannesburg, 1632<br />
                  South Africa
                </p>
              </div>
              <div>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mb-2">Contact</p>
                <p className="text-espresso/70 text-sm">
                  +27 69 616 5741<br />
                  njabsthembela@gmail.com
                </p>
              </div>
              <div>
                <p className="text-espresso/40 text-xs tracking-wider uppercase mb-2">Hours</p>
                <p className="text-espresso/70 text-sm">
                  Monday – Friday: 9:00 – 18:00<br />
                  Saturday: 10:00 – 16:00<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="animate-fade-in-up">
            <form className="space-y-8">
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Name
                </label>
                <input type="text" className="input-luxury" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Email
                </label>
                <input type="email" className="input-luxury" placeholder="Your email" />
              </div>
              <div>
                <label className="block text-espresso/50 text-xs tracking-wider uppercase mb-2">
                  Message
                </label>
                <textarea 
                  rows="5" 
                  className="input-luxury resize-none" 
                  placeholder="Tell us about your inquiry..."
                ></textarea>
              </div>
              <button type="submit" className="btn-luxury w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}