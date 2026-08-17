import React from 'react';
import { Phone, MapPin, Clock, Sparkles, Heart } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const TopBanner: React.FC = () => {
  return (
    <div id="top-banner" className="bg-[#1A1A1A] text-[#FDFCF8] text-[11px] uppercase tracking-[0.15em] font-sans py-2 px-4 border-b border-[#FDFCF8]/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
          <span className="flex items-center gap-1.5 text-[#C5A059] font-medium">
            <Sparkles className="w-3 h-3 text-[#C5A059]" />
            100% Pure Desi Ghee & Vegetarian
          </span>
          <span className="hidden md:inline-block text-[#FDFCF8]/30">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-[#FDFCF8]/80">
            <Clock className="w-3 h-3 text-[#C5A059]" />
            {RESTAURANT_INFO.timings}
          </span>
          <span className="hidden lg:inline-block text-[#FDFCF8]/30">•</span>
          <span className="hidden lg:flex items-center gap-1.5 text-[#FDFCF8]/80 truncate max-w-sm">
            <MapPin className="w-3 h-3 text-[#C5A059] shrink-0" />
            Bani Park, Jaipur (Near Collectorate Circle)
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:flex items-center gap-1.5 text-[#FDFCF8]/70">
            <Heart className="w-2.5 h-2.5 text-[#96281B] fill-[#96281B]" />
            Established 1994 • Bani Park
          </span>
          <a
            id="top-banner-call-btn"
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="flex items-center gap-1.5 text-[#FDFCF8] hover:text-[#C5A059] font-medium bg-[#96281B] px-3 py-0.5 tracking-widest text-[10px] hover:bg-[#7D2116] transition-colors"
          >
            <Phone className="w-2.5 h-2.5 text-[#C5A059]" />
            <span>Call: {RESTAURANT_INFO.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

