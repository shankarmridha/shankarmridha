// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// TO ADD REAL PHOTOS:
// 1. Drop image files into /src/assets/gallery/
// 2. Replace each placeholder entry in the galleryItems array below:
//    { src: './assets/gallery/yourfile.jpg', category: 'Workshop', caption: 'Description' }
// 3. Remove the placeholder: true flag from each entry
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  { caption: "Workshop Photo", category: "Workshops", height: "h-64", placeholder: true },
  { caption: "Keynote Photo", category: "Keynotes", height: "h-80", placeholder: true },
  { caption: "Masterclass \u2014 BFSI Client", category: "Masterclasses", height: "h-72", placeholder: true },
  { caption: "Team Session", category: "Workshops", height: "h-64", placeholder: true },
  { caption: "Event Photo", category: "Events", height: "h-80", placeholder: true },
  { caption: "Workshop Photo", category: "Workshops", height: "h-72", placeholder: true },
  { caption: "Keynote \u2014 RBI", category: "Keynotes", height: "h-64", placeholder: true },
  { caption: "Masterclass Photo", category: "Masterclasses", height: "h-80", placeholder: true },
  { caption: "Workshop \u2014 Manufacturing", category: "Workshops", height: "h-72", placeholder: true },
  { caption: "Event Photo", category: "Events", height: "h-64", placeholder: true },
  { caption: "Team Session Photo", category: "Workshops", height: "h-80", placeholder: true },
  { caption: "Keynote Photo", category: "Keynotes", height: "h-72", placeholder: true },
];

const categories = ["All", "Workshops", "Keynotes", "Masterclasses", "Events"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : filtered.length - 1));
  const next = () => setLightboxIdx((i) => (i !== null && i < filtered.length - 1 ? i + 1 : 0));

  return (
    <main>
      {/* HERO */}
      <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "30vh" }}>
        <div className="text-center px-6 py-24">
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-3">In The Room</h1>
          <p className="font-body text-ivory/60">Workshops, masterclasses, keynotes, and conversations.</p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`font-body text-sm px-4 py-2 rounded border transition-colors ${
                  filter === c
                    ? "bg-gold text-midnight border-gold"
                    : "bg-transparent text-midnight border-midnight/30 hover:border-gold"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry grid */}
          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {filtered.map((item, i) => (
              <div
                key={`${item.caption}-${i}`}
                className={`bg-sapphire rounded-lg flex items-center justify-center cursor-pointer break-inside-avoid ${item.height} hover:opacity-80 transition-opacity`}
                onClick={() => openLightbox(i)}
              >
                <span className="font-mono text-ivory text-sm text-center px-4">{item.caption}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div className="fixed inset-0 z-50 bg-midnight/95 flex items-center justify-center" onClick={closeLightbox}>
          <button className="absolute top-6 right-6 text-gold hover:opacity-80" onClick={closeLightbox}>
            <X size={32} />
          </button>
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-gold hover:opacity-80" onClick={(e) => { e.stopPropagation(); prev(); }}>
            <ChevronLeft size={40} />
          </button>
          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-gold hover:opacity-80" onClick={(e) => { e.stopPropagation(); next(); }}>
            <ChevronRight size={40} />
          </button>
          <div className="bg-sapphire rounded-lg w-[80vw] h-[60vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <span className="font-mono text-ivory text-lg">{filtered[lightboxIdx]?.caption}</span>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
