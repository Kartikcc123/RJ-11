import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Camera, X, Sparkles, ZoomIn } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const tabs = [
    { id: 'all', label: 'All Photos' },
    { id: 'food', label: 'Royal Thalis & Dishes' },
    { id: 'ambiance', label: 'Bani Park Ambiance' },
    { id: 'kitchen', label: 'Clay Oven Kitchen' },
    { id: 'guests', label: 'Guest Memories' },
  ];

  const filteredItems = activeTab === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FDFCF8] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            VISUAL EXPERIENCE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Glimpses of <span className="italic text-[#96281B]">Dal Baati Jaipur</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            Take a visual tour of our royal brass thalis, authentic wood-charcoal baking, and joyful dining moments in Bani Park.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs uppercase tracking-widest font-sans transition-all ${
                activeTab === tab.id
                  ? 'bg-[#96281B] text-white font-medium'
                  : 'bg-[#F5F2ED] text-[#4A4A4A] hover:text-[#1A1A1A] border border-[#1A1A1A]/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="cursor-pointer group relative h-64 sm:h-72 overflow-hidden border border-[#1A1A1A]/10 bg-[#F5F2ED]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white" />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform text-white">
                <span className="bg-[#96281B] text-white text-[9px] font-sans uppercase tracking-widest px-2 py-0.5">
                  {item.category}
                </span>
                <h4 className="font-serif text-base font-light text-[#FDFCF8] mt-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-[#FDFCF8]/80 line-clamp-1 font-sans">
                  {item.caption}
                </p>
              </div>

              <div className="absolute top-3 right-3 bg-black/60 text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4 text-[#C5A059]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="relative max-w-3xl w-full bg-[#1A1A1A] border border-[#FDFCF8]/20 overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black text-white p-2.5 transition-all"
            >
              <X className="w-5 h-5 text-[#C5A059]" />
            </button>

            <div className="relative max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                className="w-full h-full object-contain max-h-[70vh]"
              />
            </div>

            <div className="p-6 text-white bg-[#242424] border-t border-[#FDFCF8]/10 font-sans">
              <span className="bg-[#96281B] text-white text-[9px] uppercase tracking-widest px-2.5 py-0.5">
                {lightboxItem.category}
              </span>
              <h3 className="font-serif text-2xl font-light text-[#FDFCF8] mt-2">
                {lightboxItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FDFCF8]/80 mt-1">
                {lightboxItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

