import { Service, TeamMember, GalleryImage } from './types';

// Services Data
export const services: Service[] = [
  {
    id: 'engine-diagnostics',
    title: 'Engine Diagnostics',
    description: 'We utilize advanced diagnostic tools to identify and troubleshoot engine issues with precision.',
    imageUrl: 'https://images.pexels.com/photos/8824756/pexels-photo-8824756.jpeg',
    longDescription: 'Our engine diagnostic service uses state-of-the-art computer-based tools to identify issues with your vehicle\'s engine, transmission, exhaust system, and other key components. Our certified technicians interpret the data and provide you with a clear explanation of the issues and recommended solutions.',
    price: '69',
    priceSuffix: 'and up',
    features: [
      'Comprehensive engine scan',
      'Check engine light diagnosis',
      'Performance analysis',
      'Trouble code interpretation',
      'Sensor testing and validation',
      'Detailed written report'
    ],
    faqs: [
      {
        question: 'How long does an engine diagnostic test take?',
        answer: 'A basic diagnostic scan typically takes about 30-60 minutes. However, more complex issues may require additional time for thorough testing and analysis.'
      },
      {
        question: 'Will the diagnostic test fix my check engine light?',
        answer: 'The diagnostic test identifies the cause of the check engine light but doesn\'t fix the issue itself. After diagnosing the problem, we\'ll provide repair recommendations.'
      }
    ]
  },
  {
    id: 'brake-repair',
    title: 'Brake Repair',
    description: 'Our brake repair services ensure your vehicle stops safely and efficiently every time.',
    imageUrl: 'https://images.pexels.com/photos/8824764/pexels-photo-8824764.jpeg',
    longDescription: 'Your vehicle\'s braking system is its most critical safety feature. Our comprehensive brake repair service includes inspection, repair, or replacement of all brake components including pads, rotors, calipers, and brake fluid. We ensure that your brakes respond effectively in all driving conditions.',
    price: '99',
    priceSuffix: 'and up',
    features: [
      'Complete brake system inspection',
      'Brake pad replacement',
      'Rotor resurfacing or replacement',
      'Caliper repair or replacement',
      'Brake fluid flush',
      'Anti-lock brake system (ABS) diagnostics'
    ],
    faqs: [
      {
        question: 'How often should I replace my brake pads?',
        answer: 'Brake pads typically need replacement every 30,000 to 70,000 miles, but this varies based on driving habits and conditions. We recommend inspection at least once a year.'
      },
      {
        question: 'What are the signs that I need brake service?',
        answer: 'Common signs include squealing or grinding noises, vibration when braking, longer stopping distance, brake pedal feeling soft or spongy, and of course, if your brake warning light comes on.'
      }
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Service & Repair',
    description: 'Keep your car cool with our comprehensive air conditioning repair and maintenance services.',
    imageUrl: 'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg',
    longDescription: 'Our air conditioning service includes a thorough inspection of your vehicle\'s cooling system, refrigerant level check and recharge, component testing, and leak detection. We\'ll ensure your AC blows cold air even on the hottest days.',
    price: '89',
    priceSuffix: 'and up',
    features: [
      'AC system performance test',
      'Refrigerant level check and recharge',
      'Leak detection service',
      'Compressor assessment',
      'Condenser and evaporator evaluation',
      'Cabin air filter replacement'
    ],
    faqs: [
      {
        question: 'Why isn\'t my car\'s AC blowing cold air?',
        answer: 'This could be due to low refrigerant levels, a malfunctioning compressor, a clogged filter, or a leak in the system. Our diagnostic service will identify the specific cause.'
      },
      {
        question: 'How often should I service my car\'s AC system?',
        answer: 'We recommend servicing your AC system every 1-2 years to ensure optimal performance, particularly before summer begins.'
      }
    ]
  },
  {
    id: 'electrical-systems',
    title: 'Electrical Systems',
    description: 'From batteries to complex electrical issues, our team can diagnose and fix all electrical problems.',
    imageUrl: 'https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg',
    longDescription: 'Modern vehicles rely heavily on electrical systems for everything from starting the engine to operating advanced safety features. Our electrical system service includes battery testing and replacement, alternator and starter diagnosis, electrical component troubleshooting, and wiring repair.',
    price: '79',
    priceSuffix: 'and up',
    features: [
      'Battery testing and replacement',
      'Alternator and starter diagnosis',
      'Electrical component troubleshooting',
      'Wiring harness inspection and repair',
      'Power window and lock repair',
      'Computer system diagnostics'
    ],
    faqs: [
      {
        question: 'How do I know if my battery needs replacement?',
        answer: 'Signs include difficulty starting your vehicle, dimming headlights, electrical components that function intermittently, and a battery warning light on your dashboard.'
      },
      {
        question: 'What is the average lifespan of a car battery?',
        answer: 'Most car batteries last 3-5 years, though this can vary based on climate, driving habits, and the type of battery installed.'
      }
    ]
  },
  {
    id: 'tire-services',
    title: 'Tire Services',
    description: 'Tire rotation, balancing, and replacement services to keep your vehicle driving smoothly.',
    imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
    longDescription: 'Our comprehensive tire services ensure your vehicle maintains proper traction, handling, and fuel efficiency. We offer tire rotation, balancing, alignment, flat repair, and new tire sales from all major brands. Our technicians will help you select the right tires for your vehicle and driving needs.',
    price: '49',
    priceSuffix: 'and up',
    features: [
      'Tire inspection and pressure check',
      'Tire rotation and balancing',
      'Wheel alignment service',
      'Flat tire repair',
      'Tire replacement with quality brands',
      'TPMS (Tire Pressure Monitoring System) service'
    ],
    faqs: [
      {
        question: 'How often should I rotate my tires?',
        answer: 'Most manufacturers recommend rotating your tires every 5,000 to 7,500 miles to ensure even wear and extend tire life.'
      },
      {
        question: 'How do I know when I need new tires?',
        answer: 'You should replace tires when the tread depth reaches 2/32 of an inch (common test is using a penny), if there\'s sidewall damage, bulges, or if the tires are more than 6 years old regardless of tread wear.'
      }
    ]
  },
  {
    id: 'maintenance',
    title: 'Regular Maintenance',
    description: 'Preventative maintenance services to keep your vehicle running at its best and prevent costly repairs.',
    imageUrl: 'https://images.pexels.com/photos/3807455/pexels-photo-3807455.jpeg',
    longDescription: 'Regular maintenance is essential for keeping your vehicle running reliably and preventing costly repairs. Our comprehensive maintenance services include oil changes, filter replacements, fluid checks and top-offs, belt and hose inspections, and multi-point inspections according to your vehicle manufacturer\'s schedule.',
    price: '39',
    priceSuffix: 'and up',
    features: [
      'Oil change with quality filters',
      'Fluid level check and top-off',
      'Multi-point inspection',
      'Tire rotation and pressure check',
      'Battery test',
      'Brake inspection',
      'Filter replacements (air, cabin, fuel)'
    ],
    faqs: [
      {
        question: 'How often should I change my oil?',
        answer: 'For conventional oil, every 3,000-5,000 miles. For synthetic oil, every 7,500-10,000 miles. However, check your owner\'s manual for the manufacturer\'s recommendation for your specific vehicle.'
      },
      {
        question: 'What regular maintenance does my car need?',
        answer: 'Regular maintenance includes oil changes, tire rotations, brake inspections, fluid checks, filter replacements, battery testing, and seasonal inspections. Your owner\'s manual will provide a maintenance schedule specific to your vehicle.'
      }
    ]
  }
];

// Team Members Data
export const teamMembers: TeamMember[] = [
  {
    id: 'john-smith',
    name: 'John Smith',
    position: 'Master Technician',
    imageUrl: 'https://images.pexels.com/photos/8831334/pexels-photo-8831334.jpeg',
    bio: 'With over 20 years of experience, John leads our team of mechanics. He specializes in complex engine diagnostics and has multiple ASE certifications.',
    social: {
      facebook: '#',
      twitter: '#',
      linkedin: '#'
    }
  },
  {
    id: 'sarah-johnson',
    name: 'Sarah Johnson',
    position: 'Service Manager',
    imageUrl: 'https://images.pexels.com/photos/6954162/pexels-photo-6954162.jpeg',
    bio: 'Sarah has been with our team for 10 years and oversees all service operations. She ensures every customer receives exceptional service and quality repairs.',
    social: {
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 'michael-rodriguez',
    name: 'Michael Rodriguez',
    position: 'Brake Specialist',
    imageUrl: 'https://images.pexels.com/photos/8942994/pexels-photo-8942994.jpeg',
    bio: 'Michael has specialized in brake systems for over 12 years. His attention to detail ensures your vehicle stops safely and reliably every time.',
    social: {
      twitter: '#',
      instagram: '#'
    }
  },
  {
    id: 'david-williams',
    name: 'David Williams',
    position: 'Electrical Systems Expert',
    imageUrl: 'https://images.pexels.com/photos/8943209/pexels-photo-8943209.jpeg',
    bio: 'David has extensive training in automotive electrical systems. He can diagnose and repair even the most complex electrical issues in modern vehicles.',
    social: {
      facebook: '#',
      linkedin: '#'
    }
  }
];

// Gallery Images Data
export const galleryImages: GalleryImage[] = [
  {
    id: 'img1',
    imageUrl: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg',
    title: 'Engine Rebuild',
    category: 'engine',
    description: 'Complete engine rebuild for a classic muscle car'
  },
  {
    id: 'img2',
    imageUrl: 'https://images.pexels.com/photos/3807492/pexels-photo-3807492.jpeg',
    title: 'Brake System Upgrade',
    category: 'brakes',
    description: 'Performance brake system installation'
  },
  {
    id: 'img3',
    imageUrl: 'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg',
    title: 'Tire Replacement',
    category: 'tires',
    description: 'All-season tire installation'
  },
  {
    id: 'img4',
    imageUrl: 'https://images.pexels.com/photos/3807466/pexels-photo-3807466.jpeg',
    title: 'Oil Change Service',
    category: 'maintenance',
    description: 'Regular maintenance oil change'
  },
  {
    id: 'img5',
    imageUrl: 'https://images.pexels.com/photos/3807166/pexels-photo-3807166.jpeg',
    title: 'AC System Repair',
    category: 'ac',
    description: 'Air conditioning compressor replacement'
  },
  {
    id: 'img6',
    imageUrl: 'https://images.pexels.com/photos/4489733/pexels-photo-4489733.jpeg',
    title: 'Electrical Diagnosis',
    category: 'electrical',
    description: 'Complex electrical system troubleshooting'
  },
  {
    id: 'img7',
    imageUrl: 'https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg',
    title: 'Suspension Work',
    category: 'suspension',
    description: 'Complete suspension overhaul'
  },
  {
    id: 'img8',
    imageUrl: 'https://images.pexels.com/photos/3806268/pexels-photo-3806268.jpeg',
    title: 'Diagnostic Scanning',
    category: 'diagnostics',
    description: 'Computerized diagnostic check'
  }
];

// Company Information
export const companyInfo = {
  name: 'MechanicPro Auto Repair',
  address: '123 Repair Street, Auto City, AC 12345',
  phone: '(555) 123-4567',
  email: 'info@mechanicpro.com',
  workingHours: {
    weekdays: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 4:00 PM',
    sunday: 'Closed'
  },
  founded: 2010,
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    youtube: '#'
  },
  about: {
    shortDescription: 'MechanicPro is your trusted partner for all automotive repair and maintenance needs. With over a decade of experience, our certified mechanics are committed to providing high-quality, honest service at fair prices.',
    longDescription: 'Founded in 2010, MechanicPro has grown to become the area\'s most trusted auto repair facility. We combine technical expertise with transparent communication and fair pricing to deliver an exceptional customer experience. Our facility is equipped with the latest diagnostic tools and equipment, and our mechanics receive ongoing training to stay current with automotive technology advancements. We\'re committed to our community, environmentally responsible practices, and your complete satisfaction with every service we provide.'
  }
};