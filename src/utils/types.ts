// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  longDescription?: string;
  price?: string;
  priceSuffix?: string;
  features?: string[];
  faqs?: FAQ[];
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
  imageUrl?: string;
}

// FAQ Types
export interface FAQ {
  question: string;
  answer: string;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  position: string;
  imageUrl: string;
  bio: string;
  social?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
}

// Gallery Image Types
export interface GalleryImage {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description?: string;
}

// Appointment Types
export interface Appointment {
  id: string;
  service: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  message?: string;
  vehicle?: {
    make?: string;
    model?: string;
    year?: string;
  };
}