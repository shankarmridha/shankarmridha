const testimonials = [
  {
    quote:
      "Shankar does not deliver a training. He delivers a shift. The way our leadership team now approaches decisions under pressure has measurably changed.",
    name: "Rajiv Menon",
    role: "VP, Learning & Development",
    sector: "BFSI Sector",
  },
  {
    quote:
      "I have attended many leadership programmes. The Naya Code\u2122 framework is the first one that addressed how I think, not just what I do.",
    name: "Priya Sharma",
    role: "Senior Director",
    sector: "Pharma Sector",
  },
  {
    quote:
      "The 5D Diagnostic gave us a language for leadership capability we never had before. It became the foundation of our entire L&D roadmap.",
    name: "Amit Kulkarni",
    role: "CHRO",
    sector: "Manufacturing Sector",
  },
];

const Testimonials = () => (
  <section className="bg-sapphire py-20 md:py-24">
    <div className="container mx-auto px-6 max-w-6xl">
      <h2 className="font-display text-3xl md:text-4xl text-ivory text-center mb-14">
        What Leaders Say
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="bg-midnight border-t-2 border-gold rounded-lg p-8 shadow-md"
          >
            <p className="font-display italic text-ivory text-base leading-relaxed mb-6">
              &ldquo;{t.quote}&rdquo;
            </p>
            <p className="font-body text-ivory font-medium text-sm">{t.name}</p>
            <p className="font-mono text-gold text-xs mt-1">
              {t.role} | {t.sector}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
