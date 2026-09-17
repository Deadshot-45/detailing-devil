import React from "react";
import { Link } from "react-router-dom";
import { Flame, Phone, MapPin, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-surface-container-lowest border-t border-surface-container pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-surface-container">
        {/* Brand Column */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="size-8 rounded-lg bg-linear-to-br from-primary-container to-on-primary flex items-center justify-center border border-[#ffb4a8]/30">
              <Flame className="size-4 text-white" />
            </div>
            <span className="font-montserrat font-extrabold text-base tracking-wider text-white">
              DETAILING <span className="text-[#ffb4a8]">DEVIL</span>
            </span>
          </div>
          <p className="text-xs text-[#8e8d8d] leading-relaxed mb-4">
            Precision automotive conditioning, optical clear coat levelling, and aerospace-grade ceramic coatings engineered for supercar connoisseurs.
          </p>
          <span className="font-label-caps text-[9px] text-outline-variant tracking-widest block">
            INDORE • MADHYA PRADESH
          </span>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-label-caps text-xs text-[#ffb4a8] tracking-widest mb-4">
            SERVICES
          </h4>
          <ul className="space-y-2.5 text-xs text-[#c7c6c6]">
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                9H Ceramic Coating
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Paint Protection Film (PPF)
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Multi-Stage Paint Correction
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-white transition-colors">
                Wheels-Off Caliper Detailing
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-label-caps text-xs text-[#ffb4a8] tracking-widest mb-4">
            EXPERIENCE
          </h4>
          <ul className="space-y-2.5 text-xs text-[#c7c6c6]">
            <li>
              <Link to="/why-us" className="hover:text-white transition-colors">
                Why Detailing Devil
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="hover:text-white transition-colors">
                The Devil's Garage (Portfolio)
              </Link>
            </li>
            <li>
              <Link to="/our-work" className="hover:text-white transition-colors">
                Before &amp; After Inspection
              </Link>
            </li>
            <li>
              <Link to="/process" className="hover:text-white transition-colors">
                The 6-Stage Process
              </Link>
            </li>
            <li>
              <Link to="/reviews" className="hover:text-white transition-colors">
                VIP Client Reviews
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white transition-colors">
                Studio Location &amp; Hours
              </Link>
            </li>
          </ul>
        </div>

        {/* Studio Info */}
        <div>
          <h4 className="font-label-caps text-xs text-[#ffb4a8] tracking-widest mb-4">
            STUDIO CONTACT
          </h4>
          <ul className="space-y-3 text-xs text-[#c7c6c6]">
            <li className="flex items-start gap-2">
              <MapPin className="size-3.5 text-[#ffb4a8] shrink-0 mt-0.5" />
              <span>Nipaniya Main Road, Indore, Madhya Pradesh 452010</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-3.5 text-[#ffb4a8] shrink-0" />
              <a href="tel:+919131644604" className="hover:text-white">
                +91 (0) 9131 644 604
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-3.5 text-[#ffb4a8] shrink-0" />
              <span>concierge@detailingdevil.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Copyright */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8e8d8d]">
        <p>© {new Date().getFullYear()} DETAILING DEVIL. ENGINEERED FOR PERFECTION.</p>
        <div className="flex items-center gap-6">
          <Link to="/contact" className="hover:text-white transition-colors">
            Terms &amp; Warranty
          </Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;