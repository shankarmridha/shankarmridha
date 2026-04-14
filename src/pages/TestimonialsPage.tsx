import Testimonials from "@/components/Testimonials";
import { Link } from "react-router-dom";

const TestimonialsPage = () => (
  <main>
    {/* HERO */}
    <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "40vh" }}>
      <div className="text-center px-6 py-24">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-px bg-gold" />
          <span className="font-mono text-gold text-xs tracking-widest uppercase">Social Proof</span>
          <div className="w-10 h-px bg-gold" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl text-ivory mb-4">
          What Leaders Say
        </h1>
        <p className="font-body text-ivory/60 text-base max-w-lg mx-auto">
          Real outcomes from real leaders. Across BFSI, Pharma, Manufacturing,
          Automobile, Oil &amp; Gas, FMCG and more.
        </p>
      </div>
    </section>

    {/* VOC STATS */}
    <section className="bg-sapphire py-10 border-b border-ivory/10">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="font-mono text-gold text-3xl font-medium mb-1">97+</p>
            <p className="font-body text-ivory/50 text-xs uppercase tracking-wider">VOC Score</p>
          </div>
          <div>
            <p className="font-mono text-gold text-3xl font-medium mb-1">95+</p>
            <p className="font-body text-ivory/50 text-xs uppercase tracking-wider">NPS Score</p>
          </div>
          <div>
            <p className="font-mono text-gold text-3xl font-medium mb-1">200+</p>
            <p className="font-body text-ivory/50 text-xs uppercase tracking-wider">Programmes</p>
          </div>
        </div>
      </div>
    </section>

    {/* ALL TESTIMONIALS */}
    <Testimonials preview={false} />

    {/* SESSION PHOTOS TEASER */}
    <section className="bg-midnight py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-2xl text-ivory text-center mb-4">
          Seen in Action
        </h2>
        <p className="font-body text-ivory/50 text-sm text-center mb-10">
          Moments from leadership sessions across India
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { src: "/gallery/gallery-dsc-01.jpg", alt: "Leadership masterclass session" },
            { src: "/gallery/gallery-dsc-03.jpg", alt: "Keynote address" },
            { src: "/gallery/gallery-2024-01.jpg", alt: "Workshop session 2024" },
            { src: "/gallery/gallery-skp-01.jpg", alt: "Leadership programme" },
          ].map((item, i) => (
            <div key={i} className="rounded-lg overflow-hidden aspect-video">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery" className="font-body text-gold text-sm font-medium hover:underline">
            View Full Gallery &rarr;
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-sapphire py-14 text-center">
      <p className="font-display text-ivory text-xl md:text-2xl mb-6">
        Ready to upgrade how your leaders think?
      </p>
      <Link
        to="/contact"
        className="inline-block bg-gold text-midnight font-body font-semibold text-sm px-8 py-3 rounded hover:opacity-90 transition-opacity"
      >
        Book a Session
      </Link>
    </section>
  </main>
);

export default TestimonialsPage;
