import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Calendar, ShoppingBag, Menu as MenuIcon, X, Phone, MapPin, Sparkles } from 'lucide-react';
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
    { label: 'Home', href: '#home' },
    { label: 'The Menu', href: '#menu' },
    { label: 'Heritage', href: '#story' },
    { label: 'Royal Thalis', href: '#thali-platter' },
    { label: 'Ambiance', href: '#experience' },
    { label: 'Catering', href: '#catering' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFCF8]/95 backdrop-blur-md shadow-sm border-b border-[#1A1A1A]/10 py-3'
          : 'bg-[#FDFCF8] text-[#1A1A1A] border-b border-[#1A1A1A]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Editorial Typography */}
        <a id="nav-brand-logo" href="#home" className="flex items-center gap-3.5 group">
          <div className="w-11 h-11 border border-[#96281B]/40 rounded-full flex items-center justify-center p-0.5 group-hover:border-[#96281B] transition-colors shrink-0">
            <div className="w-full h-full bg-[#96281B] rounded-full flex flex-col items-center justify-center text-white font-bold leading-none">
              <span className="text-[9px] font-sans tracking-widest text-[#C5A059]">RJ</span>
              <span className="font-serif text-sm text-[#FDFCF8]">11</span>
            </div>
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.2em] font-sans text-[#4A4A4A] mb-0.5">
              A UNIT OF RJ 11 RESTAURANT • BANI PARK
            </p>
            <div className="flex items-baseline gap-1.5 flex-wrap">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1A1A1A] leading-none">
                RJ 11
              </span>
              <span className="font-serif text-xl sm:text-2xl italic font-light text-[#96281B] leading-none">
                राजस्थानी दाल बाटी
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs uppercase tracking-[0.18em] font-sans text-[#4A4A4A] hover:text-[#96281B] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[1.5px] after:bg-[#96281B] after:absolute after:bottom-0 after:left-0 after:transition-all"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Reservation Button */}
          <button
            id="nav-reserve-btn"
            onClick={onOpenReservation}
            className="hidden sm:flex items-center gap-2 bg-[#96281B] hover:bg-[#7D2116] text-white font-sans uppercase text-xs tracking-widest px-4 py-2.5 shadow-sm active:scale-95 transition-all"
          >
            <Calendar className="w-3.5 h-3.5 text-[#FDFCF8]" />
            <span>Reserve Table</span>
          </button>

          {/* Cart / Order Trigger */}
          <button
            id="nav-cart-btn"
            onClick={onOpenCart}
            className="relative flex items-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FDFCF8] font-sans uppercase text-xs tracking-widest px-3.5 py-2.5 active:scale-95 transition-all"
            aria-label="View Order"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-xs font-medium">Platter</span>
            {cartCount > 0 && (
              <span className="bg-[#96281B] text-white font-bold text-[10px] w-4 h-4 rounded-full flex items-center justify-center -mr-1">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-[#1A1A1A] hover:text-[#96281B] rounded hover:bg-[#F5F2ED]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="nav-mobile-drawer" className="xl:hidden bg-[#FDFCF8] border-b border-[#1A1A1A]/10 px-6 pt-4 pb-6 text-[#1A1A1A] shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs uppercase tracking-widest font-sans py-2 text-[#4A4A4A] hover:text-[#96281B] border-b border-[#1A1A1A]/5 transition-all"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              <button
                id="mobile-nav-book-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#96281B] text-white font-sans uppercase text-xs tracking-widest py-3 hover:bg-[#7D2116]"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Royal Table</span>
              </button>

              <a
                id="mobile-nav-call-btn"
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 border border-[#1A1A1A] text-[#1A1A1A] font-sans uppercase text-xs tracking-widest py-2.5 hover:bg-[#1A1A1A] hover:text-white"
              >
                <Phone className="w-4 h-4 text-[#96281B]" />
                <span>Call Restaurant ({RESTAURANT_INFO.phone})</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

