import { Link } from "react-router-dom";

const testimonials = [
  {
    quote: "Shankar does not deliver a training. He delivers a shift. The way our leadership team now approaches decisions under pressure has measurably changed.",
    name: "Rajiv Menon",
    role: "VP, Learning & Development",
    sector: "BFSI Sector",
    photo: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "I have attended many leadership programmes. The Naya Code\u2122 framework is the first one that addressed how I think, not just what I do.",
    name: "Priya Sharma",
    role: "Senior Director",
    sector: "Pharma Sector",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The 5D Diagnostic gave us a language for leadership capability we never had before. It became the foundation of our entire L&D roadmap.",
    name: "Amit Kulkarni",
    role: "CHRO",
    sector: "Manufacturing Sector",
    photo: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The programme changed the way I see conflict in my team. I now approach difficult conversations with clarity rather than avoidance.",
    name: "Sunita Rao",
    role: "General Manager, HR",
    sector: "Automobile Sector",
    photo: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "Shankar has a rare ability to make senior leaders question their assumptions without making them feel challenged. That is the art of the Margdarshak.",
    name: "Vikram Nair",
    role: "CEO",
    sector: "Oil & Gas Sector",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    quote: "The Relational Intelligence module helped me rebuild trust within my cross-functional team. The results showed up in our next NPS cycle.",
    name: "Deepa Krishnan",
    role: "Director, Operations",
    sector: "FMCG Sector",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face",
  },
];

const Testimonials = ({ preview = false }: { preview?: boolean }) => {
  const displayed = preview ? testimonials.slice(0, 3) : testimonials;

  return (
    <section className="bg-sapphire py-20 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl text-ivory text-center mb-4">
          What Leaders Say
        </h2>
        <p className="font-body text-ivory/50 text-sm text-center mb-14">
          Outcomes from 200+ programmes across 13 sectors
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {displayed.map((t) => (
            <div
              key={t.name}
              className="bg-midnight border-t-2 border-gold rounded-lg p-8"
            >
              <p className="font-display italic text-ivory text-base leading-relaxed mb-8">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-ivory/10">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://ui-avatars.com/api/?name=" + encodeURIComponent(t.name) + "&background=1C3A5E&color=C19C45";
                  }}
                />
                <div>
                  <p className="font-body text-ivory font-medium text-sm">{t.name}</p>
                  <p className="font-mono text-gold text-xs mt-0.5">
                    {t.role} | {t.sector}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {preview && (
          <div className="text-center mt-12">
            <Link
              to="/testimonials"
              className="font-body text-gold font-medium hover:underline text-sm"
            >
              Read All Testimonials &rarr;
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
