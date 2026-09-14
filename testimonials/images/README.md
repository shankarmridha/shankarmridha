# Client Image Testimonials Repository

Store visual testimonials here, including:
1. **WhatsApp Messages** (e.g. `wa-01.jpg`, `wa-leadership-feedback.png`)
2. **LinkedIn Comments & Recommendations** (e.g. `linkedin-recommendation-01.png`)
3. **Handwritten Notes & Letters** (e.g. `handwritten-note-01.jpg`)
4. **Certificates & Client Endorsements** (e.g. `endorsement-01.jpg`)

---

## File Naming Convention & Formats
- Place image files directly in this directory (`public/testimonials/images/`).
- Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`.
- Use descriptive kebab-case file names (e.g., `whatsapp-vp-bfsi.png`, `linkedin-chro-mfg.png`, `handwritten-director-pharma.jpg`).

---

## Adding Images to the Website
Edit `src/data/imageTestimonials.ts` to add or update items:
```ts
{
  src: "/testimonials/images/your-file-name.jpg",
  title: "Feedback on Naya Code™ Masterclass",
  type: "WhatsApp" | "LinkedIn" | "Handwritten" | "Endorsement",
  author: "Senior Leader / VP",
  organisation: "Organisation Name (Optional)",
  date: "2024"
}
```
All added image testimonials will automatically appear with interactive lightbox zoom on the **What Leaders Say (/testimonials)** page.
