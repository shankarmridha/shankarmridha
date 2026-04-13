import { Link } from "react-router-dom";
import { useState } from "react";

const dimensions = [
  {
    num: "01", title: "Decision Intelligence", subtitle: "Structured Reasoning Under Uncertainty",
    desc: "How leaders frame problems, evaluate options, and commit to action when data is incomplete and stakes are high. The cognitive architecture of great decision-making under pressure.",
  },
  {
    num: "02", title: "Relational Intelligence", subtitle: "Designing Trust and Alignment Across Teams",
    desc: "How leaders build, repair, and sustain relationships that drive performance. Not soft skills. The structural mechanics of trust, influence, and alignment in complex organisations.",
  },
  {
    num: "03", title: "Augmented Intelligence", subtitle: "Integrating AI Into Leadership Thinking",
    desc: "How leaders leverage AI as a thinking partner without losing judgment, context, or human discernment. The defining leadership capability of this decade.",
  },
  {
    num: "04", title: "Contextual Intelligence", subtitle: "Leading With Situational and Cultural Depth",
    desc: "How leaders read the room, the market, and the moment. Sensing what the situation demands and adapting without losing strategic clarity.",
  },
  {
    num: "05", title: "Inner Stability Intelligence", subtitle: "Composure, Clarity, and Resilience From Within",
    desc: "How leaders access calm, sustained performance under sustained pressure. Built on inner alignment methodology applied to leadership performance.",
  },
];

const RadarChart = () => {
  const cx = 200, cy = 200, r = 150;
  const angles = [0, 1, 2, 3, 4].map((i) => (i * 2 * Math.PI) / 5 - Math.PI / 2);
  const points = angles.map((a) => [cx + r * Math.cos(a), cy + r * Math.sin(a)] as [number, number]);
  const innerR = r * 0.7;
  const innerPoints = angles.map((a) => [cx + innerR * Math.cos(a), cy + innerR * Math.sin(a)] as [number, number]);
  const labels = ["Decision", "Relational", "Augmented", "Contextual", "Inner Stability"];
  const labelR = r + 30;
  const labelPoints = angles.map((a) => [cx + labelR * Math.cos(a), cy + labelR * Math.sin(a)] as [number, number]);

  return (
    <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto">
      {/* Grid lines */}
      {[0.33, 0.66, 1].map((scale) => (
        <polygon
          key={scale}
          points={angles.map((a) => `${cx + r * scale * Math.cos(a)},${cy + r * scale * Math.sin(a)}`).join(" ")}
          fill="none" stroke="hsl(160 69% 37% / 0.2)" strokeWidth="1"
        />
      ))}
      {/* Axes */}
      {points.map(([px, py], i) => (
        <line key={i} x1={cx} y1={cy} x2={px} y2={py} stroke="hsl(160 69% 37% / 0.3)" strokeWidth="1" />
      ))}
      {/* Data polygon */}
      <polygon
        points={innerPoints.map(([px, py]) => `${px},${py}`).join(" ")}
        fill="hsl(160 69% 37% / 0.3)" stroke="hsl(160 69% 37%)" strokeWidth="2"
      />
      {/* Dots */}
      {innerPoints.map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="4" fill="hsl(160 69% 37%)" />
      ))}
      {/* Labels */}
      {labelPoints.map(([px, py], i) => (
        <text key={i} x={px} y={py} textAnchor="middle" dominantBaseline="middle"
          className="font-mono" fill="hsl(42 52% 51%)" fontSize="11">
          {labels[i]}
        </text>
      ))}
    </svg>
  );
};

