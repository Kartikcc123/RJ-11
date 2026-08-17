import React from 'react';
import { Sparkles, Heart, Users, ShieldCheck, Flower2, Clock } from 'lucide-react';

export const RoyalExperience: React.FC = () => {
  const experiences = [
    {
      title: 'Traditional Bajot Floor Dining',
      description: 'Dine in timeless royalty on low wooden carved Bajots with plush velvet bolster cushions and royal brass thalis.',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Air-Conditioned Family Hall',
      description: 'Spacious, elegant dining setup with hand-painted Rajasthani murals, brass chandeliers, and attentive turbaned staff.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'Royal Welcome Ritual',
      description: 'Experience pure "Padharo Mhare Des" hospitality with traditional Chandan Tilak, rose water wash, and warm greetings.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=80',
    },
  ];

  return (
    <section id="experience" className="py-20 sm:py-24 bg-[#1A1A1A] text-[#FDFCF8] relative overflow-hidden border-b border-[#FDFCF8]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#C5A059] mb-2">
            ROYAL HOSPITALITY & AMBIANCE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FDFCF8] tracking-tight">
            The <span className="italic text-[#C5A059]">Rajwadi Dining Experience</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#FDFCF8]/75 leading-relaxed font-sans">
            Step into an authentic sanctuary of Rajasthani culture. From our traditional brass tableware to soothing desert melodies, every moment is crafted to transport you to the royal heritage of Jaipur.
          </p>
        </div>

        {/* 3 Experience Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#242424] border border-[#FDFCF8]/10 overflow-hidden flex flex-col group transition-colors hover:border-[#C5A059]/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-4">
                  <span className="bg-[#1A1A1A]/90 text-[#C5A059] border border-[#C5A059]/40 text-[9px] font-sans uppercase tracking-widest px-2.5 py-1">
                    Bani Park Restaurant
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-light text-[#FDFCF8] group-hover:text-[#C5A059] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#FDFCF8]/70 leading-relaxed mt-2 font-sans">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#FDFCF8]/10 flex items-center gap-2 text-xs text-[#C5A059] font-sans">
                  <Flower2 className="w-3.5 h-3.5 text-[#96281B]" />
                  <span>Royal Marwari Etiquette</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Feature Banner */}
        <div className="mt-14 bg-[#242424] border border-[#C5A059]/40 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="font-serif text-2xl font-light text-[#FDFCF8]">
              Traveling with a Tour Bus or Large Family?
            </h4>
            <p className="text-xs sm:text-sm text-[#FDFCF8]/80 max-w-xl font-sans">
              We easily host tour groups up to 120 guests with dedicated buffet stations, live baati counters, and swift royal service.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-[#96281B] hover:bg-[#7D2116] text-[#FDFCF8] font-sans uppercase text-xs tracking-widest px-6 py-3.5 transition-colors shadow-sm"
          >
            Group Booking Inquiry
          </a>
        </div>

      </div>
    </section>
  );
};

