import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  rating: number;
  comment: string;
  date: string;
  imageUrl?: string;
  service?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  rating,
  comment,
  date,
  imageUrl,
  service,
}) => {
  // Generate stars based on rating
  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star 
      key={i} 
      size={18} 
      className={`${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
    />
  ));

  return (
    <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center mb-4">
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
        ) : (
          <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-500 flex items-center justify-center font-medium text-lg mr-4">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <h3 className="font-bold text-slate-800">{name}</h3>
          <p className="text-sm text-slate-500">{date}</p>
        </div>
      </div>
      
      <div className="flex mb-3">{stars}</div>
      
      {service && (
        <p className="text-sm font-medium text-orange-500 mb-2">Service: {service}</p>
      )}
      
      <p className="text-slate-600 italic">"{comment}"</p>
    </div>
  );
};

export default TestimonialCard;