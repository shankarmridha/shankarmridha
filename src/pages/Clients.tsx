import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";

const clients = [
  { name: "Bajaj Finserv", sector: "BFSI" },
  { name: "RBI", sector: "BFSI" },
  { name: "MUFG", sector: "BFSI" },
  { name: "Principal Financial Group", sector: "IT/GCC" },
  { name: "Tata Motors", sector: "Automobile" },
  { name: "JSW MG Motor", sector: "Automobile" },
  { name: "Volkswagen", sector: "Automobile" },
  { name: "Shell", sector: "Oil & Gas" },
  { name: "IOCL", sector: "Oil & Gas" },
  { name: "Nestle", sector: "FMCG" },
  { name: "Glenmark", sector: "Pharma" },
  { name: "Sanofi", sector: "Pharma" },
  { name: "ABB", sector: "Manufacturing" },
  { name: "Atlas Copco", sector: "Manufacturing" },
  { name: "KPMG", sector: "Professional Services" },
  { name: "PWC", sector: "Professional Services" },
  { name: "Lexicon MILE", sector: "Education" },
  { name: "Symbiosis DLC", sector: "Education" },
  { name: "MIT College of Management", sector: "Education" },
];

const sectors = ["All", "BFSI", "Pharma", "Manufacturing", "Automobile", "IT/GCC", "Oil & Gas", "FMCG", "Education", "Professional Services"];

const speakers = [
  { name: "RBI", role: "Keynote Speaker" },
  { name: "Lexicon MILE Management College", role: "Keynote Speaker" },
  { name: "Symbiosis DLC", role: "Keynote Speaker" },
  { name: "MIT College of Management", role: "Keynote Speaker" },
];

const Clients = () => {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? clients : clients.filter((c) => c.sector === filter);

  return (
    <main>
      {/* HERO */}
      <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "40vh" }}>
        <div className="text-center px-6 py-28">
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-4">
            Organisations I Have Worked With
          </h1>
          <p className="font-mono text-gold text-sm">
            200+ Programmes &nbsp;|&nbsp; 13 Sectors &nbsp;|&nbsp; Pan-India
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
                  filter === s
                    ? "bg-gold text-midnight border-gold"
                    : "bg-transparent text-midnight border-midnight/30 hover:border-gold"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {filtered.map((c) => (
              // Replace with actual client logo image
              <div key={c.name} className="bg-sapphire rounded-lg p-6 flex flex-col items-center justify-center min-h-[100px]">
                <span className="font-body font-medium text-ivory text-sm text-center">{c.name}</span>
                <span className="font-mono text-gold text-xs mt-1">{c.sector}</span>
              </div>
            ))}
          </div>
          <p className="font-body italic text-body-light/60 text-sm text-center mt-10">
            Partial list. Includes clients served as a Dale Carnegie certified facilitator
            and through Naya Code&trade; engagements.
          </p>
        </div>
      </section>

      {/* SPEAKING */}
      <section className="bg-sapphire py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="font-display text-3xl text-ivory text-center mb-14">
            Keynote &amp; Speaking Engagements
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {speakers.map((s) => (
              <div key={s.name} className="bg-midnight border-l-4 border-gold rounded-lg p-6">
                <p className="font-body font-medium text-ivory text-sm">{s.name}</p>
                <p className="font-mono text-gold text-xs mt-1">{s.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="bg-midnight py-12 text-center">
        <Link to="/contact" className="inline-block bg-gold text-midnight font-body font-medium text-sm px-6 py-3 rounded hover:opacity-90 transition-opacity">
          Work With Me
        </Link>
      </section>
    </main>
  );
};

export default Clients;
