import { Link } from "react-router-dom";
import SocialIcons from "@/components/SocialIcons";
import Testimonials from "@/components/Testimonials";

const stats = ["29+ Years", "200+ Programmes", "13 Sectors", "VOC 97+", "NPS 95+"];

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
    <section className="min-h-screen bg-midnight relative flex flex-col overflow-hidden">

      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold z-20" />

      {/* Full-bleed photo — right side, anchored bottom-right */}
      <div className="absolute inset-y-0 right-0 w-[55%] z-0 hidden md:block overflow-hidden">
        <img
          src="/Shankar.png"
          alt="Shankar Mridha"
          className="absolute bottom-0 right-0 h-full w-auto max-w-none"
        />
        {/* Left fade: blends photo into midnight */}
        <div
          className="absolute inset-y-0 left-0 w-2/3"
          style={{ background: "linear-gradient(to right, hsl(210 55% 11%) 30%, transparent 100%)" }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{ background: "linear-gradient(to top, hsl(210 55% 11%) 10%, transparent 100%)" }}
        />
      </div>

      {/* Subtle geo background */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, hsl(212 53% 24% / 0.15) 60px, hsl(212 53% 24% / 0.15) 61px)",
      }} />

      {/* Content layer */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-6xl py-28 md:py-32">
          <div className="max-w-xl">

            {/* Overline */}
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-gold" />
              <span className="font-mono text-gold text-xs tracking-widest uppercase">Margdarshak for Modern Leaders</span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-ivory leading-tight mb-5">
              Helping Leaders<br />
              Think <em style={{ fontStyle: "italic", color: "hsl(42 52% 51%)" }}>Better</em><br />
              &amp; Lead Smarter
            </h1>

            {/* Brand sub-line */}
            <p className="font-body text-ivory/70 text-base md:text-lg leading-relaxed mb-3 max-w-lg">
              Not motivation. Not frameworks alone. A structured upgrade of how
              leaders think, decide, relate, and align under pressure.
            </p>

            {/* Naya Code powered-by line */}
            <p className="font-body text-ivory/45 text-sm mb-6">
              Powered by{" "}
              <span className="text-gold font-medium">Naya Code&trade;</span>
              {" — "}
              <span className="text-ivory/60">Multi-Intelligence Leadership System</span>
            </p>

            {/* Teal divider */}
            <div className="w-10 h-[2px] bg-teal mb-7" />

            {/* 5 intelligence dimension pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                { code: "01", label: "Decision Intelligence" },
                { code: "02", label: "Relational Intelligence" },
                { code: "03", label: "Augmented Intelligence" },
                { code: "04", label: "Contextual Intelligence" },
                { code: "05", label: "Inner Stability" },
              ].map((d) => (
                <span
                  key={d.code}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] border border-teal/30 bg-teal/5 text-teal/80 px-2.5 py-1 rounded-full"
                >
                  <span className="text-teal/50">{d.code}</span>
                  {d.label}
                </span>
              ))}
            </div>

            {/* Naya Code badge */}
            <div className="mb-8">
              <span className="inline-block font-mono text-xs border border-gold/40 bg-gold/10 text-gold px-4 py-1.5 rounded-full">
                &#9670; Creator of Naya Code&trade;
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 items-center">
              <Link to="/naya-code" className="bg-gold text-midnight font-body font-semibold text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
                Explore Naya Code&trade;
              </Link>
              <Link to="/services" className="border border-ivory/30 text-ivory font-body font-medium text-sm px-6 py-3 rounded hover:bg-ivory/10 transition-colors">
                Our Services
              </Link>
              <a
                href="https://wa.me/919860606671"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-ivory/50 hover:text-ivory transition-colors px-2 py-3"
              >
                <span className="inline-block w-2 h-2 rounded-full bg-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bottom band */}
      <div className="relative z-10 border-t border-ivory/8">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap gap-x-0 divide-x divide-ivory/10">
            {stats.map((s) => (
              <div key={s} className="flex flex-col items-center px-6 md:px-10 py-5">
                <span className="font-mono text-gold text-lg md:text-xl font-medium leading-none mb-1">
                  {s.split(" ")[0]}
                </span>
                <span className="font-body text-ivory/40 text-xs uppercase tracking-wider">
                  {s.split(" ").slice(1).join(" ")}
                </span>
              </div>
            ))}
          </div>
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
    <Testimonials preview={true} />

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
