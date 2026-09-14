export type TestimonialMediaType = "WhatsApp" | "LinkedIn" | "Handwritten" | "Endorsement" | "All";

export interface ImageTestimonialItem {
  id: string;
  src: string;
  title: string;
  type: "WhatsApp" | "LinkedIn" | "Handwritten" | "Endorsement";
  author?: string;
  role?: string;
  organisation?: string;
  sector?: string;
  caption?: string;
  date?: string;
}

/**
 * Image Testimonials Data Registry
 * Images are located in /public/testimonials/images/
 * Simply drop the screenshot/scan in public/testimonials/images/ and add or modify the entry below.
 */
export const imageTestimonials: ImageTestimonialItem[] = [
  {
    id: "wa-01",
    src: "/testimonials/images/whatsapp-feedback-01.jpg",
    title: "Leadership Breakthrough Feedback",
    type: "WhatsApp",
    author: "Senior Vice President",
    organisation: "Leading BFSI Institution",
    sector: "BFSI",
    caption: "Direct WhatsApp feedback following the 5D Cognitive Diagnostic session.",
    date: "2024",
  },
  {
    id: "linkedin-01",
    src: "/testimonials/images/linkedin-recommendation-01.jpg",
    title: "Strategic Impact Recommendation",
    type: "LinkedIn",
    author: "Chief Human Resources Officer",
    organisation: "Global Technology & Consulting Firm",
    sector: "IT",
    caption: "Public recommendation on the transformative impact of Naya Code™ intervention.",
    date: "2024",
  },
  {
    id: "handwritten-01",
    src: "/testimonials/images/handwritten-note-01.jpg",
    title: "Handwritten Participant Reflection",
    type: "Handwritten",
    author: "Plant Head & GM Operations",
    organisation: "Automotive Manufacturing Leader",
    sector: "Manufacturing",
    caption: "Personal handwritten note expressing shift in leadership decision-making under uncertainty.",
    date: "2023",
  },
  {
    id: "wa-02",
    src: "/testimonials/images/whatsapp-feedback-02.jpg",
    title: "Executive Coaching Milestone",
    type: "WhatsApp",
    author: "Executive Director",
    organisation: "Pharma Healthcare Enterprise",
    sector: "Pharma",
    caption: "Post-coaching WhatsApp reflection on executive clarity and composure.",
    date: "2024",
  },
  {
    id: "endorsement-01",
    src: "/testimonials/images/client-endorsement-01.jpg",
    title: "Formal Client Appreciation",
    type: "Endorsement",
    author: "Head of Learning & Capability",
    organisation: "Energy & Infrastructure Corporation",
    sector: "Power",
    caption: "Official letter of appreciation for pan-India leadership excellence masterclasses.",
    date: "2023",
  },
  {
    id: "linkedin-02",
    src: "/testimonials/images/linkedin-recommendation-02.jpg",
    title: "Masterclass Experience Review",
    type: "LinkedIn",
    author: "Vice President - Technology",
    organisation: "Global Capability Center (GCC)",
    sector: "GCC",
    caption: "LinkedIn post highlighting the clarity gained on AI-Augmented leadership.",
    date: "2024",
  },
];
