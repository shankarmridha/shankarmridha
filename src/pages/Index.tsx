import { Link } from "react-router-dom";
import PlaceholderImage from "@/components/PlaceholderImage";
import SocialIcons from "@/components/SocialIcons";
import Testimonials from "@/components/Testimonials";

const stats = ["25+ Years", "200+ Programmes", "13 Sectors", "VOC 97+", "NPS 95+"];

const services = [
  { title: "Naya Code\u2122 Leadership Programme", desc: "Structured intelligence system for leadership teams" },
  { title: "5D Collective Intelligence\u2122 Diagnostic", desc: "Assessment and profiling across five dimensions" },
  { title: "AI-Augmented Leadership Workshop", desc: "Integrating AI into leadership thinking" },
  { title: "Executive Coaching & Masterclasses", desc: "1:1 and group interventions for senior leaders" },
];

const dimensions = [
  { num: "01", title: "Decision Intelligence", desc: "Structured reasoning under uncertainty" },
  { num: "02", title: "Relational Intelligence", desc: "Designing trust and alignment" },
  { num: "03", title: "Augmented Intelligence", desc: "Integrating AI into leadership thinking" },
  { num: "04", title: "Contextual Intelligence", desc: "Leading with situational clarity" },
  { num: "05", title: "Inner Stability Intelligence", desc: "Composure and clarity from within" },
];

const clientLogos = [
  "Bajaj Finserv", "RBI", "MUFG", "Principal Financial Group",
  "Tata Motors", "JSW MG Motor", "Volkswagen", "Shell", "IOCL",
  "Nestle", "Glenmark", "Sanofi", "ABB", "Atlas Copco", "KPMG", "PWC",
];

const sectors = ["BFSI", "Pharma", "Manufacturing", "Automobile", "IT", "Oil & Gas", "FMCG", "Education"];

