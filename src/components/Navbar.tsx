import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Naya Code\u2122", to: "/naya-code" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-midnight shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-display text-xl md:text-2xl text-ivory hover:text-gold transition-colors">
          Shankar Mridha
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-body font-medium text-sm text-ivory hover:text-gold transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-gold after:transition-all ${
                location.pathname === l.to ? "text-gold after:w-full" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-gold text-midnight font-body font-medium text-sm px-5 py-2 rounded hover:opacity-90 transition-opacity"
          >
            Book a Session
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-ivory hover:text-gold transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-midnight border-t border-sapphire">
          <div className="flex flex-col px-6 py-6 gap-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-body font-medium text-ivory hover:text-gold transition-colors ${
                  location.pathname === l.to ? "text-gold" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-gold text-midnight font-body font-medium text-sm px-5 py-2 rounded text-center mt-2"
            >
              Book a Session
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