const NayaCode = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <main>
      {/* HERO */}
      <section className="bg-midnight flex items-center justify-center relative overflow-hidden" style={{ minHeight: "40vh" }}>
        <div className="absolute inset-0" style={{
          background: "radial-gradient(circle at 50% 50%, hsl(212 53% 24% / 0.4) 0%, transparent 60%)",
        }} />
        <div className="text-center relative z-10 px-6 py-28">
          <h1 className="font-display text-4xl md:text-5xl text-gold mb-4">Naya Code&trade;</h1>
          <p className="font-body font-medium text-ivory text-xl md:text-2xl mb-6">
            The 5D Leadership Intelligence Architecture
          </p>
          <p className="font-body text-ivory/80 max-w-2xl mx-auto">
            Leaders don&rsquo;t need more motivation. They need a smarter thinking system.
            Naya Code&trade; is that system, built across 25 years, proven across 200+ programmes.
          </p>
        </div>
      </section>

      {/* THE BELIEF */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl text-midnight text-center mb-14">
            Why This Framework Exists
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "The Problem", desc: "Generic training transfers skills. It rarely changes how leaders think. And it is thinking, not just technique, that determines outcomes under pressure." },
              { title: "The Insight", desc: "Every leader operates across five intelligence dimensions simultaneously. Most leadership development addresses only one or two. Naya Code\u2122 addresses all five." },
              { title: "The Result", desc: "A structured, measurable upgrade in how leaders think, decide, relate, lead, and sustain performance through complexity and uncertainty." },
            ].map((c) => (
              <div key={c.title} className="bg-sapphire border-t-2 border-gold rounded-lg p-8">
                <h3 className="font-body font-medium text-ivory text-lg mb-3">{c.title}</h3>
                <p className="font-body text-ivory/80 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5D ARCHITECTURE */}
      <section className="bg-sapphire py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-ivory text-center mb-2">
            The Five Dimensions
          </h2>
          <p className="font-mono text-gold text-center text-sm mb-14">
            The 5D Collective Intelligence&trade; Architecture
          </p>
          <div className="space-y-4">
            {dimensions.map((d, i) => (
              <div key={d.num} className="bg-midnight rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center gap-4 p-6 text-left"
                  onClick={() => setOpenIdx(openIdx === i ? null : i)}
                >
                  <span className="font-mono text-teal text-3xl">{d.num}</span>
                  <div className="flex-1">
                    <h3 className="font-body font-medium text-gold">{d.title}</h3>
                    <p className="font-body text-ivory/60 text-sm">{d.subtitle}</p>
                  </div>
                  <span className="text-ivory/40 text-xl">{openIdx === i ? "\u2212" : "+"}</span>
                </button>
                {openIdx === i && (
                  <div className="px-6 pb-6 pl-20">
                    <p className="font-body text-ivory/80 text-sm leading-relaxed">{d.desc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RADAR */}
      <section className="bg-midnight py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <RadarChart />
          <p className="font-body text-ivory/60 text-sm mt-8 max-w-xl mx-auto">
            The 5D Collective Intelligence&trade; Diagnostic maps your current leadership
            profile across all five dimensions, identifying high-leverage development priorities.
          </p>
          <Link to="/contact" className="inline-block bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded mt-8 hover:opacity-90 transition-opacity">
            Request a Diagnostic
          </Link>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-3xl md:text-4xl text-midnight text-center mb-14">
            Three Ways to Engage
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Organisation Programmes", desc: "Multi-session cohort journeys for leadership teams. Customised to 3, 6, or 12 months. Structured for measurable capability shift." },
              { title: "Executive Masterclasses", desc: "High-impact 1-2 day interventions for CxO and senior leadership audiences. Keynote plus deep-dive workshop format." },
              { title: "Individual Coaching", desc: "1:1 structured coaching pathway for CxOs and senior professionals. Personalised intelligence profile and structured development arc." },
            ].map((c) => (
              <div key={c.title} className="bg-sapphire border-t-2 border-gold rounded-lg p-8">
                <h3 className="font-body font-medium text-ivory text-lg mb-3">{c.title}</h3>
                <p className="font-body text-ivory/80 text-sm leading-relaxed mb-4">{c.desc}</p>
                <Link to="/services" className="font-body text-gold text-sm hover:underline">
                  Explore Services &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NayaCode;
