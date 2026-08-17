import React, { useState } from 'react';
import { TableBooking } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Phone, MapPin } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<TableBooking>({
    name: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    timeSlot: '01:00 PM (Lunch)',
    guests: 4,
    seatingType: 'AC Royal Dining Hall',
    occasion: 'Family Get-Together',
    specialRequests: '',
  });

  const [bookingSuccess, setBookingSuccess] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please provide your name and contact phone number.');
      return;
    }
    const refCode = `RJ11-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refCode);
    setBookingSuccess(true);
  };

  const handleWhatsAppConfirm = () => {
    const msg = `*Namaste RJ 11 Rajasthani Churma Dal Baati!* 🙏
I have reserved a table online.

*Booking Ref:* ${bookingRef}
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Date:* ${formData.date}
*Time Slot:* ${formData.timeSlot}
*Guests:* ${formData.guests} people
*Seating Preference:* ${formData.seatingType}
*Occasion:* ${formData.occasion}
${formData.specialRequests ? `*Special Request:* ${formData.specialRequests}` : ''}

Please confirm my table reservation. Khamma Ghani Sa!`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FDFCF8] border border-[#1A1A1A]/20 max-w-xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col font-sans">
        
        {/* Header */}
        <div className="bg-[#1A1A1A] text-white p-5 border-b border-[#FDFCF8]/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#242424] border border-[#FDFCF8]/10 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-[#C5A059]" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-light text-[#FDFCF8]">
                Table Reservation
              </h3>
              <p className="text-[11px] text-[#FDFCF8]/70 font-sans">
                RJ 11 Rajasthani Churma Dal Baati • Bani Park
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

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {bookingSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 border border-emerald-500 text-emerald-800 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="bg-[#F5F2ED] border border-[#1A1A1A]/10 text-[#96281B] text-[10px] font-medium uppercase tracking-[0.2em] px-3 py-1">
                  Reservation Received
                </span>
                <h4 className="font-serif text-2xl font-light text-[#1A1A1A] mt-2">
                  Padharo Mhare Des, {formData.name}
                </h4>
                <p className="text-xs text-[#4A4A4A] mt-1">
                  We look forward to welcoming you for an authentic Rajasthani dining experience in Bani Park.
                </p>
              </div>

              {/* Booking Summary Box */}
              <div className="bg-[#F5F2ED] border border-[#1A1A1A]/10 p-4 text-left text-xs space-y-2 max-w-md mx-auto font-sans">
                <div className="flex justify-between border-b border-[#1A1A1A]/10 pb-1.5 font-medium">
                  <span className="text-[#767676]">Booking Reference:</span>
                  <span className="text-[#96281B] font-mono font-bold">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767676]">Date & Slot:</span>
                  <span className="text-[#1A1A1A]">{formData.date} at {formData.timeSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767676]">Party Size:</span>
                  <span className="text-[#1A1A1A]">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767676]">Seating:</span>
                  <span className="text-[#1A1A1A]">{formData.seatingType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#767676]">Address:</span>
                  <span className="text-[#1A1A1A] text-right truncate max-w-[200px]">
                    Gayatri Sadan, Bani Park, Jaipur
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 justify-center pt-2">
                <button
                  onClick={handleWhatsAppConfirm}
                  className="bg-[#1B4332] hover:bg-[#2D6A4F] text-white text-xs uppercase tracking-widest py-2.5 px-4 flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Confirm on WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    onClose();
                  }}
                  className="bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs uppercase tracking-widest py-2.5 px-4 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Rajesh Sharma"
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Time Slot *
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  >
                    <option value="12:00 PM (Lunch)">12:00 PM (Lunch)</option>
                    <option value="01:00 PM (Lunch)">01:00 PM (Lunch)</option>
                    <option value="02:00 PM (Lunch)">02:00 PM (Lunch)</option>
                    <option value="03:00 PM (Late Lunch)">03:00 PM (Late Lunch)</option>
                    <option value="07:30 PM (Dinner)">07:30 PM (Dinner)</option>
                    <option value="08:30 PM (Dinner)">08:30 PM (Dinner)</option>
                    <option value="09:30 PM (Dinner)">09:30 PM (Dinner)</option>
                    <option value="10:00 PM (Late Dinner)">10:00 PM (Late Dinner)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Guests *
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 15, 20, 25].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Person' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Seating Type
                  </label>
                  <select
                    value={formData.seatingType}
                    onChange={(e) => setFormData({ ...formData, seatingType: e.target.value as any })}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  >
                    <option value="AC Royal Dining Hall">AC Royal Dining Hall</option>
                    <option value="Royal Bajot (Floor Dining)">Royal Bajot (Traditional Floor Dining)</option>
                    <option value="Outdoor Courtyard">Outdoor Courtyard</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                    Occasion
                  </label>
                  <select
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value as any })}
                    className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                  >
                    <option value="Family Get-Together">Family Get-Together</option>
                    <option value="Casual Dining">Casual Dining</option>
                    <option value="Tour Group">Tour Group / Golden Triangle Visit</option>
                    <option value="Birthday / Anniversary">Birthday / Anniversary Celebration</option>
                    <option value="Corporate Lunch">Corporate Team Lunch</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1A1A1A] mb-1 font-medium">
                  Special Food Requests (e.g. Jain without onion/garlic, high chair)
                </label>
                <textarea
                  rows={2}
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  placeholder="Need 2 Jain Thalis without onion/garlic, mild spice for kids, etc."
                  className="w-full bg-white border border-[#1A1A1A]/15 px-3 py-2 text-xs text-[#1A1A1A] focus:outline-none focus:border-[#96281B]"
                />
              </div>

              <div className="bg-[#F5F2ED] p-3 text-[11px] text-[#4A4A4A] flex items-center gap-2 border border-[#1A1A1A]/10">
                <Sparkles className="w-3.5 h-3.5 text-[#96281B] shrink-0" />
                <span>No reservation fee required. Table held for 15 minutes past scheduled slot.</span>
              </div>

              <button
                type="submit"
                id="submit-table-booking-btn"
                className="w-full bg-[#96281B] hover:bg-[#7D2116] text-white uppercase text-xs tracking-widest py-3.5 transition-colors shadow-sm font-medium"
              >
                Confirm Table Reservation
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

