import { Link } from "react-router-dom";

const services = [
  {
    name: "Naya Code\u2122 Leadership Programme",
    audience: "Senior leadership cohorts, mid-to-senior managers",
    desc: "The flagship multi-session capability journey built on the 5D Leadership Intelligence Architecture. Designed not as a training event but as a structured thinking upgrade across all five dimensions of leadership intelligence.",
    outcomes: [
      "Structured decision-making framework for complex, uncertain environments",
      "Improved relational and team alignment capability",
      "AI integration into leadership thinking and practice",
    ],
    format: "Multi-session \u2014 3, 6, or 12 months | In-person or blended",
    light: true,
  },
  {
    name: "5D Collective Intelligence\u2122 Diagnostic",
    audience: "CHROs, L&D Heads, OD teams",
    desc: "An assessment and profiling tool that maps your organisation\u2019s leadership capability across the five dimensions of the Naya Code\u2122 framework. Identifies gaps, strengths, and the highest-leverage development priorities.",
    outcomes: [
      "Data-backed leadership development roadmap",
      "Individual and team-level intelligence profiles",
      "Clear prioritisation for L&D investment",
    ],
    format: "Assessment + debrief | Half-day to full-day engagement",
    light: false,
  },
  {
    name: "AI-Augmented Leadership Workshop",
    audience: "Mid-to-senior managers, leadership teams",
    desc: "A focused intervention on the defining leadership challenge of this decade: how to integrate AI as a thinking partner without losing human judgment, context, and leadership authority.",
    outcomes: [
      "Framework for AI-human decision-making in leadership contexts",
      "Practical tools for augmenting strategic thinking with AI",
      "Shift from AI anxiety to AI-augmented confidence",
    ],
    format: "1 or 2-day workshop | In-person preferred, virtual available",
    light: true,
  },
  {
    name: "Multi-Intelligence Leadership Masterclass",
    audience: "CxOs, senior leadership teams",
    desc: "A high-impact keynote and workshop format covering the full Multi-Intelligence Leadership model. Decision, Relational, Augmented, Contextual, and Inner Stability Intelligence.",
    outcomes: [
      "Integrated understanding of the 5D leadership model",
      "Actionable shifts in thinking and decision frameworks",
      "Elevated leadership presence and team alignment",
    ],
    format: "Half-day to full-day | Keynote + breakout format available",
    light: false,
  },
  {
    name: "Train the Trainer \u2014 Leadership Facilitation",
    audience: "Internal L&D facilitators, HRBPs, People Managers",
    desc: "Build in-house leadership facilitation capability. Equips your internal team to sustain leadership development beyond external interventions. Delivered by a certified Dale Carnegie facilitator with VOC 97+.",
    outcomes: [
      "Certified facilitation methodology for leadership content",
      "Confidence and competence in high-stakes group facilitation",
      "Measurable improvement in internal programme quality",
    ],
    format: "2-3 day immersive | Follow-up coaching sessions available",
    light: true,
  },
  {
    name: "GCC Leadership Architecture",
    audience: "GCC leadership teams, heads of captive operations, incoming GCC CxOs",
    desc: "Specialised leadership and capability advisory for Global Capability Centres. I bring 8+ years of lived GCC leadership experience at Principal Financial Group (Fortune 500) combined with the Naya Code\u2122 framework. This service is delivered in partnership with KKINSUGI.",
    outcomes: [
      "Leadership maturity framework customised for the GCC context",
      "Capability design for GCC leadership transitions and scale-up",
      "Governance and change management advisory",
    ],
    format: "Advisory retainer or project-based | via KKINSUGI partnership",
    light: false,
    kkinsugi: true,
  },
  {
    name: "Executive Coaching",
    audience: "Individual CxOs, founders, senior professionals",
    desc: "1:1 structured coaching using the Naya Code\u2122 pathway. For leaders at a crossroads, navigating complexity, or seeking a fundamental upgrade in how they think, decide, and lead.",
    outcomes: [
      "Personalised intelligence profile and development roadmap",
      "Structured sessions on decision clarity, relational dynamics, and inner alignment",
      "Sustained performance shift without burnout",
    ],
    format: "3-month or 6-month engagement | Bi-weekly sessions, in-person or virtual",
    light: true,
  },
];

