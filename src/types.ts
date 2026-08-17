export interface MenuItem {
  id: string;
  name: string;
  hindiName?: string;
  category: 'thalis' | 'baatis' | 'curries' | 'churmas' | 'breads' | 'beverages' | 'desserts';
  price: number;
  description: string;
  longDescription?: string;
  image: string;
  isChefSpecial?: boolean;
  isBestSeller?: boolean;
  isJainAvailable?: boolean;
  spiceLevel: 1 | 2 | 3; // 1: Mild, 2: Medium, 3: Spicy
  serves: string;
  gheeRichness: 'Pure Desi Ghee' | 'Moderate Ghee' | 'Ghee Free Option';
  ingredients: string[];
  calories?: string;
}

export interface ThaliComponent {
  id: string;
  name: string;
  hindiName: string;
  category: string;
  image: string;
  description: string;
  tasteNote: string;
  gheeFactor: string;
  position: { top: string; left: string };
}

export interface Review {
  id: string;
  author: string;
  city: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
  visitType: 'Family' | 'Tourist' | 'Food Blogger' | 'Couple' | 'Solo Explorer';
  recommendedDish: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'ambiance' | 'kitchen' | 'guests';
  image: string;
  caption: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'dining' | 'food' | 'catering' | 'location';
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  customization?: {
    extraGhee?: boolean;
    isJain?: boolean;
    spicePreference?: 'Mild' | 'Authentic Rajasthani' | 'Extra Teekha';
    notes?: string;
  };
}

export interface TableBooking {
  name: string;
  phone: string;
  email: string;
  date: string;
  timeSlot: string;
  guests: number;
  seatingType: 'Royal Bajot (Floor Dining)' | 'AC Royal Dining Hall' | 'Outdoor Courtyard';
  occasion?: 'Casual Dining' | 'Family Get-Together' | 'Birthday / Anniversary' | 'Tour Group' | 'Corporate Lunch';
  specialRequests?: string;
}
