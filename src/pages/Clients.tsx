import { useState } from "react";
import { Link } from "react-router-dom";
import Testimonials from "@/components/Testimonials";

const clients = [
  // BFSI
  { name: "Bajaj Finserv", sector: "BFSI", logo: "/logos/bajaj-finserv.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bajaj_Finserv_Logo.svg/320px-Bajaj_Finserv_Logo.svg.png" },
  { name: "RBI", sector: "BFSI", logo: "/logos/rbi.jfif", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Reserve_Bank_of_India_logo.svg/200px-Reserve_Bank_of_India_logo.svg.png" },
  { name: "MUFG", sector: "BFSI", logo: "/logos/mufg.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/MUFG_logo.svg/320px-MUFG_logo.svg.png" },
  { name: "Principal Financial Group", sector: "BFSI", logo: "/logos/principal.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Principal_Financial_Group_logo.svg/320px-Principal_Financial_Group_logo.svg.png" },
  { name: "SUD Life", sector: "BFSI", logo: "/logos/sud-life.jfif", fallback: "" },
  { name: "Oaknorth Bank", sector: "BFSI", logo: "/logos/oaknorth.png", fallback: "" },
  { name: "IFSCA", sector: "BFSI", logo: "/logos/ifsca.jfif", fallback: "" },
  { name: "Federal Bank", sector: "BFSI", logo: "", fallback: "" },
  { name: "Generali Central", sector: "BFSI", logo: "", fallback: "" },
  { name: "Central Bank of India", sector: "BFSI", logo: "", fallback: "" },
  // Automobile
  { name: "Tata Motors", sector: "Automobile", logo: "/logos/tata-motors.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/200px-Tata_logo.svg.png" },
  { name: "JSW MG Motor", sector: "Automobile", logo: "/logos/mg-motor.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MG_Motor_logo.svg/320px-MG_Motor_logo.svg.png" },
  { name: "Volkswagen", sector: "Automobile", logo: "/logos/volkswagen.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/200px-Volkswagen_logo_2019.svg.png" },
  { name: "Uno Minda", sector: "Automobile", logo: "/logos/uno-minda.png", fallback: "" },
  { name: "Wirtgen India", sector: "Automobile", logo: "/logos/wirtgen.png", fallback: "" },
  { name: "Mahindra Automobiles", sector: "Automobile", logo: "", fallback: "" },
  { name: "Hyundai", sector: "Automobile", logo: "", fallback: "" },
  { name: "Driv India", sector: "Automobile", logo: "", fallback: "" },
  // Oil & Gas
  { name: "Shell", sector: "Oil & Gas", logo: "/logos/shell.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Shell_logo.svg/200px-Shell_logo.svg.png" },
  { name: "IOCL", sector: "Oil & Gas", logo: "/logos/iocl.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/IOCL-Logo.svg/200px-IOCL-Logo.svg.png" },
  { name: "Total Energies", sector: "Oil & Gas", logo: "", fallback: "" },
  { name: "Reliance BP Mobility", sector: "Oil & Gas", logo: "", fallback: "" },
  { name: "SBM Offshore", sector: "Oil & Gas", logo: "", fallback: "" },
  // FMCG
  { name: "Nestle", sector: "FMCG", logo: "/logos/nestle.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nestle.svg/320px-Nestle.svg.png" },
  { name: "RSPL Ltd", sector: "FMCG", logo: "/logos/rspl.png", fallback: "" },
  { name: "Cosmo First", sector: "FMCG", logo: "/logos/cosmo-first.png", fallback: "" },
  { name: "DS Group", sector: "FMCG", logo: "/logos/ds-group.png", fallback: "" },
  // Pharma
  { name: "Glenmark", sector: "Pharma", logo: "/logos/glenmark.png", fallback: "" },
  { name: "Sanofi", sector: "Pharma", logo: "/logos/sanofi.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Sanofi_logo.svg/320px-Sanofi_logo.svg.png" },
  { name: "Indofil Ltd", sector: "Pharma", logo: "/logos/indofil.png", fallback: "" },
  // Manufacturing
  { name: "ABB", sector: "Manufacturing", logo: "/logos/abb.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/ABB_logo.svg/320px-ABB_logo.svg.png" },
  { name: "Atlas Copco", sector: "Manufacturing", logo: "/logos/atlas-copco.jfif", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Atlas_Copco_Group_logo.svg/320px-Atlas_Copco_Group_logo.svg.png" },
  { name: "Usha International", sector: "Manufacturing", logo: "/logos/usha-international.png", fallback: "" },
  { name: "Sekura India", sector: "Manufacturing", logo: "/logos/sekura.png", fallback: "" },
  { name: "The Toro Company", sector: "Manufacturing", logo: "/logos/toro.png", fallback: "" },
  { name: "Shree Malani", sector: "Manufacturing", logo: "/logos/shree-malani.png", fallback: "" },
  { name: "Eaton", sector: "Manufacturing", logo: "", fallback: "" },
  { name: "Vardhaman", sector: "Manufacturing", logo: "", fallback: "" },
  // Professional Services
  { name: "KPMG", sector: "Professional Services", logo: "/logos/kpmg.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/KPMG_blue_logo.svg/320px-KPMG_blue_logo.svg.png" },
  { name: "PWC", sector: "Professional Services", logo: "/logos/pwc.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/320px-PricewaterhouseCoopers_Logo.svg.png" },
  { name: "Omnicom Media Group", sector: "Professional Services", logo: "/logos/omnicom.png", fallback: "" },
  { name: "Concord One", sector: "Professional Services", logo: "/logos/concord-one.jfif", fallback: "" },
  { name: "DNV", sector: "Professional Services", logo: "", fallback: "" },
  // IT
  { name: "Affle 3i", sector: "IT", logo: "/logos/affle.png", fallback: "" },
  { name: "Indigene", sector: "IT", logo: "/logos/indigene.png", fallback: "" },
  { name: "Fytxt", sector: "IT", logo: "/logos/fytxt.png", fallback: "" },
  { name: "ITC Infotech", sector: "IT", logo: "", fallback: "" },
  { name: "Analytix", sector: "IT", logo: "", fallback: "" },
  { name: "Zensar Technologies", sector: "IT", logo: "", fallback: "" },
  { name: "Ingram Micro", sector: "IT", logo: "", fallback: "" },
  { name: "ASAP Solutions Pvt. Ltd.", sector: "IT", logo: "", fallback: "" },
  { name: "Volkswagen IT", sector: "IT", logo: "", fallback: "" },
  { name: "uKnowva", sector: "IT", logo: "", fallback: "" },
  // Real Estate
  { name: "K Raheja", sector: "Real Estate", logo: "/logos/k-raheja.jfif", fallback: "" },
  { name: "Metro GSC", sector: "Real Estate", logo: "/logos/metro-gsc.png", fallback: "" },
  { name: "Gera Builders", sector: "Real Estate", logo: "", fallback: "" },
  // Media
  { name: "Sakal Media Group", sector: "Media", logo: "", fallback: "" },
  { name: "Times of India", sector: "Media", logo: "", fallback: "" },
  // Power
  { name: "Tata Power Renewable Energy", sector: "Power", logo: "", fallback: "" },
  { name: "Tata Power - NPL", sector: "Power", logo: "", fallback: "" },
  // Education
  { name: "Lexicon MILE", sector: "Education", logo: "/logos/lexicon-mile.png", fallback: "" },
  { name: "Lexicon Schools", sector: "Education", logo: "/logos/lexicon-schools.png", fallback: "" },
  { name: "Symbiosis DLC", sector: "Education", logo: "/logos/symbiosis.jfif", fallback: "" },
  { name: "MIT College of Management", sector: "Education", logo: "/logos/mit-pune.jfif", fallback: "" },
  { name: "IBS College", sector: "Education", logo: "", fallback: "" },
  { name: "ISBM College", sector: "Education", logo: "", fallback: "" },
  { name: "Bricks Architecture College Pune", sector: "Education", logo: "", fallback: "" },
  { name: "Shivaji College Kolhapur", sector: "Education", logo: "", fallback: "" },
  { name: "Amanora School", sector: "Education", logo: "", fallback: "" },
  { name: "Times Education", sector: "Education", logo: "", fallback: "" },
  { name: "ICSI", sector: "Education", logo: "", fallback: "" },
  // Retail
  { name: "Somerfield Stores UK", sector: "Retail", logo: "", fallback: "" },
  { name: "Marks & Spencer UK", sector: "Retail", logo: "", fallback: "" },
  // Telecom
  { name: "Reliance Jio", sector: "Telecom", logo: "", fallback: "" },
  { name: "Sprint USA", sector: "Telecom", logo: "", fallback: "" },
  // Govt
  { name: "Netherland Embassy", sector: "Govt", logo: "/logos/netherlands-embassy.jfif", fallback: "" },
  // Others
  { name: "CABWW", sector: "Others", logo: "", fallback: "" },
];

const sectors = ["All", "BFSI", "Pharma", "Manufacturing", "Automobile", "IT", "Oil & Gas", "FMCG", "Real Estate", "Professional Services", "Media", "Power", "Education", "Retail", "Telecom", "Govt", "Others"];

const speakers = [
  { name: "RBI", role: "Keynote Speaker" },
  { name: "Lexicon MILE Management College", role: "Keynote Speaker" },
  { name: "Symbiosis DLC", role: "Keynote Speaker" },
  { name: "MIT College of Management", role: "Keynote Speaker" },
  { name: "Amanora School", role: "Keynote Speaker" },
  { name: "Times Education", role: "Keynote Speaker" },
  { name: "ISBM College", role: "Keynote Speaker" },
  { name: "IBS College", role: "Keynote Speaker" },
  { name: "uKnowva", role: "Keynote Speaker" },
  { name: "ICSI — Institute of Company Secretaries of India", role: "Keynote Speaker" },
  { name: "Art Auctions", role: "Keynote Speaker" },
  { name: "Fidelitus Art Gallery", role: "Keynote Speaker" },
  { name: "Chocolate Carnival", role: "Keynote Speaker" },
  { name: "World Art Day", role: "Keynote Speaker" },
  { name: "Shivaji College Kolhapur", role: "Keynote Speaker" },
  { name: "Rotary Club of Pune", role: "Keynote Speaker" },
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
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((c) => (
              <div key={c.name} className="bg-white border border-midnight/10 rounded-lg p-5 flex flex-col items-center justify-center min-h-[110px] gap-3 hover:shadow-md transition-shadow">
                <img
                  src={c.logo}
                  alt={c.name + " logo"}
                  className="h-10 w-auto max-w-[120px] object-contain"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    // Try Wikimedia fallback first
                    if (c.fallback && t.src !== c.fallback) {
                      t.src = c.fallback;
                    } else {
                      // Final fallback: initial letter
                      t.style.display = "none";
                      const fb = t.parentElement?.querySelector(".logo-fallback") as HTMLElement;
                      if (fb) fb.style.display = "flex";
                    }
                  }}
                />
                <div className="logo-fallback w-12 h-12 rounded-full bg-sapphire items-center justify-center" style={{ display: "none" }}>
                  <span className="text-gold font-mono font-bold text-lg">{c.name.charAt(0)}</span>
                </div>
                <span className="font-body font-medium text-midnight text-xs text-center leading-tight">{c.name}</span>
                <span className="font-mono text-gold text-[10px]">{c.sector}</span>
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