const programmes = [
  "Dale Carnegie Course (DCC)", "High Impact Presentations (HIP)",
  "Leadership Training for Managers", "Leadership Training for Results",
  "Sales Excellence", "Negotiation Skills", "Key Account Management",
  "Emotional Intelligence", "Conflict Management", "Change Leadership",
  "Train the Trainer (TTT)", "Keynote Speaking",
  "Strategic Mindset for CxOs", "AI in Leadership",
];

const Services = () => (
  <main>
    {/* HERO */}
    <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "40vh" }}>
      <div className="text-center px-6 py-28">
        <h1 className="font-display text-4xl md:text-5xl text-ivory mb-4">
          How I Work With Organisations
        </h1>
        <p className="font-body text-ivory/60 max-w-2xl mx-auto">
          Structured leadership intelligence interventions for corporate teams,
          senior leaders, and GCC organisations.
        </p>
      </div>
    </section>

    {/* TARGET CONTEXT */}
    <section className="bg-ivory py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-display text-3xl text-midnight mb-8">Built for Corporate Leadership</h2>
        <p className="font-body text-body-light leading-relaxed mb-4">
          Most leadership training transfers content. Few change how leaders think.
          I work with CHROs, L&D Heads, and senior leadership teams who want measurable
          capability shift, not just engagement scores.
        </p>
        <p className="font-body text-body-light leading-relaxed mb-8">
          My programmes are designed for organisations navigating AI integration,
          generational transitions, leadership fatigue, and the complexity of
          high-stakes decision-making.
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-gold text-sm">
          <span>200+ Programmes</span><span>|</span>
          <span>13 Sectors</span><span>|</span>
          <span>VOC 97+</span><span>|</span>
          <span>NPS 95+</span>
        </div>
      </div>
    </section>

    {/* SERVICES */}
    {services.map((s) => (
      <section
        key={s.name}
        className={`py-20 md:py-24 ${s.light ? "bg-ivory" : "bg-sapphire"}`}
      >
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className={`font-display text-2xl md:text-3xl mb-2 ${s.light ? "text-midnight" : "text-ivory"}`}>
            {s.name}
          </h2>
          <p className="font-mono text-gold text-xs mb-6">For: {s.audience}</p>
          <p className={`font-body leading-relaxed mb-6 ${s.light ? "text-body-light" : "text-ivory/90"}`}>
            {s.desc}
          </p>
          <div className="mb-6 space-y-2">
            {s.outcomes.map((o) => (
              <p key={o} className={`font-body text-sm ${s.light ? "text-body-light" : "text-ivory/80"}`}>
                &mdash; {o}
              </p>
            ))}
          </div>
          <p className={`font-mono text-xs mb-6 ${s.light ? "text-body-light/60" : "text-ivory/50"}`}>
            {s.format}
          </p>
          {s.kkinsugi && (
            <p className="font-body italic text-ivory/50 text-sm mb-4">
              This service is delivered in partnership with KKINSUGI. Learn more at{" "}
              <a href="https://kkinsugi.com/" target="_blank" rel="noopener noreferrer" className="text-gold underline">
                kkinsugi.com &rarr;
              </a>
            </p>
          )}
          <Link to="/contact" className="inline-block bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
            Request This Programme
          </Link>
        </div>
      </section>
    ))}

    {/* PROGRAMMES FACILITATED */}
    <section className="bg-midnight py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl text-ivory text-center mb-2">Programme Portfolio</h2>
        <p className="font-body text-ivory/50 text-center text-sm mb-12">
          Certified to design and deliver across the following domains:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {programmes.map((p) => (
            <div key={p} className="bg-sapphire rounded px-4 py-3 text-center">
              <span className="font-mono text-gold text-xs">{p}</span>
            </div>
          ))}
        </div>
        <p className="font-body italic text-ivory/40 text-sm text-center mt-8">
          All programmes are customised to organisational context. Not off-the-shelf.
        </p>
      </div>
    </section>
  </main>
);

export default Services;
