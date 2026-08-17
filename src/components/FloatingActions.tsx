import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MessageCircle, Calendar, ShoppingBag } from 'lucide-react';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end font-sans">
      
      {/* Floating Cart Button (if items in cart) */}
      {cartCount > 0 && (
        <button
          id="floating-cart-btn"
          onClick={onOpenCart}
          className="flex items-center gap-2 bg-[#96281B] text-white border border-[#FDFCF8]/30 px-4 py-2.5 shadow-2xl hover:bg-[#7D2116] transition-colors"
        >
          <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
          <span className="text-xs uppercase tracking-wider font-medium">View Order ({cartCount})</span>
        </button>
      )}

      {/* Floating WhatsApp Action */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent('Namaste RJ 11 Rajasthani Churma Dal Baati! I would like to inquire about table booking / food order.')}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-[#1B4332] hover:bg-[#2D6A4F] text-white p-3 sm:px-4 sm:py-2.5 shadow-2xl transition-colors border border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-4 h-4 text-emerald-400" />
        <span className="hidden sm:inline text-xs uppercase tracking-wider font-medium">WhatsApp Order</span>
      </a>

      {/* Floating Call Action on mobile */}
      <a
        id="floating-call-btn"
        href={`tel:${RESTAURANT_INFO.phone}`}
        className="sm:hidden flex items-center justify-center w-11 h-11 bg-[#1A1A1A] text-white border border-[#C5A059]/40 shadow-2xl active:scale-95 transition-transform"
        aria-label="Call Restaurant"
      >
        <Phone className="w-4 h-4 text-[#C5A059]" />
      </a>
    </div>
  );
};

