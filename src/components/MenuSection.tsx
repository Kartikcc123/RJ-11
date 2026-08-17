import React, { useState, useMemo } from 'react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Search, Sparkles, Flame, Plus, Minus, Check, Info, X, ShieldCheck, Heart, Utensils } from 'lucide-react';

interface MenuSectionProps {
  onAddToCart: (item: MenuItem) => void;
  cartItemQuantities: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddToCart,
  cartItemQuantities,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jainOnly, setJainOnly] = useState<boolean>(false);
  const [bestsellersOnly, setBestsellersOnly] = useState<boolean>(false);
  const [activeModalItem, setActiveModalItem] = useState<MenuItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Delicacies' },
    { id: 'thalis', label: 'Royal Thalis' },
    { id: 'baatis', label: 'Signature Baatis' },
    { id: 'curries', label: 'Shahi Curries & Dal' },
    { id: 'churmas', label: 'Artisanal Churmas' },
    { id: 'breads', label: 'Traditional Breads' },
    { id: 'beverages', label: 'Chhaach, Lassi & Sides' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesHindi = item.hindiName ? item.hindiName.includes(q) : false;
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesIngr = item.ingredients.some(ing => ing.toLowerCase().includes(q));
        if (!matchesName && !matchesHindi && !matchesDesc && !matchesIngr) {
          return false;
        }
      }
      // Jain filter
      if (jainOnly && !item.isJainAvailable) {
        return false;
      }
      // Bestseller filter
      if (bestsellersOnly && !item.isBestSeller && !item.isChefSpecial) {
        return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, jainOnly, bestsellersOnly]);

  return (
    <section id="menu" className="py-20 sm:py-24 bg-[#FDFCF8] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            PURE VEGETARIAN • PURE DESI GHEE
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Our Authentic <span className="italic text-[#96281B]">Rajasthani Menu</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            Prepared fresh daily in our Bani Park kitchen with stone-ground flours, Mathania chillies, roasted whole spices, and unadulterated cow desi ghee.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-5 mb-10 space-y-4">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
            {/* Search Input */}
            <div className="md:col-span-6 relative">
              <Search className="w-4 h-4 text-[#4A4A4A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="menu-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search dishes (e.g., Panchmel Dal, Mawa Churma, Ker Sangri)..."
                className="w-full bg-[#FDFCF8] border border-[#1A1A1A]/15 pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#1A1A1A] placeholder-[#767676] font-sans focus:outline-none focus:border-[#96281B]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase font-sans tracking-wider text-[#96281B]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Toggle Filters */}
            <div className="md:col-span-6 flex items-center justify-start md:justify-end gap-2.5 flex-wrap">
              <button
                id="filter-jain-toggle"
                onClick={() => setJainOnly(!jainOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-sans uppercase tracking-wider border transition-all ${
                  jainOnly
                    ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                    : 'bg-[#FDFCF8] text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Jain (No Onion/Garlic)</span>
                {jainOnly && <Check className="w-3 h-3 ml-0.5" />}
              </button>

              <button
                id="filter-bestsellers-toggle"
                onClick={() => setBestsellersOnly(!bestsellersOnly)}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-sans uppercase tracking-wider border transition-all ${
                  bestsellersOnly
                    ? 'bg-[#96281B] text-white border-[#96281B]'
                    : 'bg-[#FDFCF8] text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#96281B]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Specials & Bestsellers</span>
                {bestsellersOnly && <Check className="w-3 h-3 ml-0.5" />}
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-2 no-scrollbar border-t border-[#1A1A1A]/10">
            {categories.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs uppercase tracking-widest font-sans whitespace-nowrap transition-all ${
                    active
                      ? 'bg-[#96281B] text-white font-medium'
                      : 'bg-[#FDFCF8] text-[#4A4A4A] hover:text-[#1A1A1A] border border-[#1A1A1A]/10'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#F5F2ED] border border-[#1A1A1A]/10 p-8">
            <p className="text-sm text-[#4A4A4A] font-sans">No dishes match your filter criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setJainOnly(false);
                setBestsellersOnly(false);
              }}
              className="mt-3 text-xs uppercase tracking-widest text-[#96281B] underline font-sans"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => {
              const quantityInCart = cartItemQuantities[item.id] || 0;
              return (
                <div
                  key={item.id}
                  id={`menu-card-${item.id}`}
                  className="bg-[#FDFCF8] border border-[#1A1A1A]/10 overflow-hidden card-hover-shadow flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Top Badges */}
                    <div className="relative h-48 sm:h-52 overflow-hidden bg-[#F5F2ED]">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5">
                        {item.isBestSeller && (
                          <span className="bg-[#96281B] text-white font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
                            Bestseller
                          </span>
                        )}
                        {item.isChefSpecial && (
                          <span className="bg-[#1A1A1A] text-[#C5A059] font-sans text-[9px] uppercase tracking-widest px-2 py-0.5 border border-[#C5A059]/40">
                            Chef Special
                          </span>
                        )}
                        {item.isJainAvailable && (
                          <span className="bg-[#2D6A4F] text-white font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
                            Jain Option
                          </span>
                        )}
                      </div>

                      {/* Desi Ghee Pill */}
                      <div className="absolute bottom-2.5 left-2.5 bg-[#1A1A1A]/90 text-[#FDFCF8] text-[10px] font-sans uppercase tracking-wider px-2 py-0.5 flex items-center gap-1 border border-[#FDFCF8]/20">
                        <Flame className="w-3 h-3 text-[#C5A059]" />
                        <span>{item.gheeRichness}</span>
                      </div>

                      {/* Info Modal Button */}
                      <button
                        onClick={() => setActiveModalItem(item)}
                        className="absolute top-2.5 right-2.5 bg-[#FDFCF8]/90 hover:bg-white text-[#1A1A1A] p-1.5 transition-all hover:scale-105"
                        title="View details & ingredients"
                      >
                        <Info className="w-3.5 h-3.5 text-[#96281B]" />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-2.5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-lg font-normal text-[#1A1A1A] group-hover:text-[#96281B] transition-colors line-clamp-1">
                            {item.name}
                          </h3>
                          {item.hindiName && (
                            <p className="font-hindi text-xs text-[#96281B]">
                              {item.hindiName}
                            </p>
                          )}
                        </div>
                        <div className="text-right shrink-0">
                          <span className="font-serif text-xl font-light text-[#96281B]">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#4A4A4A] leading-relaxed line-clamp-2 font-sans">
                        {item.description}
                      </p>

                      {/* Meta Tags */}
                      <div className="flex items-center justify-between text-[11px] text-[#767676] pt-2 border-t border-[#1A1A1A]/5 font-sans">
                        <span className="flex items-center gap-1">
                          <span>Spice:</span>
                          <span className="flex">
                            {[...Array(3)].map((_, i) => (
                              <Flame
                                key={i}
                                className={`w-3 h-3 ${
                                  i < item.spiceLevel
                                    ? 'text-[#96281B] fill-[#96281B]'
                                    : 'text-[#D0C9C0]'
                                }`}
                              />
                            ))}
                          </span>
                        </span>
                        <span>Serves: <strong>{item.serves}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Platter Action */}
                  <div className="p-5 pt-0">
                    <button
                      id={`add-btn-${item.id}`}
                      onClick={() => onAddToCart(item)}
                      className={`w-full py-2.5 px-4 font-sans text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${
                        quantityInCart > 0
                          ? 'bg-[#1A1A1A] text-[#FDFCF8]'
                          : 'bg-[#96281B] hover:bg-[#7D2116] text-white shadow-sm'
                      }`}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>{quantityInCart > 0 ? `In Platter (${quantityInCart}) • Add More` : 'Add to Platter'}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Item Detail Modal */}
      {activeModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FDFCF8] border border-[#1A1A1A]/20 max-w-lg w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-3 right-3 z-10 bg-black/70 hover:bg-black text-white p-2 transition-all"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative h-56">
              <img
                src={activeModalItem.image}
                alt={activeModalItem.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="bg-[#96281B] text-white font-sans text-[9px] uppercase tracking-widest px-2 py-0.5">
                  {activeModalItem.category}
                </span>
                <h3 className="font-serif text-2xl font-light text-[#FDFCF8] mt-1">
                  {activeModalItem.name}
                </h3>
                <p className="font-hindi text-sm text-[#C5A059]">{activeModalItem.hindiName}</p>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#96281B] mb-1">
                  CULINARY DESCRIPTION
                </h4>
                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed font-sans">
                  {activeModalItem.longDescription || activeModalItem.description}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#96281B] mb-2">
                  AUTHENTIC INGREDIENTS
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeModalItem.ingredients.map((ing, idx) => (
                    <span
                      key={idx}
                      className="bg-[#F5F2ED] text-[#1A1A1A] border border-[#1A1A1A]/10 text-xs px-2.5 py-1 font-sans"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1A1A1A]/10 text-center font-sans">
                <div className="bg-[#F5F2ED] p-2">
                  <span className="text-[9px] uppercase tracking-wider text-[#767676] block">Ghee Level</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">{activeModalItem.gheeRichness}</span>
                </div>
                <div className="bg-[#F5F2ED] p-2">
                  <span className="text-[9px] uppercase tracking-wider text-[#767676] block">Spice</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">
                    {activeModalItem.spiceLevel === 1 ? 'Mild' : activeModalItem.spiceLevel === 2 ? 'Medium' : 'Authentic'}
                  </span>
                </div>
                <div className="bg-[#F5F2ED] p-2">
                  <span className="text-[9px] uppercase tracking-wider text-[#767676] block">Jain Friendly</span>
                  <span className="text-xs font-semibold text-[#1A1A1A]">
                    {activeModalItem.isJainAvailable ? 'Available' : 'Standard'}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <div>
                  <span className="text-[10px] uppercase font-sans tracking-widest text-[#767676] block">Price</span>
                  <span className="font-serif text-2xl font-light text-[#96281B]">
                    ₹{activeModalItem.price}
                  </span>
                </div>
                <button
                  onClick={() => {
                    onAddToCart(activeModalItem);
                    setActiveModalItem(null);
                  }}
                  className="bg-[#96281B] hover:bg-[#7D2116] text-white font-sans uppercase text-xs tracking-widest px-6 py-3 transition-colors shadow-sm"
                >
                  Add to Royal Order
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

