import React from 'react';
import { CUSTOMER_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, MessageSquareQuote, CheckCircle, ThumbsUp, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 sm:py-24 bg-[#F5F2ED] border-b border-[#1A1A1A]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="w-16 h-[1.5px] bg-[#96281B] mx-auto mb-4"></div>
          <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A] mb-2">
            GUEST LOVE & STORIES
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] tracking-tight">
            Loved by Jaipurites & <span className="italic text-[#96281B]">Global Travelers</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans">
            With over 4,200+ five-star reviews on Google and TripAdvisor, we take immense pride in every steaming baati served.
          </p>
        </div>

        {/* Rating Summary Bar */}
        <div className="bg-[#1A1A1A] text-[#FDFCF8] border border-[#1A1A1A] p-6 sm:p-8 mb-12 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center text-center md:text-left">
            
            <div className="border-b md:border-b-0 md:border-r border-[#FDFCF8]/15 pb-4 md:pb-0 md:pr-6">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#C5A059]">4.8</span>
                <div className="text-left font-sans">
                  <div className="flex text-[#C5A059]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                    ))}
                  </div>
                  <span className="text-xs text-[#FDFCF8]/70">Out of 5.0 Stars</span>
                </div>
              </div>
              <p className="text-[11px] text-[#FDFCF8]/60 mt-1 font-sans">Based on 4,280+ Verified Ratings</p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#FDFCF8]/15 pb-4 md:pb-0 md:px-6 space-y-1 font-sans">
              <h4 className="text-xs uppercase tracking-wider text-[#C5A059]">
                100% Desi Ghee Purity
              </h4>
              <p className="text-xs text-[#FDFCF8]/75">
                Recognized for authentic cow desi ghee preparation and zero adulteration.
              </p>
            </div>

            <div className="border-b md:border-b-0 md:border-r border-[#FDFCF8]/15 pb-4 md:pb-0 md:px-6 space-y-1 font-sans">
              <h4 className="text-xs uppercase tracking-wider text-[#C5A059]">
                Unlimited Hospitality
              </h4>
              <p className="text-xs text-[#FDFCF8]/75">
                Unlimited Dal, Baati, Churma refills served with warm royal grace.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center font-sans">
              <span className="text-xs text-[#FDFCF8]/70 mb-2 font-medium">Have you dined with us?</span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-[#96281B] hover:bg-[#7D2116] text-white text-xs uppercase tracking-widest px-4 py-2.5 transition-colors shadow-sm"
              >
                Write a Review
              </a>
            </div>

          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CUSTOMER_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FDFCF8] border border-[#1A1A1A]/10 p-6 flex flex-col justify-between"
            >
              <div className="space-y-3 font-sans">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-[#1A1A1A]/15"
                    />
                    <div>
                      <h4 className="font-serif text-base text-[#1A1A1A] flex items-center gap-1.5 font-medium">
                        {rev.author}
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                      </h4>
                      <p className="text-[11px] text-[#767676]">{rev.city} • {rev.visitType}</p>
                    </div>
                  </div>

                  <div className="flex text-[#C5A059]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#C5A059]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#4A4A4A] leading-relaxed italic font-serif">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-xs font-sans">
                <span className="text-[10px] text-[#767676]">{rev.date}</span>
                <span className="text-[11px] text-[#96281B] bg-[#F5F2ED] border border-[#1A1A1A]/10 px-2 py-0.5">
                  Fav Dish: {rev.recommendedDish}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

