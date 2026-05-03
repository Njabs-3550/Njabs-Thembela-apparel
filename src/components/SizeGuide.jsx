export default function SizeGuide() {
  const sizeChart = [
    { size: 'XS', bust: '32–33"', waist: '25–26"', hips: '35–36"', uk: '6', us: '2' },
    { size: 'S', bust: '34–35"', waist: '27–28"', hips: '37–38"', uk: '8', us: '4' },
    { size: 'M', bust: '36–37"', waist: '29–30"', hips: '39–40"', uk: '10', us: '6' },
    { size: 'L', bust: '38–40"', waist: '31–33"', hips: '41–43"', uk: '12', us: '8' },
    { size: 'XL', bust: '41–43"', waist: '34–36"', hips: '44–46"', uk: '14', us: '10' },
  ];

  return (
    <section id="size-guide" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-[1000px] mx-auto px-8 lg:px-16">
        <div className="mb-16 lg:mb-20">
          <p className="text-espresso/50 text-xs tracking-[0.3em] uppercase mb-4">Fit Guide</p>
          <h2 className="text-4xl lg:text-6xl font-light text-espresso leading-tight">
            Find Your Size
          </h2>
          <div className="w-16 h-[1px] bg-espresso/30 mt-6"></div>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-espresso">
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">Size</th>
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">Bust</th>
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">Waist</th>
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">Hips</th>
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">UK</th>
                <th className="text-left py-4 px-4 text-espresso text-xs tracking-[0.2em] uppercase font-normal">US</th>
              </tr>
            </thead>
            <tbody>
              {sizeChart.map((row, index) => (
                <tr key={row.size} className={`border-b border-espresso/10 ${index % 2 === 0 ? 'bg-cream-dark/30' : ''}`}>
                  <td className="py-4 px-4 text-espresso text-sm font-medium">{row.size}</td>
                  <td className="py-4 px-4 text-espresso/60 text-sm">{row.bust}</td>
                  <td className="py-4 px-4 text-espresso/60 text-sm">{row.waist}</td>
                  <td className="py-4 px-4 text-espresso/60 text-sm">{row.hips}</td>
                  <td className="py-4 px-4 text-espresso/60 text-sm">{row.uk}</td>
                  <td className="py-4 px-4 text-espresso/60 text-sm">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* How to Measure */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8">
          <div>
            <h4 className="text-espresso text-sm tracking-wider uppercase mb-3">Bust</h4>
            <p className="text-espresso/50 text-xs leading-relaxed">
              Measure around the fullest part of your bust, keeping the tape horizontal.
            </p>
          </div>
          <div>
            <h4 className="text-espresso text-sm tracking-wider uppercase mb-3">Waist</h4>
            <p className="text-espresso/50 text-xs leading-relaxed">
              Measure around your natural waistline, the narrowest part of your waist.
            </p>
          </div>
          <div>
            <h4 className="text-espresso text-sm tracking-wider uppercase mb-3">Hips</h4>
            <p className="text-espresso/50 text-xs leading-relaxed">
              Measure around the fullest part of your hips, about 20cm below your waist.
            </p>
          </div>
        </div>

        <p className="mt-12 text-espresso/30 text-xs italic">
          If you are between sizes, we recommend selecting the larger size for a more relaxed fit.
          For personalised sizing advice, please contact us.
        </p>
      </div>
    </section>
  );
}