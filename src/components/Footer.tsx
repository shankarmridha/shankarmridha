import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";

const footerNav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Naya Code\u2122", to: "/naya-code" },
  { label: "Services", to: "/services" },
  { label: "Clients", to: "/clients" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Footer = () => (
  <footer className="bg-midnight pt-16 pb-6">
    <div className="container mx-auto px-6 max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Left */}
        <div>
          <p className="font-display text-xl text-ivory">Shankar Mridha</p>
          <p className="font-mono text-gold text-sm mt-1">Naya Code&trade;</p>
          <p className="font-body text-sm text-muted-foreground mt-2">
            Margdarshak for Modern Leaders
          </p>
        </div>

        {/* Centre */}
        <div className="flex flex-col items-center text-center gap-4">
          <p className="font-body text-sm text-muted-foreground">
            Helping Leaders Think Better &amp; Lead Smarter
          </p>
          <SocialIcons size={24} />
        </div>

        {/* Right */}
        <div className="flex flex-col items-start md:items-end gap-2">
          {footerNav.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="font-body text-sm text-muted-foreground hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-gold/30 pt-6 text-center">
        <p className="font-mono text-xs text-muted-foreground">
          &copy; 2025 Shankar Mridha. All rights reserved. &nbsp;|&nbsp; www.shankarmridha.com
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
