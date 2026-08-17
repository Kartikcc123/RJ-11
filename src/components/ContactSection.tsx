import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { MapPin, Phone, Mail, Clock, Navigation, Send, CheckCircle2, Car, Train, Building } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    inquiryType: 'General Inquiry',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const landmarks = [
    { name: 'Jaipur Junction Railway Station', distance: '1.2 km (5 mins)', icon: Train },
    { name: 'Sindhi Camp Central Bus Stand', distance: '1.8 km (6 mins)', icon: Car },
    { name: 'Collectorate Circle, Bani Park', distance: '150 meters (Walking)', icon: MapPin },
    { name: 'MI Road / Raj Mandir Cinema', distance: '2.5 km (8 mins)', icon: Building },
    { name: 'City Palace & Hawa Mahal', distance: '4.8 km (15 mins)', icon: Building },
    { name: 'Jaipur International Airport', distance: '13.5 km (30 mins)', icon: Navigation },
  ];

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FDFCF8] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            FIND US IN JAIPUR
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Visit <span className="italic text-[#96281B]">RJ 11 Rajasthani Churma Dal Baati</span> in Bani Park
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            Located in the heart of Bani Park, just 5 minutes from Jaipur Junction Railway Station. Ample parking space available for cars and tourist buses.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Location & Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Primary Address Box */}
            <div className="bg-[#1A1A1A] text-[#FDFCF8] border border-[#1A1A1A] p-7 sm:p-8 shadow-md">
              <h3 className="font-serif text-2xl font-light text-[#FDFCF8] mb-5 flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0" />
                Restaurant Address & Timings
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#FDFCF8]/80 font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#242424] border border-[#FDFCF8]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Building className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Gayatri Sadan, AC-4, Sawai Jai Singh Highway</strong>
                    <span>Near Collectorate Circle, Bani Park, Jaipur, Rajasthan 302028</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#242424] border border-[#FDFCF8]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Operating Hours:</strong>
                    <span>{RESTAURANT_INFO.timings}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-[#242424] border border-[#FDFCF8]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  </div>
                  <div>
                    <strong className="text-white block font-medium">Direct Reservations & Inquiries:</strong>
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#C5A059] hover:underline font-serif text-lg">
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t border-[#FDFCF8]/15 font-sans">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#96281B] hover:bg-[#7D2116] text-white uppercase text-xs tracking-widest px-4 py-2.5 flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-[#242424] hover:bg-[#303030] text-[#FDFCF8] uppercase text-xs tracking-widest px-4 py-2.5 border border-[#FDFCF8]/20 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>

            {/* Distance from Jaipur Landmarks Grid */}
            <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-6">
              <h4 className="text-[10px] uppercase tracking-[0.2em] font-sans text-[#96281B] mb-4 flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#96281B]" />
                DISTANCE FROM KEY JAIPUR LANDMARKS
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {landmarks.map((lm, idx) => (
                  <div key={idx} className="bg-[#FDFCF8] p-3 flex items-center gap-3 border border-[#1A1A1A]/10">
                    <div className="w-8 h-8 bg-[#F5F2ED] flex items-center justify-center shrink-0">
                      <lm.icon className="w-4 h-4 text-[#96281B]" />
                    </div>
                    <div className="font-sans">
                      <p className="text-xs text-[#1A1A1A] font-medium">{lm.name}</p>
                      <p className="text-[11px] text-[#767676]">{lm.distance}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-5 bg-[#F5F2ED] border border-[#1A1A1A]/10 p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-light text-[#1A1A1A] mb-1">
              Send Us a Message
            </h3>
            <p className="text-xs text-[#4A4A4A] mb-6 font-sans">
              Have questions about wedding catering, tour bus group bookings, or train journey food boxes?
            </p>

            {formSent ? (
              <div className="text-center py-10 space-y-3 font-sans">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-light text-[#1A1A1A]">
                  Message Received
                </h4>
                <p className="text-xs text-[#4A4A4A]">
                  Our Bani Park manager will connect with you shortly on <strong>{formData.phone || 'your phone'}</strong>.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs text-[#96281B] underline uppercase tracking-wider font-sans mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Aniruddh Mathur"
                    className="w-full bg-[#FDFCF8] border border-[#1A1A1A]/15 px-3.5 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98290 12345"
                    className="w-full bg-[#FDFCF8] border border-[#1A1A1A]/15 px-3.5 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full bg-[#FDFCF8] border border-[#1A1A1A]/15 px-3.5 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  >
                    <option value="General Inquiry">General Dining Inquiry</option>
                    <option value="Wedding / Event Catering">Wedding / Event Catering</option>
                    <option value="Tour Bus / Large Group">Tour Bus / Large Group (20+ Pax)</option>
                    <option value="Train Travel Food Box">Train Travel Food Box Packing</option>
                    <option value="Feedback">Feedback / Review</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Your Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what you need..."
                    className="w-full bg-[#FDFCF8] border border-[#1A1A1A]/15 px-3.5 py-2.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#96281B] hover:bg-[#7D2116] text-white uppercase text-xs tracking-widest py-3 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