const Index = () => (
  <main>
    {/* HERO */}
    <section className="min-h-screen bg-midnight relative flex items-center overflow-hidden">
      {/* Subtle geometric overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, hsl(212 53% 24%) 40px, hsl(212 53% 24%) 41px)",
      }} />
      <div className="container mx-auto px-6 max-w-6xl relative z-10 py-28 md:py-0">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div className="animate-fade-in-up">
            <h1 className="font-display text-4xl md:text-5xl text-ivory mb-3">
              Shankar Mridha
            </h1>
            <p className="font-body text-ivory/70 text-base mb-4">
              Margdarshak for Modern Leaders
            </p>
            <p className="font-body font-medium text-ivory text-lg md:text-xl mb-6">
              Helping Leaders Think Better &amp; Lead Smarter
            </p>
            <span className="inline-block font-mono text-xs bg-gold text-midnight px-3 py-1 rounded-full mb-8">
              Creator of Naya Code&trade;
            </span>
            <div className="flex flex-wrap gap-3 mb-8">
              <Link to="/naya-code" className="bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
                Explore Naya Code&trade;
              </Link>
              <Link to="/services" className="border border-ivory text-ivory font-body font-medium text-sm px-6 py-3 rounded hover:bg-ivory/10 transition-colors">
                Our Services
              </Link>
              <a
                href="https://wa.me/919860606671"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-ivory hover:text-gold transition-colors px-4 py-3"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" style={{ color: "#25D366" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.767-6.32-2.063l-.44-.338-2.654.89.89-2.654-.338-.44A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>
          {/* Right photo placeholder */}
          <div className="flex justify-center md:justify-end animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            {/* HERO PHOTO — replace with high-quality upper-body portrait, professional attire, direct eye contact, neutral or dark background, soft front lighting. Aspect ratio ~3:4. */}
            <PlaceholderImage
              label="HERO PHOTO — replace with high-quality upper-body portrait"
              className="w-72 md:w-80 lg:w-96"
              aspectRatio="3/4"
            />
          </div>
        </div>
        {/* Stat strip */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12 md:mt-16 pt-8 border-t border-ivory/10">
          {stats.map((s) => (
            <span key={s} className="font-mono text-gold text-sm">{s}</span>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT TEASER */}
    <section className="bg-ivory py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl text-midnight text-center mb-10">
          Not Motivation. A Thinking Upgrade.
        </h2>
        <p className="font-body text-body-light leading-relaxed mb-6">
          I help leaders think better and lead smarter. Not through motivation.
          Not through frameworks alone. But through a structured upgrade of how they
          think, decide, relate, and align, especially under pressure.
        </p>
        <p className="font-body text-body-light leading-relaxed mb-10">
          Over 25 years spanning IT leadership, Fortune 500 GCCs,
          entrepreneurship, and 200+ leadership programmes across 13 sectors, I have
          built one conviction: technology transforms systems, but mindset transforms
          outcomes.
        </p>
        <blockquote className="font-display italic text-midnight text-xl md:text-2xl text-center border-l-4 border-gold pl-6 my-10">
          &ldquo;Technology transforms systems. Mindset transforms outcomes.&rdquo;
        </blockquote>
        <div className="text-center mt-8">
          <Link to="/about" className="font-body text-gold font-medium hover:underline">
            Read My Story &rarr;
          </Link>
        </div>
      </div>
    </section>

    {/* SERVICES TEASER */}
    <section className="bg-sapphire py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl text-ivory text-center mb-14">
          How I Work With Organisations
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {services.map((s) => (
            <div key={s.title} className="bg-midnight border-l-4 border-gold rounded-lg p-6">
              <h3 className="font-body font-medium text-ivory text-lg mb-2">{s.title}</h3>
              <p className="font-body text-ivory/60 text-sm mb-4">{s.desc}</p>
              <Link to="/services" className="font-body text-gold text-sm hover:underline">
                Learn More &rarr;
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/services" className="bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
            View All Services
          </Link>
        </div>
      </div>
    </section>

    {/* NAYA CODE TEASER */}
    <section className="bg-midnight py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl text-gold text-center mb-6">
          The Naya Code&trade; Framework
        </h2>
        <p className="font-body text-ivory text-center max-w-3xl mx-auto mb-14">
          A structured intelligence system for leaders navigating complexity.
          Built across 25 years. Proven across 200+ programmes and 13 sectors.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-10 overflow-x-auto">
          {dimensions.map((d) => (
            <div key={d.num} className="bg-sapphire/50 rounded-lg p-5 text-center">
              <span className="font-mono text-teal text-3xl block mb-2">{d.num}</span>
              <h3 className="font-body font-medium text-gold text-sm mb-1">{d.title}</h3>
              <p className="font-body text-ivory/60 text-xs">{d.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/naya-code" className="bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
            Explore the Full Framework
          </Link>
        </div>
      </div>
    </section>

    {/* CLIENTS TEASER */}
    <section className="bg-ivory py-20 md:py-24 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl text-midnight text-center mb-14">
          Organisations I Have Worked With
        </h2>
      </div>
      {/* Marquee */}
      <div className="relative overflow-hidden mb-10">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clientLogos, ...clientLogos].map((name, i) => (
            // Replace with actual logo image
            <div
              key={`${name}-${i}`}
              className="inline-flex items-center justify-center bg-sapphire rounded-lg px-8 py-4 mx-3 min-w-[160px] flex-shrink-0"
            >
              <span className="font-body font-medium text-ivory text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {sectors.map((s) => (
            <span key={s} className="font-mono text-gold text-xs">{s}</span>
          ))}
        </div>
        <div className="text-center">
          <Link to="/clients" className="font-body text-gold font-medium hover:underline">
            View Full Client List &rarr;
          </Link>
        </div>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <Testimonials />

    {/* SOCIAL BAR */}
    <section className="bg-midnight py-12">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col items-center gap-6">
        <p className="font-body font-medium text-ivory">Connect with Shankar</p>
        <SocialIcons size={28} />
      </div>
    </section>
  </main>
);

export default Index;
