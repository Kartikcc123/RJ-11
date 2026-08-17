import React, { useState } from 'react';
import { CATERING_PACKAGES, RESTAURANT_INFO } from '../data/restaurantData';
import { Sparkles, Users, Check, Phone, ArrowRight, Flame, HeartHandshake } from 'lucide-react';

export const CateringEstimator: React.FC = () => {
  const [selectedPkgId, setSelectedPkgId] = useState<string>('cat-gold');
  const [guestCount, setGuestCount] = useState<number>(60);
  const [liveJalebi, setLiveJalebi] = useState<boolean>(true);
  const [jainCounter, setJainCounter] = useState<boolean>(true);
  const [eventDate, setEventDate] = useState<string>('');

  const currentPkg = CATERING_PACKAGES.find((p) => p.id === selectedPkgId) || CATERING_PACKAGES[1];

  // Calculations
  const baseCost = currentPkg.pricePerPlate * guestCount;
  const addonCost = (liveJalebi ? 50 * guestCount : 0) + (jainCounter ? 30 * guestCount : 0);
  const totalCost = baseCost + addonCost;

  const handleSendWhatsAppInquiry = () => {
    const addonsList: string[] = [];
    if (liveJalebi) addonsList.push('Live Jalebi Counter (+₹50/plate)');
    if (jainCounter) addonsList.push('Dedicated Jain Counter (+₹30/plate)');

    const msg = `*Namaste RJ 11 Rajasthani Churma Dal Baati!* 🙏
I would like to inquire about Rajasthani Catering for an upcoming event.

*Package:* ${currentPkg.name} (₹${currentPkg.pricePerPlate}/plate)
*Number of Guests:* ${guestCount} people
*Tentative Date:* ${eventDate || 'To be decided'}
*Add-ons:* ${addonsList.length > 0 ? addonsList.join(', ') : 'None'}
*Estimated Budget:* ₹${totalCost.toLocaleString('en-IN')}

Please share available dates and final quotation. Khamma Ghani Sa!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <section id="catering" className="py-20 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            JAIPUR ROYAL CATERING
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Royal Catering & <span className="italic text-[#96281B]">Event Feasts</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            Bring the authentic aroma of live clay-oven Dal Baati Churma to your weddings, sangeet, anniversaries, corporate banquets, and housewarmings across Jaipur & Rajasthan.
          </p>
        </div>

        {/* Packages Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CATERING_PACKAGES.map((pkg) => {
            const isSelected = selectedPkgId === pkg.id;
            return (
              <div
                key={pkg.id}
                onClick={() => setSelectedPkgId(pkg.id)}
                className={`cursor-pointer p-7 transition-all flex flex-col justify-between relative border ${
                  isSelected
                    ? 'bg-[#1A1A1A] text-[#FDFCF8] border-[#1A1A1A] shadow-lg'
                    : 'bg-[#FDFCF8] text-[#1A1A1A] border-[#1A1A1A]/10 hover:border-[#1A1A1A]/40'
                }`}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 right-6 bg-[#96281B] text-white font-sans text-[9px] uppercase tracking-widest px-3 py-1">
                    Most Popular Choice
                  </span>
                )}

                <div>
                  <h3 className={`font-serif text-2xl font-light ${
                    isSelected ? 'text-[#C5A059]' : 'text-[#1A1A1A]'
                  }`}>
                    {pkg.name}
                  </h3>
                  
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className={`font-serif text-3xl font-light ${
                      isSelected ? 'text-[#FDFCF8]' : 'text-[#96281B]'
                    }`}>
                      ₹{pkg.pricePerPlate}
                    </span>
                    <span className={`text-xs font-sans ${isSelected ? 'text-[#FDFCF8]/60' : 'text-[#767676]'}`}>
                      / plate (Min. {pkg.minGuests} guests)
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="mt-6 space-y-3 font-sans">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                          isSelected ? 'text-[#C5A059]' : 'text-[#96281B]'
                        }`} />
                        <span className={isSelected ? 'text-[#FDFCF8]/85' : 'text-[#4A4A4A]'}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className={`mt-8 w-full py-2.5 text-xs uppercase tracking-widest font-sans transition-all ${
                    isSelected
                      ? 'bg-[#96281B] text-white'
                      : 'bg-[#F5F2ED] text-[#1A1A1A] border border-[#1A1A1A]/15 hover:bg-[#1A1A1A] hover:text-white'
                  }`}
                >
                  {isSelected ? '✓ Selected Package' : 'Select Package'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Live Estimator & WhatsApp Inquiry Box */}
        <div className="bg-[#FDFCF8] border border-[#1A1A1A]/10 p-6 sm:p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-4 h-4 text-[#96281B]" />
            <h3 className="font-serif text-2xl font-light text-[#1A1A1A]">
              Interactive Catering Cost Estimator
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left Controls */}
            <div className="space-y-5 font-sans">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs uppercase tracking-wider text-[#1A1A1A] font-medium">
                    Number of Guests:
                  </label>
                  <span className="font-serif text-lg text-[#96281B] bg-[#F5F2ED] border border-[#1A1A1A]/10 px-3 py-0.5">
                    {guestCount} Guests
                  </span>
                </div>
                <input
                  id="guest-slider"
                  type="range"
                  min="25"
                  max="500"
                  step="5"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-1.5 bg-[#E5E0D8] appearance-none cursor-pointer accent-[#96281B]"
                />
                <div className="flex justify-between text-[10px] text-[#767676] mt-1">
                  <span>25 Guests (Intimate Gathering)</span>
                  <span>500+ Guests (Grand Wedding)</span>
                </div>
              </div>

              {/* Event Date */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#1A1A1A] block mb-1 font-medium">
                  Tentative Event Date:
                </label>
                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full bg-[#F5F2ED] border border-[#1A1A1A]/15 px-3.5 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                />
              </div>

              {/* Optional Add-ons */}
              <div>
                <label className="text-xs uppercase tracking-wider text-[#1A1A1A] block mb-2 font-medium">
                  Popular Live Add-ons:
                </label>
                <div className="space-y-2.5">
                  <label className="flex items-center gap-2.5 text-xs text-[#4A4A4A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={liveJalebi}
                      onChange={(e) => setLiveJalebi(e.target.checked)}
                      className="rounded-none text-[#96281B] focus:ring-[#96281B] w-4 h-4 accent-[#96281B]"
                    />
                    <span>Live Desi Ghee Jalebi & Rabdi Counter (+₹50/plate)</span>
                  </label>

                  <label className="flex items-center gap-2.5 text-xs text-[#4A4A4A] cursor-pointer">
                    <input
                      type="checkbox"
                      checked={jainCounter}
                      onChange={(e) => setJainCounter(e.target.checked)}
                      className="rounded-none text-[#96281B] focus:ring-[#96281B] w-4 h-4 accent-[#96281B]"
                    />
                    <span>Dedicated Sattvic Jain Live Counter (+₹30/plate)</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary & WhatsApp CTA */}
            <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-6 flex flex-col justify-between space-y-5 font-sans">
              <div className="space-y-3">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#96281B] border-b border-[#1A1A1A]/10 pb-1.5">
                  COST BREAKDOWN
                </h4>
                
                <div className="flex justify-between text-xs text-[#4A4A4A]">
                  <span>{currentPkg.name} ({guestCount} × ₹{currentPkg.pricePerPlate}):</span>
                  <span className="font-medium text-[#1A1A1A]">₹{baseCost.toLocaleString('en-IN')}</span>
                </div>

                {addonCost > 0 && (
                  <div className="flex justify-between text-xs text-[#4A4A4A]">
                    <span>Selected Live Add-ons:</span>
                    <span className="font-medium text-[#1A1A1A]">₹{addonCost.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="pt-4 border-t border-[#1A1A1A]/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#1A1A1A] block font-medium">
                      Estimated Total:
                    </span>
                    <span className="text-[10px] text-[#767676]">(Includes live chef & royal setup)</span>
                  </div>
                  <span className="font-serif text-3xl font-light text-[#96281B]">
                    ₹{totalCost.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  id="send-catering-whatsapp-btn"
                  onClick={handleSendWhatsAppInquiry}
                  className="w-full bg-[#1A1A1A] hover:bg-[#96281B] text-white font-sans uppercase text-xs tracking-widest py-3 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
                <p className="text-[10px] text-center text-[#767676]">
                  Direct catering line: <strong>{RESTAURANT_INFO.phone}</strong>
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

