import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  Award, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  Navigation, 
  Calendar, 
  ShoppingBag, 
  CheckCircle2, 
  Heart, 
  ChevronRight, 
  Flame, 
  Globe, 
  Utensils, 
  X,
  Share2,
  Instagram,
  Facebook,
  Youtube,
  Mail
} from 'lucide-react';
import { RESTAURANT_INFO, MENU_ITEMS, CUSTOMER_REVIEWS } from './data/restaurantData';
import dalBaatiThaliImg from './assets/images/dal_baati_thali_1786950214150.jpg';
import gheeBaatiImmersionImg from './assets/images/ghee_baati_immersion_1786950229929.jpg';
import { MenuItem, CartItem } from './types';
import { ReservationModal } from './components/ReservationModal';
import { OrderCartDrawer } from './components/OrderCartDrawer';

type LanguageMode = 'en' | 'hi';

export default function App() {
  const [lang, setLang] = useState<LanguageMode>('hi');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [activeItemModal, setActiveItemModal] = useState<MenuItem | null>(null);

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('rj11_landing_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('rj11_landing_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error(e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      setCartItems((prev) => prev.filter((ci) => ci.item.id !== itemId));
    } else {
      setCartItems((prev) =>
        prev.map((ci) => (ci.item.id === itemId ? { ...ci, quantity: newQuantity } : ci))
      );
    }
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const categories = [
    { id: 'all', labelEn: 'All Specialties', labelHi: 'सभी खास व्यंजन' },
    { id: 'thalis', labelEn: 'Royal Thalis', labelHi: 'शाही थालियां' },
    { id: 'baatis', labelEn: 'Signature Baatis', labelHi: 'देसी घी बाटियां' },
    { id: 'curries', labelEn: 'Dal & Sabzi', labelHi: 'पंचमेल दाल व सब्जियां' },
    { id: 'churmas', labelEn: 'Artisan Churmas', labelHi: 'मावा व गुलाब चूरमा' },
    { id: 'beverages', labelEn: 'Chhach & Sides', labelHi: 'मटका छाछ व लस्सी' },
  ];

  const filteredProducts = MENU_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const content = {
    hi: {
      topBanner: 'शुद्ध देसी घी में तैयार • 100% शुद्ध शाकाहारी • बनी पार्क, जयपुर',
      badge: 'RJ 11 • A UNIT OF RJ 11 RESTAURANT',
      greeting: 'खम्मा घणी सा...',
      titleMain: 'राजस्थानी चूरमा',
      titleSub: 'दाल बाटी',
      gheeHighlight: '100% शुद्ध देसी गाय का घी',
      desc: 'जयपुर के हृदय बनी पार्क में स्थित, RJ 11 प्रस्तुत करता है पारंपरिक कंडे की आंच पर सिकी हुई कुरकुरी बाटियां, शुद्ध देसी घी में डूबी हुई, 5 दालों की पंचमेल दाल और स्वादिष्ट हाथ से कुटा हुआ मावा चूरमा।',
      btnBook: 'टेबल बुक करें',
      btnMenu: 'मेन्यू देखें',
      btnOrderWa: 'व्हाट्सएप ऑर्डर',
      statRating: '4.9 ★ रेटिंग',
      statReviews: '4,800+ गूगल समीक्षाएं',
      statPure: '100% शुद्ध देसी घी',
      statHeritage: 'प्रसिद्ध राजस्थानी स्वाद',
      productSectionTitle: 'हमारे प्रमुख उत्पाद व व्यंजन',
      productSectionSub: 'शुद्धता और स्वाद की शाही परंपरा',
      detailsSectionTitle: 'दुकान व रेस्टोरेंट का पूरा विवरण',
      detailsSectionSub: 'आने का समय, पता व संपर्क सूत्र',
      reviewsSectionTitle: 'ग्राहकों के सच्चे अनुभव व समीक्षाएं',
      reviewsSectionSub: 'गूगल व ट्रिपएडवाइजर पर 4.9 स्टार रेटिंग',
      addressLabel: 'रेस्टोरेंट का पता',
      addressVal: 'गायत्री सदन, AC-4, सवाई जय सिंह हाईवे, कलेक्ट्री सर्किल के पास, बनी पार्क, जयपुर, राजस्थान 302028',
      timingsLabel: 'खुलने का समय',
      timingsVal: 'सुबह 11:00 बजे से रात 11:00 बजे तक (सातों दिन खुला)',
      phoneLabel: 'सीधा फोन व बुकिंग नंबर',
      directionBtn: 'गूगल मैप्स पर रास्ता देखें',
      callBtn: 'कॉल करें (8239393901)',
      platterBtn: 'थाली आर्डर करें',
      addToPlatter: '+ थाली में जोड़ें',
      inPlatter: 'थाली में शामिल',
    },
    en: {
      topBanner: 'Cooked in 100% Pure Desi Ghee • Pure Vegetarian • Bani Park, Jaipur',
      badge: 'RJ 11 • A UNIT OF RJ 11 RESTAURANT',
      greeting: 'Khamma Ghani Sa...',
      titleMain: 'Rajasthani Churma',
      titleSub: 'Dal Baati',
      gheeHighlight: '100% Pure Cow Desi Ghee',
      desc: 'Located in the heart of Bani Park, Jaipur. Savor traditional wood-fire baked golden baatis dipped in pure aromatic cow desi ghee, five-lentil Panchmel Dal, and hand-ground Mawa Churma.',
      btnBook: 'Reserve Table',
      btnMenu: 'View Products',
      btnOrderWa: 'WhatsApp Order',
      statRating: '4.9 ★ Rating',
      statReviews: '4,800+ Google Reviews',
      statPure: '100% Pure Desi Ghee',
      statHeritage: 'Royal Rajasthani Heritage',
      productSectionTitle: 'Our Signature Products & Dishes',
      productSectionSub: 'Prepared with authentic royal recipes and pure cow ghee',
      detailsSectionTitle: 'Shop Details & Location',
      detailsSectionSub: 'Visit us in Bani Park or contact directly',
      reviewsSectionTitle: 'Customer Reviews & Ratings',
      reviewsSectionSub: '4.9 Star Average across Google & TripAdvisor',
      addressLabel: 'Restaurant Address',
      addressVal: 'Gayatri Sadan, AC-4, Sawai Jai Singh Highway, Near Collectorate Circle, Bani Park, Jaipur, Rajasthan 302028',
      timingsLabel: 'Operating Hours',
      timingsVal: '11:00 AM – 11:00 PM (Open all 7 days)',
      phoneLabel: 'Direct Phone & Booking',
      directionBtn: 'Get Directions on Maps',
      callBtn: 'Call: 8239393901',
      platterBtn: 'Order Platter',
      addToPlatter: '+ Add to Platter',
      inPlatter: 'Added in Platter',
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#96281B] selection:text-white flex flex-col">
      {/* 1. TOP ANNOUNCEMENT STRIP WITH LANGUAGE TOGGLE */}
      <div className="bg-[#1A1A1A] text-[#FDFCF8] text-[11px] sm:text-xs py-2 px-4 border-b border-[#C5A059]/40 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium tracking-wide truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block shrink-0"></span>
            <span className="truncate">{t.topBanner}</span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#282828] p-0.5 rounded border border-white/20 text-[10px] font-sans font-bold">
              <button
                onClick={() => setLang('hi')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  lang === 'hi'
                    ? 'bg-[#96281B] text-white font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                हिंदी
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  lang === 'en'
                    ? 'bg-[#96281B] text-white font-bold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                ENG
              </button>
            </div>

            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-1.5 text-[#C5A059] font-bold hover:underline"
            >
              <Phone className="w-3 h-3" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. SIMPLE, ENGAGING HEADER / NAVBAR */}
      <header className="bg-[#FDFCF8] border-b border-[#96281B]/15 py-3.5 px-4 sm:px-6 shadow-xs sticky top-[33px] z-40 bg-[#FDFCF8]/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#96281B] border-2 border-[#C5A059] flex flex-col items-center justify-center text-white shadow-xs shrink-0">
              <span className="text-[7px] font-bold text-[#C5A059] leading-none">RJ</span>
              <span className="font-serif text-sm font-bold leading-none text-[#FDFCF8]">11</span>
            </div>
            <div>
              <div className="text-[9px] uppercase font-bold tracking-widest text-[#8C6D3A]">
                A Unit of RJ 11 Restaurant
              </div>
              <div className="font-serif text-lg sm:text-xl font-bold text-[#1A1A1A] leading-tight flex items-baseline gap-1.5 flex-wrap">
                <span>RJ 11</span>
                <span className="text-[#96281B]">राजस्थानी चूरमा दाल बाटी</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-[#FFFDF9] border border-[#1A1A1A]/20 hover:border-[#96281B] rounded text-xs font-bold text-[#1A1A1A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#96281B]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <button
              onClick={() => setIsReservationOpen(true)}
              className="bg-[#96281B] hover:bg-[#7D2116] text-white text-xs uppercase font-bold tracking-wider px-3.5 sm:px-4 py-2 rounded shadow-sm border border-[#C5A059]/40 transition-colors"
            >
              {t.btnBook}
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white text-xs font-bold px-3 py-2 rounded border border-[#C5A059]/30 flex items-center gap-1.5 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
              <span className="hidden sm:inline">{t.platterBtn}</span>
              {totalCartCount > 0 && (
                <span className="bg-[#96281B] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {totalCartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO / LANDING BANNER */}
      <section className="bg-gradient-to-b from-[#FDFCF8] to-[#F5F2ED] py-10 sm:py-16 border-b border-[#1A1A1A]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-[#96281B]/10 border border-[#96281B]/20 px-3 py-1 rounded-full text-xs font-semibold text-[#96281B]">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{t.greeting}</span>
                <span>•</span>
                <span className="text-[#1A1A1A]">{t.badge}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tight leading-[1.05]">
                {t.titleMain} <br />
                <span className="text-[#96281B] italic">{t.titleSub}</span>
              </h1>

              <p className="text-sm sm:text-base text-[#4A4A4A] leading-relaxed max-w-xl mx-auto lg:mx-0">
                {t.desc}
              </p>

              {/* Highlights pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-2">
                <span className="bg-white border border-[#1A1A1A]/15 px-3 py-1 rounded-full text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5 shadow-2xs">
                  <Flame className="w-3.5 h-3.5 text-[#96281B]" />
                  100% शुद्ध देसी घी
                </span>
                <span className="bg-white border border-[#1A1A1A]/15 px-3 py-1 rounded-full text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5 shadow-2xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  100% शुद्ध शाकाहारी (Jain Available)
                </span>
                <span className="bg-white border border-[#1A1A1A]/15 px-3 py-1 rounded-full text-xs font-semibold text-[#1A1A1A] flex items-center gap-1.5 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-[#C5A059] text-[#C5A059]" />
                  4.9 ★ (4,800+ समीक्षाएं)
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="bg-[#96281B] hover:bg-[#7D2116] text-white font-sans font-bold text-xs uppercase tracking-wider px-6 py-3 rounded shadow-md border border-[#C5A059]/40 active:scale-98 transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.btnBook}</span>
                </button>

                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Namaste RJ 11! I want to order Dal Baati / inquire about booking.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded shadow-md border border-white/20 active:scale-98 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.btnOrderWa}</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-white hover:bg-neutral-50 text-[#1A1A1A] border border-[#1A1A1A]/30 font-sans font-bold text-xs uppercase tracking-wider px-5 py-3 rounded active:scale-98 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#96281B]" />
                  <span>{t.callBtn}</span>
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src={dalBaatiThaliImg}
                  alt="RJ 11 Rajasthani Dal Baati Churma Thali"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                  <span className="text-[10px] bg-[#96281B] uppercase font-bold tracking-widest px-2 py-0.5 rounded w-fit mb-1 border border-[#C5A059]">
                    Signature Thali
                  </span>
                  <p className="font-serif text-lg font-bold">
                    RJ 11 राजस्थानी चूरमा दाल बाटी थाली
                  </p>
                  <p className="text-xs text-white/80">
                    4 बाटी, पंचमेल दाल, मावा चूरमा, लहसुन चटनी व मिर्च
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. SHOP DETAILS & QUICK HIGHLIGHTS BAR */}
      <section className="bg-[#1A1A1A] text-[#FDFCF8] py-8 border-b border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
            
            {/* Address Details */}
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-[#282828] border border-[#C5A059]/40 rounded flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#C5A059] block uppercase tracking-wider">
                  {t.addressLabel}
                </span>
                <span className="text-white/80 line-clamp-2">
                  Gayatri Sadan, Sawai Jai Singh Hwy, Bani Park, Jaipur 302028
                </span>
              </div>
            </div>

            {/* Timings */}
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-[#282828] border border-[#C5A059]/40 rounded flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#C5A059] block uppercase tracking-wider">
                  {t.timingsLabel}
                </span>
                <span className="text-white/80">
                  {t.timingsVal}
                </span>
              </div>
            </div>

            {/* Phone Booking */}
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-[#282828] border border-[#C5A059]/40 rounded flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#C5A059]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#C5A059] block uppercase tracking-wider">
                  {t.phoneLabel}
                </span>
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-lg font-serif font-bold text-[#FDFCF8] hover:text-[#C5A059]">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
            </div>

            {/* Google Rating */}
            <div className="flex items-start gap-3 justify-center sm:justify-start">
              <div className="w-9 h-9 bg-[#282828] border border-[#C5A059]/40 rounded flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-[#C5A059] fill-[#C5A059]" />
              </div>
              <div className="text-xs">
                <span className="font-bold text-[#C5A059] block uppercase tracking-wider">
                  Google & TripAdvisor
                </span>
                <span className="text-white/90 font-medium">
                  4.9 ★ Rating (4,890+ Reviews)
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRODUCTS & MENU CATALOG (WITH CATEGORY TABS) */}
      <section id="products" className="py-14 sm:py-20 bg-[#FDFCF8] border-b border-[#1A1A1A]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-12 h-1 bg-[#96281B] mx-auto mb-3"></div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              {t.productSectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] mt-2">
              {t.productSectionSub}
            </p>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center justify-center gap-2 flex-wrap mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#96281B] text-white shadow-sm border border-[#C5A059]/50'
                    : 'bg-[#F5F2ED] text-[#4A4A4A] hover:bg-[#EAE5DC] border border-[#1A1A1A]/10'
                }`}
              >
                {lang === 'hi' ? cat.labelHi : cat.labelEn}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const inCart = cartItems.find((ci) => ci.item.id === product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white border border-[#1A1A1A]/15 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Area */}
                    <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1">
                        {product.isBestSeller && (
                          <span className="bg-[#96281B] text-white text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded shadow-xs">
                            Bestseller
                          </span>
                        )}
                        {product.isChefSpecial && (
                          <span className="bg-[#1A1A1A] text-[#C5A059] text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-[#C5A059]/40 shadow-xs">
                            Chef Special
                          </span>
                        )}
                      </div>

                      <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-xs font-bold text-[#96281B] shadow-xs border border-[#1A1A1A]/10">
                        ₹{product.price}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#1A1A1A] leading-tight">
                            {product.name}
                          </h3>
                          {product.hindiName && (
                            <p className="text-xs font-medium text-[#96281B] mt-0.5">
                              {product.hindiName}
                            </p>
                          )}
                        </div>
                      </div>

                      <p className="text-xs text-[#555] line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="flex items-center gap-2 pt-1 text-[11px] text-[#777]">
                        <span className="bg-[#F5F2ED] px-2 py-0.5 rounded">
                          {product.gheeRichness}
                        </span>
                        <span>•</span>
                        <span>{product.serves}</span>
                      </div>
                    </div>
                  </div>

                  {/* Add to Cart Footer */}
                  <div className="p-4 pt-0">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-2.5 px-3 rounded text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                        inCart
                          ? 'bg-[#1B4332] text-white hover:bg-[#2D6A4F]'
                          : 'bg-[#96281B] text-white hover:bg-[#7D2116]'
                      }`}
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>
                        {inCart ? `${t.inPlatter} (${inCart.quantity})` : t.addToPlatter}
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. COMPLETE LOCATION & SHOP DETAILS SECTION */}
      <section id="location" className="py-14 sm:py-20 bg-[#F5F2ED] border-b border-[#1A1A1A]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="w-12 h-1 bg-[#96281B] mx-auto mb-3"></div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              {t.detailsSectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] mt-2">
              {t.detailsSectionSub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Card: Full Details */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#1A1A1A]/15 shadow-sm space-y-6">
              
              <div className="flex items-center gap-3 pb-4 border-b border-[#1A1A1A]/10">
                <div className="w-12 h-12 rounded-full bg-[#96281B] text-white flex items-center justify-center font-bold text-sm shrink-0 border-2 border-[#C5A059]">
                  RJ 11
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    RJ 11 Rajasthani Churma Dal Baati
                  </h3>
                  <p className="text-xs text-[#8C6D3A] font-bold">
                    A Unit of RJ 11 Restaurant • Bani Park, Jaipur
                  </p>
                </div>
              </div>

              {/* Shop Specs List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#96281B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A]">पूरा पता / Complete Address:</strong>
                    <span className="text-[#555] leading-relaxed">
                      {RESTAURANT_INFO.address}
                    </span>
                    <span className="block text-[11px] text-[#96281B] font-medium mt-1">
                      (कलेक्ट्री सर्किल व जयपुर जंक्शन के पास)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#96281B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A]">समय / Operating Timings:</strong>
                    <span className="text-[#555]">{RESTAURANT_INFO.timings}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#96281B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A]">फोन नंबर / Contact & Delivery:</strong>
                    <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-[#96281B] font-bold font-serif text-lg hover:underline">
                      +91 {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#1A1A1A]">भोजन विशेषता / Dining Standards:</strong>
                    <span className="text-[#555]">
                      100% शुद्ध शाकाहारी, शुद्ध देसी घी, बिना प्याज-लहसुन (जैन भोजन) उपलब्ध, AC डाइनिंग हॉल व पारम्परिक बैठक।
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-[#1A1A1A]/10">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#96281B] hover:bg-[#7D2116] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded shadow-xs flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.directionBtn}</span>
                </a>

                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-[#1A1A1A] hover:bg-[#282828] text-white text-xs font-bold uppercase tracking-wider px-5 py-3 rounded flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>{t.callBtn}</span>
                </a>
              </div>

            </div>

            {/* Right Card: Nearby Key Landmarks & Distances */}
            <div className="lg:col-span-5 bg-[#1A1A1A] text-white p-6 sm:p-8 rounded-2xl border border-[#C5A059]/30 shadow-md space-y-5">
              <h3 className="font-serif text-xl font-bold text-[#C5A059] flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Distance from Jaipur Landmarks
              </h3>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between p-3 bg-[#242424] rounded border border-white/10">
                  <span className="font-medium text-white/90">Jaipur Junction Railway Station</span>
                  <span className="text-[#C5A059] font-bold">1.2 km (5 mins)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#242424] rounded border border-white/10">
                  <span className="font-medium text-white/90">Sindhi Camp Central Bus Stand</span>
                  <span className="text-[#C5A059] font-bold">1.8 km (6 mins)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#242424] rounded border border-white/10">
                  <span className="font-medium text-white/90">Collectorate Circle, Bani Park</span>
                  <span className="text-[#C5A059] font-bold">150 meters (Walking)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#242424] rounded border border-white/10">
                  <span className="font-medium text-white/90">MI Road / Raj Mandir Cinema</span>
                  <span className="text-[#C5A059] font-bold">2.5 km (8 mins)</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-[#242424] rounded border border-white/10">
                  <span className="font-medium text-white/90">City Palace & Hawa Mahal</span>
                  <span className="text-[#C5A059] font-bold">4.8 km (15 mins)</span>
                </div>
              </div>

              <div className="p-4 bg-[#96281B]/40 rounded border border-[#96281B] text-center">
                <p className="text-xs text-white/90 font-medium">
                  पर्यटक बसों व कारों के लिए पर्याप्त पार्किंग सुविधा उपलब्ध है।
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section id="reviews" className="py-14 sm:py-20 bg-[#FDFCF8] border-b border-[#1A1A1A]/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="w-12 h-1 bg-[#96281B] mx-auto mb-3"></div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A]">
              {t.reviewsSectionTitle}
            </h2>
            <p className="text-xs sm:text-sm text-[#4A4A4A] mt-2">
              {t.reviewsSectionSub}
            </p>
          </div>

          {/* Review Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CUSTOMER_REVIEWS.slice(0, 6).map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-5 rounded-xl border border-[#1A1A1A]/15 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={rev.avatar}
                        alt={rev.author}
                        className="w-10 h-10 rounded-full object-cover border border-[#1A1A1A]/20"
                      />
                      <div>
                        <h4 className="font-bold text-xs text-[#1A1A1A] flex items-center gap-1">
                          {rev.author}
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        </h4>
                        <p className="text-[10px] text-[#777]">{rev.city} • {rev.visitType}</p>
                      </div>
                    </div>

                    <div className="flex text-[#C5A059]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#C5A059]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-[#444] leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-[#1A1A1A]/10 flex items-center justify-between text-[11px]">
                  <span className="text-[#888]">{rev.date}</span>
                  <span className="bg-[#F5F2ED] text-[#96281B] font-bold px-2 py-0.5 rounded text-[10px]">
                    {rev.recommendedDish}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Write a review box */}
          <div className="mt-10 text-center bg-[#F5F2ED] p-6 rounded-xl border border-[#1A1A1A]/15 max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="font-bold text-sm text-[#1A1A1A]">
                क्या आपने RJ 11 पर भोजन किया है?
              </h4>
              <p className="text-xs text-[#666]">
                अपना बहुमूल्य अनुभव गूगल पर साझा करें।
              </p>
            </div>
            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-[#96281B] hover:bg-[#7D2116] text-white text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded shadow-xs"
            >
              Write a Google Review
            </a>
          </div>

        </div>
      </section>

      {/* 8. FOOTER WITH SOCIAL LINKS */}
      <footer className="bg-[#141414] text-white pt-14 pb-8 px-4 sm:px-6 border-t border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto space-y-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Col 1: Brand details (5 cols) */}
            <div className="lg:col-span-5 space-y-3 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <div className="w-10 h-10 rounded-full bg-[#96281B] text-white flex flex-col items-center justify-center font-bold text-xs border border-[#C5A059] shrink-0">
                  <span className="text-[7px] text-[#C5A059] leading-none">RJ</span>
                  <span className="font-serif text-xs font-bold leading-none">11</span>
                </div>
                <div>
                  <span className="font-serif text-lg font-bold text-white block leading-tight">
                    RJ 11 राजस्थानी चूरमा दाल बाटी
                  </span>
                  <span className="text-[11px] text-[#C5A059] font-bold">
                    A Unit of RJ 11 Restaurant • Bani Park, Jaipur
                  </span>
                </div>
              </div>

              <p className="text-xs text-white/70 leading-relaxed max-w-md">
                100% शुद्ध देसी घी में तैयार प्रामाणिक राजस्थानी दाल बाटी चूरमा, 14 प्रकार के शाही व्यंजन, जैन अनुकूल भोजन एवं जयपुर में सर्वोत्तम आतिथ्य सेवा।
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-3 text-xs text-[#C5A059]">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Pure Vegetarian • Pure Desi Ghee</span>
              </div>
            </div>

            {/* Col 2: Social Media Handles & Connect (4 cols) */}
            <div className="lg:col-span-4 space-y-3 text-center sm:text-left">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                Follow & Connect With Us
              </h4>
              <p className="text-xs text-white/70">
                सोशल मीडिया पर जुड़ें, दैनिक विशेष थाली अपडेट व ऑफर पाएं:
              </p>

              <div className="flex items-center justify-center sm:justify-start gap-2.5 flex-wrap pt-1">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#E1306C] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="Instagram"
                  title="Follow on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#1877F2] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="Facebook"
                  title="Follow on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#FF0000] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="YouTube"
                  title="Watch Food Vlogs on YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Namaste RJ 11! I would like to place an order / inquire about table reservation.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#25D366] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="WhatsApp"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                {/* Google Maps / Reviews */}
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#4285F4] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="Google Maps Location & Reviews"
                  title="Find on Google Maps"
                >
                  <MapPin className="w-4 h-4" />
                </a>

                {/* Email Support */}
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="w-9 h-9 rounded-full bg-[#222] hover:bg-[#96281B] text-white flex items-center justify-center transition-all border border-white/10 hover:border-transparent hover:scale-110 shadow-xs"
                  aria-label="Email Us"
                  title="Email Inquiry"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Online delivery quick links */}
              <div className="pt-2 flex items-center justify-center sm:justify-start gap-2 text-[11px] text-white/80">
                <span className="text-[#C5A059] font-bold">Order Online:</span>
                <a
                  href={RESTAURANT_INFO.zomatoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 bg-[#E23744]/20 hover:bg-[#E23744] text-white rounded border border-[#E23744]/40 transition-colors font-semibold"
                >
                  Zomato
                </a>
                <a
                  href={RESTAURANT_INFO.swiggyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2 py-0.5 bg-[#FC8019]/20 hover:bg-[#FC8019] text-white rounded border border-[#FC8019]/40 transition-colors font-semibold"
                >
                  Swiggy
                </a>
              </div>
            </div>

            {/* Col 3: Quick Reach & Timings (3 cols) */}
            <div className="lg:col-span-3 space-y-2.5 text-center sm:text-left text-xs text-white/80">
              <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A059] font-bold">
                Quick Contact & Hours
              </h4>
              <p className="flex items-center justify-center sm:justify-start gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-[#C5A059] font-bold text-white text-sm">
                  +91 {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-start justify-center sm:justify-start gap-2 text-white/70">
                <Clock className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>11:00 AM – 11:00 PM (Daily)</span>
              </p>
              <div className="pt-1">
                <button
                  onClick={() => setIsReservationOpen(true)}
                  className="w-full sm:w-auto bg-[#96281B] hover:bg-[#7D2116] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded shadow-xs border border-[#C5A059]/40 transition-colors"
                >
                  Reserve Table Now
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Greeting */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} RJ 11 Rajasthani Churma Dal Baati (A Unit of RJ 11 Restaurant). All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-[#C5A059] font-medium">
              <span className="font-serif">खम्मा घणी सा • Khamma Ghani Sa</span>
              <span>•</span>
              <span className="text-white/80">Bani Park, Jaipur</span>
            </div>
          </div>

        </div>
      </footer>

      {/* RESERVATION MODAL */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* CART / PLATTER DRAWER */}
      <OrderCartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
