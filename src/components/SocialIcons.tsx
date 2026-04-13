import { Link } from "react-router-dom";
import { Linkedin, Youtube, Facebook, Instagram, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/shankarmridha/", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com/@NayaCode", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com/shankarmridha.nayacode/", label: "Facebook" },
  { icon: Instagram, href: "https://www.instagram.com/shankar_mridha/", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/919860606671", label: "WhatsApp" },
];

const SocialIcons = ({ size = 28, className = "" }: { size?: number; className?: string }) => (
  <div className={`flex items-center gap-6 ${className}`}>
    {socialLinks.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-ivory hover:text-gold transition-colors"
      >
        <Icon size={size} />
      </a>
    ))}
  </div>
);

export default SocialIcons;
export { socialLinks };
