import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

// Photos live in /public/gallery/ — served as /gallery/<filename> at runtime.
// To add more: drop the file into public/gallery/ and add an entry below.
const galleryItems = [
  { src: "/gallery/gallery-2026-01.jpg",  caption: "Programme Session",        category: "Workshops" },
  { src: "/gallery/gallery-2025-01.jpg",  caption: "Leadership Workshop",      category: "Workshops" },
  { src: "/gallery/gallery-2025-02.jpg",  caption: "Masterclass Session",      category: "Masterclasses" },
  { src: "/gallery/gallery-2025-03.jpg",  caption: "Event",                    category: "Events" },
  { src: "/gallery/gallery-2024-01.jpg",  caption: "Workshop Session",         category: "Workshops" },
  { src: "/gallery/gallery-2024-02.jpg",  caption: "Keynote Address",          category: "Keynotes" },
  { src: "/gallery/gallery-2023-01.jpg",  caption: "Masterclass",              category: "Masterclasses" },
  { src: "/gallery/gallery-2023-02.jpg",  caption: "Workshop",                 category: "Workshops" },
  { src: "/gallery/gallery-2023-03.jpg",  caption: "Event",                    category: "Events" },
  { src: "/gallery/gallery-2023-04.jpg",  caption: "Event Session",            category: "Events" },
  { src: "/gallery/gallery-2023-05.jpg",  caption: "Session",                  category: "Workshops" },
  { src: "/gallery/gallery-2022-01.jpg",  caption: "Workshop",                 category: "Workshops" },
  { src: "/gallery/gallery-2022-02.jpg",  caption: "Leadership Programme",     category: "Workshops" },
  { src: "/gallery/gallery-2021-01.jpg",  caption: "Team Session",             category: "Workshops" },
  { src: "/gallery/gallery-2021-02.jpg",  caption: "Masterclass",              category: "Masterclasses" },
  { src: "/gallery/gallery-2021-03.jpg",  caption: "Workshop Session",         category: "Workshops" },
  { src: "/gallery/gallery-2019-01.jpg",  caption: "Programme",                category: "Workshops" },
  { src: "/gallery/gallery-2019-02.jpg",  caption: "Session",                  category: "Workshops" },
  { src: "/gallery/gallery-2018-01.jpg",  caption: "Workshop",                 category: "Workshops" },
  { src: "/gallery/gallery-2018-02.jpg",  caption: "Event",                    category: "Events" },
  { src: "/gallery/gallery-2015-01.jpg",  caption: "Early Programme",          category: "Workshops" },
  { src: "/gallery/gallery-2015-02.jpg",  caption: "Early Session",            category: "Workshops" },
  { src: "/gallery/gallery-dsc-01.jpg",   caption: "Masterclass",              category: "Masterclasses" },
  { src: "/gallery/gallery-dsc-02.jpg",   caption: "Workshop",                 category: "Workshops" },
  { src: "/gallery/gallery-dsc-03.jpg",   caption: "Keynote",                  category: "Keynotes" },
  { src: "/gallery/gallery-dsc-04.jpg",   caption: "Event",                    category: "Events" },
  { src: "/gallery/gallery-dsc-05.jpg",   caption: "Session",                  category: "Workshops" },
  { src: "/gallery/gallery-event-01.jpg", caption: "Event",                    category: "Events" },
  { src: "/gallery/gallery-img-01.jpg",   caption: "Workshop",                 category: "Workshops" },
  { src: "/gallery/gallery-mg-01.jpg",    caption: "Keynote Address",          category: "Keynotes" },
  { src: "/gallery/gallery-skp-01.jpg",   caption: "Masterclass",              category: "Masterclasses" },
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
                key={`${item.src}-${i}`}
                className="relative rounded-lg overflow-hidden cursor-pointer break-inside-avoid hover:opacity-90 transition-opacity group"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto object-cover block"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-midnight/70 px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-ivory text-xs">{item.caption}</span>
                  <span className="font-mono text-gold text-[10px] ml-2">{item.category}</span>
                </div>
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
          <div
            className="max-w-[85vw] max-h-[85vh] flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIdx]?.src}
              alt={filtered[lightboxIdx]?.caption}
              className="max-w-full max-h-[78vh] object-contain rounded-lg"
            />
            <p className="font-mono text-ivory text-sm">{filtered[lightboxIdx]?.caption}</p>
          </div>
        </div>
      )}
    </main>
  );
};

export default Gallery;
