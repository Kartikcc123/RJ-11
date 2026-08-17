import React from 'react';
import { Flame, Sparkles, Award, ShieldCheck, HeartHandshake, History, Quote } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const HeritageStory: React.FC = () => {
  const pillars = [
    {
      icon: Flame,
      title: 'Charcoal & Clay Oven Baking',
      description: 'Baatis are slow-baked over earthen cow-dung and charcoal embers for authentic rustic crunch and smokey depth.',
    },
    {
      icon: Sparkles,
      title: '100% Pure Cow Desi Ghee',
      description: 'Every baati is cracked open steaming hot and submerged in fragrant, unadulterated desi ghee for supreme tenderness.',
    },
    {
      icon: ShieldCheck,
      title: 'Sacred 5-Lentil Panchmel',
      description: 'A nutritional powerhouse of Toor, Moong, Chana, Urad, and Masoor dals slow-simmered for 4 hours with whole spices.',
    },
    {
      icon: HeartHandshake,
      title: 'Atithi Devo Bhava Hospitality',
      description: 'Unlimited royal servings with genuine Marwari warmth, welcoming every traveler like an honored palace guest.',
    },
  ];

  return (
    <section id="story" className="py-20 bg-[#FDFCF8] border-b border-[#1A1A1A]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heritage Imagery collage */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Primary Image Frame */}
              <div className="relative overflow-hidden border border-[#1A1A1A]/10 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
                  alt="Dal Baati Jaipur Heritage Restaurant Bani Park"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/85 via-transparent to-transparent" />
                
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="bg-[#96281B] text-[#FDFCF8] text-[9px] font-sans uppercase tracking-[0.2em] px-2.5 py-1 inline-block mb-2">
                    ESTD. {RESTAURANT_INFO.established} • BANI PARK
                  </span>
                  <h4 className="font-serif text-xl font-light text-[#FDFCF8]">
                    Gayatri Sadan, Sawai Jai Singh Highway
                  </h4>
                  <p className="text-xs text-[#FDFCF8]/70 font-sans mt-0.5">
                    Bani Park, Near Collectorate Circle, Jaipur
                  </p>
                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-8 bg-[#1A1A1A] text-[#FDFCF8] border border-[#C5A059]/40 p-5 shadow-2xl max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#96281B] flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 text-[#FDFCF8]" />
                  </div>
                  <div>
                    <h5 className="font-serif text-base text-[#C5A059]">
                      Jaipur Culinary Pride
                    </h5>
                    <p className="text-[11px] text-[#FDFCF8]/70 font-sans mt-1 leading-relaxed">
                      Loved by 50,000+ travelers & local food connoisseurs every year.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Story Text & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="w-16 h-[1.5px] bg-[#96281B] mb-2"></div>

            <p className="text-xs uppercase tracking-[0.25em] font-sans text-[#4A4A4A]">
              OUR ANCESTRAL LEGACY
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#1A1A1A] leading-tight tracking-tight">
              Preserving Rajasthan's <br />
              <span className="italic text-[#96281B]">Timeless Culinary Art</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#4A4A4A] leading-relaxed font-sans font-normal">
              <p>
                Located in the historic culinary hub of <strong>Bani Park, Jaipur</strong>, <em>RJ 11 Rajasthani Churma Dal Baati</em> (A Unit of RJ 11 Restaurant) was founded with a singular, uncompromising mission: to serve the most authentic, royal-grade Rajasthani Thali using age-old ancestral recipes.
              </p>
              <p>
                In an era of commercial short-cuts and refined oils, we honor tradition by using only <strong>100% pure cow desi ghee</strong>, stone-ground flours, and indigenous desert spices from Mathania and Nagaur.
              </p>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-4 transition-all hover:border-[#96281B]/40"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-7 h-7 bg-[#96281B]/10 text-[#96281B] flex items-center justify-center shrink-0">
                      <pillar.icon className="w-3.5 h-3.5 text-[#96281B]" />
                    </div>
                    <h4 className="font-serif text-sm font-medium text-[#1A1A1A]">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#4A4A4A] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Editorial Quote banner */}
            <div className="bg-[#F5F2ED] border-l-2 border-[#96281B] p-4 text-[#1A1A1A] flex items-start gap-3">
              <Quote className="w-5 h-5 text-[#96281B] shrink-0 mt-0.5" />
              <p className="text-sm font-serif italic text-[#1A1A1A] leading-relaxed">
                "Dal Baati Churma is not just a meal in Jaipur; it is an emotion of warmth, royal heritage, and timeless hospitality."
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

