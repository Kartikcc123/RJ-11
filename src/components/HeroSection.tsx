import React from 'react';
import { Sparkles, Star, Utensils, Calendar, ChevronRight, Award, Flame, HeartHandshake, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import dalBaatiThaliImg from '../assets/images/dal_baati_thali_1786950214150.jpg';

interface HeroSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
  onOrderOnline: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenReservation,
  onExploreMenu,
  onOrderOnline,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FDFCF8] text-[#1A1A1A] border-b border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          
          {/* Left Column (7 cols): Editorial Typography & Actions */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center relative">
            
            {/* Editorial Crimson Hairline Accent */}
            <div className="w-24 h-[1.5px] bg-[#96281B] mb-6"></div>

            <div className="flex items-center gap-2.5 flex-wrap mb-3">
              <span className="bg-[#96281B] text-white text-[11px] font-sans font-bold px-2.5 py-0.5 tracking-wider">
                RJ 11
              </span>
              <span className="font-hindi text-sm text-[#96281B] font-bold">खम्मा घणी सा...</span>
              <span className="text-[#4A4A4A] text-xs">•</span>
              <span className="text-xs uppercase tracking-[0.2em] font-sans text-[#4A4A4A]">A Unit of RJ 11 Restaurant</span>
            </div>

            {/* Main Editorial Headline with Serif & Italic Brass Accent */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-tight text-[#1A1A1A] mb-6">
              राजस्थानी चूरमा <br />
              <span className="italic font-light text-[#C5A059]">दाल बाटी</span> <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl font-sans font-medium text-[#1A1A1A]/80 tracking-normal">
                100% Pure Desi Ghee
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg leading-relaxed text-[#4A4A4A] max-w-xl mb-8 font-sans font-normal">
              RJ 11 Rajasthani Churma Dal Baati brings you the authentic royal taste of Rajasthan. Handcrafted wood-fired Baatis immersed in rich pure desi cow ghee, slow-simmered Panchmel Dal, and heavenly Mawa Churma.
            </p>

            {/* Editorial Action Buttons */}
            <div className="flex flex-wrap gap-3.5 sm:gap-4 mb-10">
              <button
                id="hero-reserve-table-btn"
                onClick={onOpenReservation}
                className="px-7 py-3.5 bg-[#96281B] text-white font-sans uppercase text-xs tracking-widest hover:bg-[#7D2116] transition-colors shadow-sm active:scale-98"
              >
                Reserve a Table
              </button>

              <button
                id="hero-explore-menu-btn"
                onClick={onExploreMenu}
                className="px-7 py-3.5 border border-[#1A1A1A] text-[#1A1A1A] font-sans uppercase text-xs tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors active:scale-98"
              >
                Explore Menu
              </button>

              <button
                id="hero-order-whatsapp-btn"
                onClick={onOrderOnline}
                className="px-6 py-3.5 bg-[#F5F2ED] border border-[#C5A059]/50 text-[#1A1A1A] hover:border-[#96281B] hover:text-[#96281B] font-sans uppercase text-xs tracking-widest transition-colors active:scale-98"
              >
                Travel Packaging / Platter
              </button>
            </div>

            {/* Editorial Metric Spread with Light Italics */}
            <div className="grid grid-cols-3 gap-6 border-t border-[#1A1A1A]/10 pt-6">
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light italic text-[#96281B] mb-0.5">100%</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider font-sans text-[#4A4A4A]">Pure Desi Ghee</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light italic text-[#96281B] mb-0.5">Wood-Fired</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider font-sans text-[#4A4A4A]">Clay Oven Baatis</p>
              </div>
              <div>
                <p className="font-serif text-2xl sm:text-3xl font-light italic text-[#96281B] mb-0.5">4.8 ★</p>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider font-sans text-[#4A4A4A]">4,280+ Reviews</p>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): Editorial Visual Frame & Circular Heritage Seal */}
          <div className="lg:col-span-5 bg-[#F5F2ED] relative overflow-hidden flex items-center justify-center p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-[#1A1A1A]/10">
            
            {/* Subtle Vertical Heritage Label */}
            <div className="absolute top-6 right-6 hidden sm:block">
              <p className="writing-mode-vertical text-[9px] uppercase tracking-[0.4em] text-[#1A1A1A]/30 font-sans rotate-180">
                ROYAL RAJASTHANI HERITAGE
              </p>
            </div>

            {/* Concentric Editorial Visual Frame */}
            <div className="relative my-4">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-[0.5px] border-[#96281B]/30 flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full border border-[#96281B]/60 flex items-center justify-center bg-white shadow-xl overflow-hidden relative group">
                  <img
                    src={dalBaatiThaliImg}
                    alt="RJ 11 Rajasthani Churma Dal Baati Thali"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-5 text-center text-white">
                    <span className="text-[9px] font-sans uppercase tracking-widest text-[#C5A059] mb-1">
                      Signature Experience
                    </span>
                    <p className="font-serif text-lg italic leading-tight text-white">
                      The Royal Rajwadi Thali
                    </p>
                    <p className="text-[9px] uppercase tracking-tighter text-[#FDFCF8]/80 font-sans mt-0.5">
                      Panchmel Dal • Pure Ghee Baati • Churma
                    </p>
                  </div>
                </div>
              </div>

              {/* Heritage Circular Seal Badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#96281B] text-[#FDFCF8] p-4 rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center text-center leading-tight shadow-xl border border-[#FDFCF8]/20">
                <p className="text-[9px] sm:text-[10px] font-sans uppercase tracking-widest font-light">Since</p>
                <p className="font-serif text-base sm:text-lg font-bold italic text-[#C5A059]">1994</p>
                <p className="text-[8px] uppercase tracking-tighter font-sans opacity-75">Bani Park</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

