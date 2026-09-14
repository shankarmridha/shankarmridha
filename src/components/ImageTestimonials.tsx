import { useState } from "react";
import { MessageSquare, Linkedin, FileText, Award, X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { imageTestimonials, ImageTestimonialItem } from "@/data/imageTestimonials";

const categories = ["All", "WhatsApp", "LinkedIn", "Handwritten", "Endorsement"] as const;

export const ImageTestimonials = () => {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filteredItems = activeTab === "All"
    ? imageTestimonials
    : imageTestimonials.filter((item) => item.type === activeTab);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : filteredItems.length - 1));
  const next = () => setLightboxIdx((i) => (i !== null && i < filteredItems.length - 1 ? i + 1 : 0));

  const getTypeIcon = (type: ImageTestimonialItem["type"]) => {
    switch (type) {
      case "WhatsApp":
        return <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />;
      case "LinkedIn":
        return <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />;
      case "Handwritten":
        return <FileText className="w-3.5 h-3.5 text-gold" />;
      case "Endorsement":
        return <Award className="w-3.5 h-3.5 text-teal" />;
      default:
        return null;
    }
  };

  const getTypeBadgeClass = (type: ImageTestimonialItem["type"]) => {
    switch (type) {
      case "WhatsApp":
        return "border-[#25D366]/40 text-[#25D366] bg-[#25D366]/10";
      case "LinkedIn":
        return "border-[#0A66C2]/40 text-[#58a6ff] bg-[#0A66C2]/10";
      case "Handwritten":
        return "border-gold/40 text-gold bg-gold/10";
      case "Endorsement":
        return "border-teal/40 text-teal bg-teal/10";
    }
  };

  return (
    <section className="bg-midnight py-20 md:py-24 border-t border-ivory/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-px bg-gold" />
            <span className="font-mono text-gold text-xs tracking-widest uppercase">Verified Artifacts</span>
            <div className="w-10 h-px bg-gold" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl text-ivory mb-4">
            Direct Client Notes &amp; Messages
          </h2>
          <p className="font-body text-ivory/60 text-sm">
            Unfiltered feedback received via WhatsApp messages, LinkedIn recommendations,
            handwritten reflections, and formal client appreciation letters.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`font-body text-xs md:text-sm px-4 py-2 rounded-full border transition-all ${
                activeTab === cat
                  ? "bg-gold text-midnight border-gold font-medium shadow"
                  : "bg-sapphire/40 text-ivory/70 border-ivory/10 hover:border-gold/50 hover:text-ivory"
              }`}
            >
              {cat === "All" ? "All Artifacts" : `${cat} Notes`}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="bg-sapphire/50 border border-ivory/10 hover:border-gold/40 rounded-xl overflow-hidden transition-all flex flex-col group hover:shadow-xl hover:-translate-y-1"
            >
              {/* Image Preview / Fallback container */}
              <div
                className="relative aspect-[4/3] bg-midnight overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => openLightbox(idx)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector(".img-fallback") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />

                {/* Elegant fallback placeholder when image file is awaiting upload */}
                <div
                  className="img-fallback absolute inset-0 bg-gradient-to-br from-sapphire to-midnight p-6 flex flex-col justify-between items-center text-center"
                  style={{ display: "none" }}
                >
                  <div className="w-12 h-12 rounded-full bg-midnight/80 border border-gold/30 flex items-center justify-center mb-2">
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <span className="font-mono text-gold text-xs block mb-1">{item.type} Note</span>
                    <p className="font-display text-ivory text-sm line-clamp-2">{item.title}</p>
                  </div>
                  <span className="font-mono text-ivory/40 text-[10px] mt-2">
                    Click to enlarge
                  </span>
                </div>

                {/* Type Badge on Image */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-1 rounded-md border backdrop-blur-md ${getTypeBadgeClass(
                      item.type
                    )}`}
                  >
                    {getTypeIcon(item.type)}
                    {item.type}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-midnight/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-gold">
                  <ZoomIn className="w-5 h-5" />
                  <span className="font-mono text-xs font-medium">View Artifact</span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-ivory text-base font-semibold mb-2 line-clamp-1">
                    {item.title}
                  </h3>
                  {item.caption && (
                    <p className="font-body text-ivory/70 text-xs leading-relaxed mb-4 line-clamp-2">
                      {item.caption}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-ivory/10 flex items-center justify-between">
                  <div>
                    {item.author && (
                      <p className="font-body text-ivory font-medium text-xs">{item.author}</p>
                    )}
                    {item.organisation && (
                      <p className="font-mono text-gold text-[10px]">{item.organisation}</p>
                    )}
                  </div>
                  {item.sector && (
                    <span className="font-mono text-teal/80 text-[10px] border border-teal/20 px-2 py-0.5 rounded">
                      {item.sector}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIdx !== null && filteredItems[lightboxIdx] && (
          <div
            className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-gold hover:text-ivory transition-colors p-2"
              onClick={closeLightbox}
              aria-label="Close modal"
            >
              <X size={32} />
            </button>
            <button
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-gold hover:text-ivory transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              <ChevronLeft size={44} />
            </button>
            <button
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-gold hover:text-ivory transition-colors p-2"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              <ChevronRight size={44} />
            </button>

            <div
              className="max-w-4xl max-h-[90vh] bg-sapphire border border-gold/30 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4 bg-midnight border-b border-ivory/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-xs px-2.5 py-1 rounded-md border ${getTypeBadgeClass(
                      filteredItems[lightboxIdx].type
                    )}`}
                  >
                    {getTypeIcon(filteredItems[lightboxIdx].type)}
                    {filteredItems[lightboxIdx].type}
                  </span>
                  <span className="font-display text-ivory text-base font-semibold">
                    {filteredItems[lightboxIdx].title}
                  </span>
                </div>
                <span className="font-mono text-ivory/40 text-xs">
                  {lightboxIdx + 1} of {filteredItems.length}
                </span>
              </div>

              <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-midnight/90 min-h-[300px]">
                <img
                  src={filteredItems[lightboxIdx].src}
                  alt={filteredItems[lightboxIdx].title}
                  className="max-h-[60vh] w-auto max-w-full object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.parentElement?.querySelector(".lightbox-fallback") as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div
                  className="lightbox-fallback flex flex-col items-center justify-center text-center p-8 border border-dashed border-gold/40 rounded-xl bg-sapphire/40 max-w-md"
                  style={{ display: "none" }}
                >
                  <div className="w-16 h-16 rounded-full bg-midnight border border-gold/40 flex items-center justify-center mb-4">
                    {getTypeIcon(filteredItems[lightboxIdx].type)}
                  </div>
                  <h4 className="font-display text-ivory text-lg mb-2">
                    {filteredItems[lightboxIdx].title}
                  </h4>
                  <p className="font-body text-ivory/70 text-xs mb-4">
                    {filteredItems[lightboxIdx].caption}
                  </p>
                  <p className="font-mono text-gold text-xs">
                    Place image file in: <code>{filteredItems[lightboxIdx].src}</code>
                  </p>
                </div>
              </div>

              {(filteredItems[lightboxIdx].author || filteredItems[lightboxIdx].caption) && (
                <div className="p-4 bg-midnight/80 border-t border-ivory/10 flex flex-wrap items-center justify-between gap-2">
                  <p className="font-body text-ivory/80 text-xs">
                    {filteredItems[lightboxIdx].caption}
                  </p>
                  <div className="text-right">
                    <p className="font-body text-ivory text-xs font-medium">
                      {filteredItems[lightboxIdx].author}
                    </p>
                    <p className="font-mono text-gold text-[10px]">
                      {filteredItems[lightboxIdx].organisation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageTestimonials;
