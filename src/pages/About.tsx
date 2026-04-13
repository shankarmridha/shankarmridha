import { Link } from "react-router-dom";

const About = () => (
  <main>
    {/* HERO */}
    <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "40vh" }}>
      <div className="text-center py-28">
        <h1 className="font-display text-4xl md:text-5xl text-ivory mb-3">Shankar Mridha</h1>
        <p className="font-body text-ivory/60">29+ Years. One Conviction. A Smarter Thinking System.</p>
      </div>
    </section>

    {/* Section A — The Beginning */}
    <section className="bg-ivory py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl text-midnight mb-8">Where It Started</h2>
        <p className="font-body text-body-light leading-relaxed">
          My journey started at a familiar crossroads: Engineering or Medicine,
          the classic Bengali middle-class dilemma. Alongside academics, I explored
          music, literature, and the arts, eventually learning the tabla. That early
          blend of discipline and creativity shaped how I understand rhythm, alignment,
          and human performance. Educated at Kendriya Vidyalaya, I learned to connect
          across languages, regions, and backgrounds. Life tested that grounding when
          I lost my father during my engineering years. I completed my education and
          consciously chose to build my own path.
        </p>
      </div>
    </section>

    {/* Section B — Corporate Arc */}
    <section className="bg-sapphire py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl text-ivory mb-8">Seventeen Years Inside Complex Organisations</h2>
        <p className="font-body text-ivory leading-relaxed">
          Over 17 years in IT, I worked across multiple business domains, led digital
          transformation, managed high-performance teams, and functioned as an intrapreneur
          within complex organisations. At Principal Financial Group, a Fortune 500 US
          financial services firm, I led the entire IT function as AVP and sat on the
          Management and Operations Committee. I was not just building systems. I was
          watching how people think, decide, and lead under pressure.
          That observation seeded everything that followed.
        </p>
      </div>
    </section>

    {/* Section C — Founder's Leap */}
    <section className="bg-ivory py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl text-midnight mb-8">Walking Away From Certainty</h2>
        <p className="font-body text-body-light leading-relaxed">
          In 2014, I walked away from a stable AVP role to build HealOne, a
          40-bedded multispecialty hospital. Not because it was rational. Because it
          was necessary. That leap taught me what no corporate role could: what it
          truly costs a leader to act on conviction against comfort. That experience
          is now a reference point for every leader I work with at their own crossroads.
        </p>
      </div>
    </section>

    {/* Section D — Framework Emerges */}
    <section className="bg-sapphire py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl text-ivory mb-8">From Insight to System</h2>
        <p className="font-body text-ivory leading-relaxed">
          A deeper realisation had been forming: technology transforms systems,
          but mindset transforms outcomes. This led me into advanced study of NLP, HUNA,
          and the Silva Method, grounding the inner alignment dimension of my work.
          What began as personal exploration evolved into the Naya Code&trade;, a structured
          intelligence system for leaders. Through Jumbish, my arts organisation, and then
          200+ programmes across 13 sectors as a Dale Carnegie certified facilitator,
          the framework was tested, refined, and proven at scale.
        </p>
      </div>
    </section>

    {/* Pull Quote */}
    <section className="bg-midnight py-16">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <blockquote className="font-display italic text-ivory text-xl md:text-2xl">
          &ldquo;I work as a Margdarshak, not to create dependence, but to help individuals
          find their own direction, strength, and clarity.&rdquo;
        </blockquote>
      </div>
    </section>

    {/* Credentials Strip */}
    <section className="bg-midnight py-12">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <p className="font-mono text-gold text-sm mb-4">
          Certified Dale Carnegie Facilitator &nbsp;|&nbsp; Silva Practitioner &nbsp;|&nbsp;
          Pranic Healing Practitioner &nbsp;|&nbsp; NLP Practitioner &nbsp;|&nbsp; HUNA Practitioner
        </p>
        <p className="font-mono text-ivory text-sm">
          29+ Yrs &nbsp;|&nbsp; 200+ Programmes &nbsp;|&nbsp; 13 Sectors &nbsp;|&nbsp;
          VOC 97+ &nbsp;|&nbsp; NPS 95+
        </p>
      </div>
    </section>

    {/* Current Roles */}
    <section className="bg-ivory py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl text-midnight text-center mb-14">
          What I Do Today
        </h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              title: "Naya Code\u2122",
              role: "Founder & Leadership Intelligence Architect \u2014 Since 2015",
              desc: "Leadership intelligence practice built on the belief that leaders need a smarter thinking system, not more motivation.",
              link: null,
            },
            {
              title: "KKINSUGI \u2014 Strategic Partner",
              role: "Strategic Partner \u2014 Since 2021",
              desc: "Specialised advisory for GCC strategy, governance, and leadership maturity. Applying Naya Code\u2122 frameworks to the unique GCC leadership context.",
              link: { label: "Visit KKINSUGI \u2192", href: "https://kkinsugi.com/" },
            },
            {
              title: "Dale Carnegie India",
              role: "Certified Facilitator \u2014 Since 2023",
              desc: "Delivering flagship programmes across leadership, communication, and sales for corporate clients pan-India. VOC 97+. NPS 95+.",
              link: null,
            },
            {
              title: "Art is Energy",
              role: "Founding Leader \u2014 Since 2021",
              desc: "Purpose-led initiative connecting art, sustainability, and human potential. Addressing 7 UN SDGs through community and creative leadership.",
              link: null,
            },
          ].map((c) => (
            <div key={c.title} className="bg-sapphire border-l-4 border-gold rounded-lg p-6">
              <h3 className="font-body font-medium text-ivory text-lg mb-1">{c.title}</h3>
              <p className="font-mono text-gold text-xs mb-3">{c.role}</p>
              <p className="font-body text-ivory/80 text-sm leading-relaxed">{c.desc}</p>
              {c.link && (
                <a href={c.link.href} target="_blank" rel="noopener noreferrer"
                  className="font-body text-gold text-sm underline mt-3 inline-block">
                  {c.link.label}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
