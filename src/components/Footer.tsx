import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { UtensilsCrossed, Phone, Mail, MapPin, Clock, Heart, ShieldCheck, Sparkles } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
  onOpenCart: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReservation,
  onOpenCart,
}) => {
  return (
    <footer className="bg-[#1A1A1A] text-[#FDFCF8] border-t border-[#FDFCF8]/15 relative overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Col 1: Brand & Legacy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#96281B] border border-[#FDFCF8]/20 flex flex-col items-center justify-center shrink-0 text-white font-bold leading-none">
                <span className="text-[9px] text-[#C5A059] font-sans">RJ</span>
                <span className="font-serif text-xs text-white">11</span>
              </div>
              <div>
                <span className="font-serif text-lg font-bold tracking-wide text-[#FDFCF8] block leading-none">
                  RJ 11 राजस्थानी चूरमा दाल बाटी
                </span>
                <span className="text-[11px] text-[#C5A059] font-sans">
                  A Unit of RJ 11 Restaurant • Bani Park
                </span>
              </div>
            </div>

            <p className="text-xs text-[#FDFCF8]/70 leading-relaxed font-sans">
              Authentic Rajasthani Churma Dal Baati prepared in 100% pure desi ghee. Savor wood-fire baked golden baatis dipped in fragrant pure cow ghee, slow-cooked Panchmel dal, and hand-ground royal mawa churmas.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-[#C5A059]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Pure Vegetarian & Pure Desi Ghee</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFCF8]/75">
              <li><a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a></li>
              <li><a href="#thali-platter" className="hover:text-[#C5A059] transition-colors">Royal Thali Guide</a></li>
              <li><a href="#story" className="hover:text-[#C5A059] transition-colors">Our Culinary Story</a></li>
              <li><a href="#menu" className="hover:text-[#C5A059] transition-colors">Full Food Menu</a></li>
              <li><a href="#experience" className="hover:text-[#C5A059] transition-colors">Dining Ambiance</a></li>
              <li><a href="#catering" className="hover:text-[#C5A059] transition-colors">Event & Catering</a></li>
              <li><a href="#gallery" className="hover:text-[#C5A059] transition-colors">Photo Gallery</a></li>
              <li><a href="#faqs" className="hover:text-[#C5A059] transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Col 3: Royal Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#FDFCF8]/75">
              <li>• Unlimited Rajwadi Royal Thali</li>
              <li>• Traditional Panchmel Royal Dal</li>
              <li>• Shahi Mawa & Rose Petal Churma</li>
              <li>• Marwadi Ker Sangri</li>
              <li>• Jodhpur Govind Gatta Curry</li>
              <li>• Bajre Ki Roti with White Butter</li>
              <li>• Matka Masala Chhach & Kesar Lassi</li>
              <li>• 48-Hour Train Journey Food Box</li>
            </ul>
          </div>

          {/* Col 4: Reach Us & Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              Contact & Hours
            </h4>
            <div className="space-y-2.5 text-xs text-[#FDFCF8]/75">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Gayatri Sadan, Sawai Jai Singh Hwy, Bani Park, Jaipur 302028</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#C5A059]">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <span>11:00 AM – 11:00 PM (Daily)</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenReservation}
                className="w-full bg-[#96281B] hover:bg-[#7D2116] text-white text-xs uppercase tracking-widest py-2.5 text-center transition-colors shadow-sm"
              >
                Book a Table
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright and Rajasthani Greeting */}
        <div className="mt-14 pt-6 border-t border-[#FDFCF8]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FDFCF8]/60">
          <p>
            © {new Date().getFullYear()} RJ 11 Rajasthani Churma Dal Baati (A Unit of RJ 11 Restaurant). All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[#C5A059] font-serif">खम्मा घणी सा • Khamma Ghani Sa</span>
            <span>•</span>
            <span>100% Pure Desi Ghee</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

