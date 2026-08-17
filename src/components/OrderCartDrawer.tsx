import React, { useState } from 'react';
import { CartItem } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { X, Plus, Minus, Trash2, ShoppingBag, Flame, ShieldCheck, Tag, Phone, ArrowRight, CheckCircle2, Train } from 'lucide-react';

interface OrderCartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, newQuantity: number) => void;
  onClearCart: () => void;
}

export const OrderCartDrawer: React.FC<OrderCartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onClearCart,
}) => {
  const [coupon, setCoupon] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponError, setCouponError] = useState<string>('');
  const [orderType, setOrderType] = useState<'Takeaway' | 'Train Packaging' | 'Hotel/Home Delivery'>('Takeaway');
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [deliveryAddress, setDeliveryAddress] = useState<string>('');
  const [orderPlaced, setOrderPlaced] = useState<boolean>(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const packagingFee = orderType === 'Train Packaging' ? 30 : 0;
  const tax = Math.round(subtotal * 0.05); // 5% GST
  const grandTotal = Math.max(0, subtotal + packagingFee + tax - appliedDiscount);

  const handleApplyCoupon = () => {
    const code = coupon.trim().toUpperCase();
    if (code === 'JAIPUR10') {
      const discount = Math.round(subtotal * 0.1);
      setAppliedDiscount(discount);
      setCouponError('');
    } else if (code === 'PADHARO') {
      setAppliedDiscount(50);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon. Try "JAIPUR10" or "PADHARO"');
      setAppliedDiscount(0);
    }
  };

  const handleSendWhatsAppOrder = () => {
    if (!customerName || !customerPhone) {
      alert('Please enter your name and phone number for the order.');
      return;
    }

    const orderLines = items
      .map((ci) => `• ${ci.quantity}x ${ci.item.name} (₹${ci.item.price * ci.quantity})`)
      .join('\n');

    const msg = `*Namaste RJ 11 Rajasthani Churma Dal Baati!* 🙏
I would like to place an order:

*Customer Name:* ${customerName}
*Phone:* ${customerPhone}
*Order Type:* ${orderType}
${orderType === 'Hotel/Home Delivery' ? `*Delivery Address:* ${deliveryAddress}\n` : ''}
*Items:*
${orderLines}

*Subtotal:* ₹${subtotal}
${packagingFee > 0 ? `*Special Leakproof Train Packaging:* ₹${packagingFee}\n` : ''}
*GST (5%):* ₹${tax}
${appliedDiscount > 0 ? `*Discount Applied:* -₹${appliedDiscount}\n` : ''}
*Grand Total:* ₹${grandTotal}

Please confirm order preparation time and payment mode. Khamma Ghani Sa!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`, '_blank');
    setOrderPlaced(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/65 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFCF8] w-full max-w-md h-full shadow-2xl flex flex-col justify-between border-l border-[#1A1A1A]/20 relative font-sans">
        
        {/* Top Header */}
        <div className="bg-[#1A1A1A] text-white p-4 sm:p-5 flex items-center justify-between border-b border-[#FDFCF8]/15">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#242424] border border-[#FDFCF8]/10 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-light text-[#FDFCF8]">
                Your Platter Order
              </h3>
              <p className="text-[11px] text-[#FDFCF8]/70 font-sans">
                {items.length} unique {items.length === 1 ? 'item' : 'items'} in order
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#FDFCF8]/70 hover:text-white p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-4 font-sans">
          
          {orderPlaced ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-500 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#1A1A1A]">
                Order Dispatched to WhatsApp
              </h4>
              <p className="text-xs text-[#4A4A4A] leading-relaxed">
                Thank you, <strong>{customerName}</strong>! Our Bani Park team will confirm preparation time on WhatsApp immediately.
              </p>
              <button
                onClick={() => {
                  setOrderPlaced(false);
                  onClearCart();
                  onClose();
                }}
                className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs uppercase tracking-widest py-2.5 px-6 transition-colors"
              >
                Back to Menu
              </button>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 bg-[#F5F2ED] text-[#1A1A1A] flex items-center justify-center mx-auto border border-[#1A1A1A]/10">
                <ShoppingBag className="w-6 h-6 text-[#96281B]" />
              </div>
              <p className="font-serif text-xl font-light text-[#1A1A1A]">
                Your Platter is Empty
              </p>
              <p className="text-xs text-[#767676] max-w-xs mx-auto">
                Add our signature Unlimited Rajwadi Thali, Desi Ghee Baatis, or Mawa Churma to start your order!
              </p>
            </div>
          ) : (
            <>
              {/* Order Items List */}
              <div className="space-y-3">
                {items.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-3 flex items-center justify-between gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 object-cover border border-[#1A1A1A]/10 shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-medium text-[#1A1A1A] truncate">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#96281B] font-medium font-sans">
                        ₹{item.price} each
                      </p>
                      <span className="text-[10px] text-[#767676]">{item.gheeRichness}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#1A1A1A]/20 bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                          className="px-2 py-1 text-[#1A1A1A] hover:bg-[#F5F2ED] text-xs"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-medium text-[#1A1A1A]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                          className="px-2 py-1 text-[#1A1A1A] hover:bg-[#F5F2ED] text-xs"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="font-serif text-sm font-medium text-[#1A1A1A] w-12 text-right">
                        ₹{item.price * quantity}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Type Toggle */}
              <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-3 space-y-2">
                <label className="text-xs uppercase tracking-wider text-[#1A1A1A] block font-medium">
                  Service / Packaging Type:
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-[11px]">
                  {(['Takeaway', 'Train Packaging', 'Hotel/Home Delivery'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setOrderType(type)}
                      className={`p-2 font-medium border transition-all text-center uppercase tracking-wider text-[10px] ${
                        orderType === type
                          ? 'bg-[#96281B] text-white border-[#96281B]'
                          : 'bg-white text-[#4A4A4A] border-[#1A1A1A]/15'
                      }`}
                    >
                      {type === 'Train Packaging' && <Train className="w-3 h-3 inline mr-1 text-[#C5A059]" />}
                      {type}
                    </button>
                  ))}
                </div>
                {orderType === 'Train Packaging' && (
                  <p className="text-[10px] text-[#4A4A4A] bg-[#FDFCF8] p-2 border border-[#1A1A1A]/10">
                    Includes leak-proof 4-compartment hot boxes & sealed ghee containers safe for 48-hr train/air travel.
                  </p>
                )}
              </div>

              {/* Customer Info Form */}
              <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-3 space-y-2.5">
                <label className="text-xs uppercase tracking-wider text-[#1A1A1A] block font-medium">
                  Contact Details:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="Your Name *"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-2.5 py-1.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone / WhatsApp *"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-2.5 py-1.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>
                {orderType === 'Hotel/Home Delivery' && (
                  <textarea
                    rows={2}
                    placeholder="Hotel Name / Room No. / Jaipur Address *"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-2.5 py-1.5 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                )}
              </div>

              {/* Promo Coupon */}
              <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. JAIPUR10, PADHARO)"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                    className="flex-1 bg-white border border-[#1A1A1A]/15 px-2.5 py-1.5 text-xs uppercase focus:outline-none focus:border-[#96281B]"
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className="bg-[#96281B] hover:bg-[#7D2116] text-white px-3 py-1.5 text-xs uppercase tracking-wider transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {couponError && <p className="text-[10px] text-red-600 mt-1">{couponError}</p>}
                {appliedDiscount > 0 && (
                  <p className="text-[10px] text-emerald-800 font-medium mt-1">
                    ✓ Coupon applied! Saved ₹{appliedDiscount}
                  </p>
                )}
              </div>

              {/* Bill Details */}
              <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-3.5 space-y-1.5 text-xs text-[#4A4A4A]">
                <div className="flex justify-between">
                  <span>Item Subtotal:</span>
                  <span>₹{subtotal}</span>
                </div>
                {packagingFee > 0 && (
                  <div className="flex justify-between">
                    <span>Train Safe Packaging:</span>
                    <span>₹{packagingFee}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>GST (5%):</span>
                  <span>₹{tax}</span>
                </div>
                {appliedDiscount > 0 && (
                  <div className="flex justify-between text-emerald-800 font-medium">
                    <span>Discount:</span>
                    <span>-₹{appliedDiscount}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#1A1A1A]/15 flex justify-between font-medium text-sm text-[#1A1A1A]">
                  <span>Total Amount:</span>
                  <span className="font-serif text-lg text-[#96281B]">₹{grandTotal}</span>
                </div>
              </div>
            </>
          )}

        </div>

        {/* Bottom CTA Button */}
        {!orderPlaced && items.length > 0 && (
          <div className="p-4 bg-white border-t border-[#1A1A1A]/10 shadow-lg space-y-2 font-sans">
            <button
              id="confirm-whatsapp-order-btn"
              onClick={handleSendWhatsAppOrder}
              className="w-full bg-[#1B4332] hover:bg-[#2D6A4F] text-white uppercase text-xs tracking-widest py-3.5 flex items-center justify-center gap-2 transition-colors shadow-sm font-medium"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Place Order via WhatsApp (₹{grandTotal})</span>
            </button>
            <p className="text-[10px] text-center text-[#767676]">
              Instant confirmation • Pay via UPI / Cash upon pickup
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

