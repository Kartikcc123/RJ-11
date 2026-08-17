import React, { useState } from 'react';
import { THALI_COMPONENTS } from '../data/restaurantData';
import { ThaliComponent } from '../types';
import { Sparkles, Info, Flame, Heart, CheckCircle2, ChevronRight } from 'lucide-react';

interface InteractiveThaliPlatterProps {
  onSelectMenuItem?: (itemId: string) => void;
}

export const InteractiveThaliPlatter: React.FC<InteractiveThaliPlatterProps> = () => {
  const [selectedComponent, setSelectedComponent] = useState<ThaliComponent>(THALI_COMPONENTS[0]);

  return (
    <section id="thali-platter" className="py-20 bg-[#FDFCF8] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            CURATED DEGUSTATION
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Anatomy of the <span className="italic text-[#96281B]">Royal Rajwadi Thali</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            Every element in our traditional Rajasthani thali is thoughtfully paired for nutritional balance, rich flavors, and royal satiety. Select any course below to inspect its heritage preparation.
          </p>
        </div>

        {/* Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Dish Selector Grid in Editorial Surface */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-6 sm:p-8 h-full flex flex-col justify-between">
              
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1A1A1A]/10">
                  <span className="text-xs uppercase tracking-[0.18em] font-sans font-medium text-[#96281B] flex items-center gap-2">
                    <Info className="w-3.5 h-3.5" />
                    Select a Course to Inspect
                  </span>
                  <span className="text-xs uppercase tracking-widest font-sans text-[#4A4A4A]">
                    {THALI_COMPONENTS.length} Courses
                  </span>
                </div>

                {/* Course Buttons Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {THALI_COMPONENTS.map((item) => {
                    const isSelected = selectedComponent.id === item.id;
                    return (
                      <button
                        key={item.id}
                        id={`thali-item-${item.id}`}
                        onClick={() => setSelectedComponent(item)}
                        className={`text-left p-3.5 border transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-[#96281B] text-white border-[#96281B] shadow-md'
                            : 'bg-[#FDFCF8] hover:bg-white text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#96281B]/40'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-1 mb-2">
                          <span className={`text-[9px] uppercase tracking-wider font-sans px-1.5 py-0.5 ${
                            isSelected ? 'bg-white/20 text-[#FDFCF8]' : 'bg-[#1A1A1A]/5 text-[#4A4A4A]'
                          }`}>
                            {item.category}
                          </span>
                          {isSelected && (
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          )}
                        </div>

                        <div>
                          <p className={`font-serif text-sm leading-snug line-clamp-1 ${
                            isSelected ? 'text-white font-medium' : 'text-[#1A1A1A]'
                          }`}>
                            {item.name}
                          </p>
                          <p className={`font-hindi text-xs mt-0.5 ${
                            isSelected ? 'text-[#C5A059]' : 'text-[#96281B]'
                          }`}>
                            {item.hindiName}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Desi Ghee Assurance Banner */}
              <div className="mt-6 bg-[#FDFCF8] border border-[#1A1A1A]/10 p-3.5 flex items-center justify-between text-xs text-[#4A4A4A]">
                <div className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#96281B] shrink-0" />
                  <span>Served with <strong>unlimited warm desi cow ghee</strong> upon your request.</span>
                </div>
                <span className="font-hindi text-[#96281B] hidden sm:inline">स्वाद शुद्धता का</span>
              </div>
            </div>
          </div>

          {/* Right: Detailed Card for Selected Dish */}
          <div className="lg:col-span-5">
            <div className="bg-[#1A1A1A] text-[#FDFCF8] border border-[#1A1A1A] p-6 sm:p-8 h-full flex flex-col justify-between">
              
              <div>
                <div className="relative h-48 sm:h-56 overflow-hidden mb-6 border border-[#FDFCF8]/15">
                  <img
                    src={selectedComponent.image}
                    alt={selectedComponent.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-[#96281B] text-white text-[10px] font-sans uppercase tracking-widest px-2.5 py-1">
                      {selectedComponent.category}
                    </span>
                    <span className="bg-[#1A1A1A]/90 text-[#C5A059] text-[10px] font-sans uppercase tracking-widest px-2.5 py-1 border border-[#C5A059]/40 flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#C5A059]" />
                      {selectedComponent.gheeFactor}
                    </span>
                  </div>
                </div>

                {/* Dish Titles */}
                <div className="space-y-1 mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FDFCF8]">
                    {selectedComponent.name}
                  </h3>
                  <p className="font-hindi text-base text-[#C5A059]">
                    {selectedComponent.hindiName}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#FDFCF8]/80 leading-relaxed font-sans">
                  {selectedComponent.description}
                </p>

                {/* Taste Profile Box */}
                <div className="mt-4 bg-white/5 border-l-2 border-[#C5A059] p-3 space-y-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#C5A059]">
                    FLAVOR & TEXTURE PROFILE:
                  </p>
                  <p className="text-xs text-[#FDFCF8]/90 italic font-serif">
                    "{selectedComponent.tasteNote}"
                  </p>
                </div>
              </div>

              {/* Bottom Action / Note */}
              <div className="mt-6 pt-4 border-t border-[#FDFCF8]/10 flex items-center justify-between text-xs">
                <span className="text-[#FDFCF8]/70 flex items-center gap-1.5 font-sans">
                  <Heart className="w-3.5 h-3.5 text-[#96281B] fill-[#96281B]" />
                  Unlimited servings in Rajwadi Thali
                </span>
                <a
                  href="#menu"
                  className="font-sans uppercase tracking-widest text-[#C5A059] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View in Menu</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

