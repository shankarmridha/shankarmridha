import { useState } from "react";
import { Linkedin, Youtube, Facebook, Instagram, MessageCircle } from "lucide-react";

const programmeOptions = [
  "Naya Code\u2122 Leadership Programme",
  "5D Collective Intelligence\u2122 Diagnostic",
  "AI-Augmented Leadership Workshop",
  "Multi-Intelligence Masterclass",
  "Train the Trainer",
  "GCC Leadership Architecture",
  "Executive Coaching",
  "Other / General Enquiry",
];

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shankarmridha/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@NayaCode", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/shankarmridha.nayacode/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/shankar_mridha/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919860606671", label: "WhatsApp" },
];

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Replace FORM_ENDPOINT with your Formspree or similar endpoint
    // For now, just show success message
    setSubmitted(true);
  };

  return (
    <main>
      {/* HERO */}
      <section className="bg-midnight flex items-center justify-center" style={{ minHeight: "30vh" }}>
        <div className="text-center px-6 py-24">
          <h1 className="font-display text-4xl md:text-5xl text-ivory mb-3">
            Let&rsquo;s Think Better Together
          </h1>
          <p className="font-body text-ivory/60">
            For corporate workshops, executive coaching, or strategic partnerships.
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="bg-ivory py-20 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Left — Direct connect */}
            <div>
              <a
                href="https://wa.me/919860606671"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-body font-medium text-lg px-6 py-4 rounded-lg mb-4 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#25D366", color: "#F5F0E8" }}
              >
                <MessageCircle size={24} />
                Message on WhatsApp
              </a>
              <p className="font-body text-body-light text-sm mb-8">
                Fastest way to reach me. Available for corporate enquiries.
              </p>

              {/* Display address is public; mailto routes to forwarding address */}
              <div className="mb-4">
                <p className="font-body text-body-light text-sm mb-1">Email</p>
                <a href="mailto:sm.july335@passinbox.com" className="font-mono text-midnight text-sm hover:text-gold transition-colors">
                  shankar.mridha@gmail.com
                </a>
              </div>

              <div className="mb-8">
                <p className="font-body text-body-light text-sm mb-1">Phone</p>
                <a href="tel:+919860606671" className="font-mono text-midnight text-sm hover:text-gold transition-colors">
                  +91 98606 06671
                </a>
              </div>

              <div className="flex items-center gap-5">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="text-midnight hover:text-gold transition-colors">
                    <Icon size={28} />
                  </a>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              {submitted ? (
                <div className="bg-sapphire rounded-lg p-12 text-center">
                  <p className="font-body text-ivory text-lg">
                    Thank you. I will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <input type="text" required placeholder="Full Name"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors" />
                  <input type="text" required placeholder="Organisation"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors" />
                  <input type="text" placeholder="Role / Designation"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors" />
                  <input type="email" required placeholder="Email"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors" />
                  <input type="tel" placeholder="Phone (optional)"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors" />
                  <select required defaultValue=""
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors">
                    <option value="" disabled>Programme Interest</option>
                    {programmeOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                  <textarea required rows={4} placeholder="Message"
                    className="w-full bg-ivory border border-midnight rounded px-4 py-3 font-body text-body-light text-sm focus:border-gold focus:outline-none transition-colors resize-none" />
                  <button type="submit"
                    className="bg-gold text-midnight font-body font-medium text-sm px-8 py-3 rounded hover:opacity-90 transition-opacity">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
