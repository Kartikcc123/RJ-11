import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/restaurantData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            FREQUENTLY ASKED QUESTIONS
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-[#1A1A1A] tracking-tight">
            Everything You Need <span className="italic text-[#96281B]">to Know</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed font-sans">
            Planning your visit to Dal Baati Jaipur? Here are quick answers for dining, catering, and travel food parcels.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 font-sans">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-[#FDFCF8] border border-[#1A1A1A]/10 overflow-hidden transition-all"
              >
                <button
                  id={`faq-btn-${idx}`}
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-[#F5F2ED] transition-colors"
                >
                  <span className="font-serif text-base sm:text-lg font-light text-[#1A1A1A] flex items-center gap-3">
                    <span className="text-xs uppercase tracking-wider text-[#96281B] font-sans font-medium">
                      0{idx + 1}
                    </span>
                    {item.question}
                  </span>
                  <div className="shrink-0 text-[#1A1A1A]">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#96281B]" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4A4A4A] leading-relaxed border-t border-[#1A1A1A]/10 bg-[#FDFCF8] animate-fadeIn font-sans">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

