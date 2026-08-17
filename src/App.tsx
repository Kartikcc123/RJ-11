import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveThaliPlatter } from './components/InteractiveThaliPlatter';
import { HeritageStory } from './components/HeritageStory';
import { MenuSection } from './components/MenuSection';
import { RoyalExperience } from './components/RoyalExperience';
import { CateringEstimator } from './components/CateringEstimator';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { ReservationModal } from './components/ReservationModal';
import { OrderCartDrawer } from './components/OrderCartDrawer';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('dbj_cart_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isReservationOpen, setIsReservationOpen] = useState<boolean>(false);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('dbj_cart_items', JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cartItems]);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const cartQuantitiesMap = cartItems.reduce((acc, curr) => {
    acc[curr.item.id] = curr.quantity;
    return acc;
  }, {} as Record<string, number>);

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

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFCF8] text-[#1A1A1A] font-sans selection:bg-[#96281B] selection:text-white">
      {/* Top Info Banner */}
      <TopBanner />

      {/* Main Sticky Navbar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      <main className="flex-grow">
        {/* Grand Hero Section */}
        <HeroSection
          onOpenReservation={() => setIsReservationOpen(true)}
          onExploreMenu={() => scrollToSection('menu')}
          onOrderOnline={() => setIsCartOpen(true)}
        />

        {/* Interactive Royal Thali Guide */}
        <InteractiveThaliPlatter />

        {/* Heritage Story & 2016 Bani Park Journey */}
        <HeritageStory />

        {/* Interactive Menu with Dietary Filter & Search */}
        <MenuSection
          onAddToCart={handleAddToCart}
          cartItemQuantities={cartQuantitiesMap}
        />

        {/* Dining Ambiance & Traditional Bajot Experience */}
        <RoyalExperience />

        {/* Catering Estimator & Live Event Calculator */}
        <CateringEstimator />

        {/* Photo Gallery & Lightbox */}
        <GallerySection />

        {/* Customer Reviews & Google Ratings */}
        <TestimonialsSection />

        {/* Location, Distance Guides & Direct Contact */}
        <ContactSection />

        {/* Frequent Questions & Travel FAQ */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Cart & Online Order Drawer */}
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
