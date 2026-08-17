import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Calendar, ShoppingBag, Menu as MenuIcon, X, Phone, MapPin, Sparkles, Crown, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu & Thalis', href: '#menu' },
    { label: 'Royal Platter', href: '#thali-platter' },
    { label: 'Our Heritage', href: '#story' },
    { label: 'Experience', href: '#experience' },
    { label: 'Catering', href: '#catering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-md border-b border-[#96281B]/15 py-2.5'
          : 'bg-[#FDFCF8] text-[#1A1A1A] border-b border-[#96281B]/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Emblem & Typography */}
        <a
          id="nav-brand-logo"
          href="#home"
          className="flex items-center gap-3 group shrink-0"
        >
          {/* Royal Seal Badge */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full p-[2px] bg-gradient-to-br from-[#C5A059] via-[#96281B] to-[#7D2116] shadow-sm group-hover:shadow-md transition-all">
            <div className="w-full h-full bg-[#96281B] rounded-full flex flex-col items-center justify-center text-white border border-[#C5A059]/60">
              <span className="text-[8px] font-sans font-bold tracking-widest text-[#C5A059] leading-none">RJ</span>
              <span className="font-serif text-base sm:text-lg font-bold leading-none text-[#FDFCF8] -mt-0.5">11</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#C5A059] rounded-full flex items-center justify-center shadow-xs">
              <Crown className="w-2 h-2 text-[#1A1A1A]" />
            </div>
          </div>

          {/* Brand Name Text Block */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-[#8C6D3A] font-sans">
                A Unit of RJ 11 Restaurant
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1B4332]" title="100% Pure Vegetarian"></span>
            </div>

            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-tight">
                RJ 11
              </span>
              <span className="font-serif text-base sm:text-xl font-bold text-[#96281B] leading-tight whitespace-nowrap">
                राजस्थानी चूरमा दाल बाटी
              </span>
            </div>

            <span className="text-[10px] text-[#555] font-sans hidden sm:inline-block">
              Bani Park, Jaipur • <strong className="text-[#96281B] font-medium">100% Pure Desi Ghee</strong>
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] xl:text-xs uppercase tracking-[0.14em] font-sans font-medium text-[#333] hover:text-[#96281B] hover:bg-[#96281B]/5 px-3 py-1.5 rounded transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#96281B] group-hover:w-4/5 transition-all duration-200"></span>
            </a>
          ))}
        </nav>

        {/* Right Actions Block */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Quick Call Pill (Visible on md+) */}
          <a
            id="nav-quick-call-btn"
            href={`tel:${RESTAURANT_INFO.phone}`}
            className="hidden md:flex items-center gap-2 px-3 py-1.5 border border-[#C5A059]/40 bg-[#FFFDF9] hover:bg-[#F5EFE6] rounded-full text-[#1A1A1A] transition-all shadow-2xs group"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <Phone className="w-3.5 h-3.5 text-[#96281B] group-hover:scale-110 transition-transform" />
            <span className="font-sans font-bold text-xs tracking-wider text-[#1A1A1A]">
              {RESTAURANT_INFO.phone}
            </span>
          </a>

          {/* Reserve Table Button */}
          <button
            id="nav-reserve-btn"
            onClick={onOpenReservation}
            className="flex items-center gap-1.5 sm:gap-2 bg-[#96281B] hover:bg-[#7D2116] text-white font-sans font-semibold uppercase text-[11px] sm:text-xs tracking-wider px-3.5 sm:px-4 py-2 sm:py-2.5 rounded shadow-sm border border-[#C5A059]/40 active:scale-95 transition-all cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden xs:inline">Reserve Table</span>
            <span className="xs:hidden">Book</span>
          </button>

          {/* Platter / Cart Button */}
          <button
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-1.5 sm:gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-white font-sans uppercase text-[11px] sm:text-xs tracking-wider px-3 sm:px-3.5 py-2 sm:py-2.5 rounded border border-[#C5A059]/30 active:scale-95 transition-all cursor-pointer shadow-2xs"
            aria-label="View Order Platter"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
            <span className="hidden sm:inline font-medium">Platter</span>
            {cartCount > 0 && (
              <span className="bg-[#96281B] text-white font-bold text-[10px] min-w-[18px] h-[18px] px-1 rounded-full flex items-center justify-center border border-[#C5A059]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#1A1A1A] hover:text-[#96281B] rounded hover:bg-[#96281B]/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="lg:hidden bg-[#FDFCF8] border-b border-[#96281B]/20 px-6 pt-4 pb-6 text-[#1A1A1A] shadow-xl animate-fadeIn"
        >
          {/* Quick Notice Header */}
          <div className="flex items-center justify-between pb-3 mb-2 border-b border-[#1A1A1A]/10">
            <span className="text-xs font-serif italic text-[#96281B] font-medium">
              खम्मा घणी सा • Pure Desi Ghee
            </span>
            <span className="text-[10px] bg-[#1B4332] text-white px-2 py-0.5 rounded font-sans font-bold">
              100% Pure Veg
            </span>
          </div>

          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-sans font-semibold py-2.5 px-2 text-[#333] hover:text-[#96281B] hover:bg-[#96281B]/5 rounded transition-all flex items-center justify-between border-b border-[#1A1A1A]/5"
              >
                <span>{link.label}</span>
                <span className="text-[#C5A059] text-sm">›</span>
              </a>
            ))}

            {/* Direct Action CTAs in Mobile Menu */}
            <div className="pt-4 flex flex-col gap-2.5">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#96281B] text-white font-sans uppercase text-xs font-bold tracking-widest py-3 rounded shadow-md border border-[#C5A059]/40 active:scale-98"
              >
                <Calendar className="w-4 h-4 text-[#C5A059]" />
                <span>Reserve a Royal Table</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  id="mobile-nav-call-btn"
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="flex items-center justify-center gap-1.5 bg-[#FFFDF9] border border-[#1A1A1A]/20 text-[#1A1A1A] font-sans font-bold text-xs tracking-wider py-2.5 rounded hover:bg-[#F5EFE6]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#96281B]" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  id="mobile-nav-wa-btn"
                  href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Namaste RJ 11 Rajasthani Churma Dal Baati! I would like to inquire about table booking / food order.')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1.5 bg-[#1B4332] text-white font-sans font-bold text-xs tracking-wider py-2.5 rounded hover:bg-[#2D6A4F]"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
