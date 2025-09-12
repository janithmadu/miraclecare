import {
  Users,
  Award,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  CheckCircle,
  Target,
  Shield,
  Heart,
  Pill,
} from "lucide-react";
export const ContactInformation = {
  MobileNumber: "+94 767338419",
  LanNumber: "+94 374941221",
  AddressOne: "23/8A, Singha Mawatha",
  AddressTow: "Dambulla Road, Kurunegala",
  WhatsAppNumber: "94767338419",
  FaceBookLink: "https://www.facebook.com/share/178719nNrV/?mibextid=wwXIfr",
  TikTokLink:
    "https://www.tiktok.com/@miracle.care.camp3?_t=ZS-8zbeGsyGpBI&_r=1",
  EmailAddressNormal: "miraclecare@miraclehospitals.lk",
  EmailAddressAdmition: "admissions@miraclehospitals.lk",
  OfficeHours: "8.00 am to 5.00 pm",
};

export const stats = [
  { icon: Users, number: "100+", label: "Graduates" },
  { icon: Award, number: "2+", label: "Years Experience" },
  { icon: Globe, number: "100%", label: "Job Placement" },
  { icon: Globe, number: "100%", label: "Government Approved" },
  { icon: Globe, number: "4.9/5", label: "Average Rating" },
  { icon: Globe, number: "100%", label: "Happy Students" },
  { icon: Globe, number: "100%", label: "Satisfaction Rate" },
];

export const slides = [
  {
    title: "Professional Nursing Training",
    subtitle: "Launch Your Healthcare Career",
    description:
      "Comprehensive nursing programs with hands-on clinical training and government certification",
    image:
      "https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: "Explore Nursing Courses",
    href: "/courses",
  },
  {
    title: "Japanese Language Mastery",
    subtitle: "Gateway to Global Opportunities",
    description:
      "Complete Japanese language program with cultural integration and JLPT preparation",
    image:
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: "Learn Japanese",
    href: "/courses",
  },
  {
    title: "Care Giver Excellence",
    subtitle: "Compassionate Care Training",
    description:
      "Professional caregiver training for elderly care, disability support, and patient assistance",
    image:
      "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: "Start Care Training",
    href: "/courses",
  },
  {
    title: "First Aid Certification",
    subtitle: "Emergency Response Skills",
    description:
      "Essential first aid and emergency response training with Red Cross certification",
    image:
      "https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=1200",
    cta: "Get Certified",
    href: "/courses",
  },
];

export const socialLinks = [
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/178719nNrV/?mibextid=wwXIfr",
    color: "hover:text-blue-600",
  },
  { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
  {
    icon: Linkedin,
    href: "https://www.tiktok.com/@miracle.care.camp3?_t=ZS-8zbeGsyGpBI&_r=1",
    color: "hover:text-blue-700",
  },
];

export const courses = [
  "Nursing Courses",
  "Care Giver Courses",
  "First Aid Training",
  "Japanese Language",
  "Pharmacy Assistant",
];
export const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/courses", label: "Our Courses" },
  { href: "/contact", label: "Contact Us" },
];

export const features = [
  {
    icon: CheckCircle,
    title: "Government Certified",
    description: "All courses approved by regulatory authorities",
  },
  {
    icon: Users,
    title: "Expert Faculty",
    description: "Learn from experienced industry professionals",
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Certificates recognized by top employers",
  },
  {
    icon: Target,
    title: "100% Placement",
    description: "Guaranteed job placement assistance",
  },
];

export const images = [
  {
    src: "https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Modern Campus Building",
    description: "State-of-the-art facilities designed for optimal learning",
  },
  {
    src: "https://images.pexels.com/photos/7648047/pexels-photo-7648047.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Advanced Training Labs",
    description: "Fully equipped medical and language training facilities",
  },
  {
    src: "https://images.pexels.com/photos/8636677/pexels-photo-8636677.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Interactive Classrooms",
    description: "Modern learning environments with latest technology",
  },
  {
    src: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800",
    title: "Practical Training Areas",
    description: "Real-world simulation environments for hands-on learning",
  },
];

export const certifications = [
  {
    icon: Award,
    title: "Ministry of Health",
    description: "Approved healthcare training programs",
    color: "text-[#000058]",
  },
  {
    icon: Shield,
    title: "TVEC Certification",
    description: "Technical & Vocational Education accredited",
    color: "text-[#000070]",
  },
  {
    icon: Globe,
    title: "International Standards",
    description: "Globally recognized training methods",
    color: "text-[#000088]",
  },
  {
    icon: CheckCircle,
    title: "Quality Assurance",
    description: "ISO certified training processes",
    color: "text-[#0000a0]",
  },
];

export const FeaturedCoursesArr = [
  {
    icon: Heart,
    title: "Nursing Courses",
    description:
      "Comprehensive nursing programs with hands-on clinical training",
    features: ["Patient Care", "Medical Procedures", "Healthcare Ethics"],
    color: "from-[#000058] to-[#000070]",
  },
  {
    icon: Users,
    title: "Care Giver Courses",
    description:
      "Professional caregiver training for elderly and disability care",
    features: ["Elderly Care", "Disability Support", "Communication Skills"],
    color: "from-[#000070] to-[#000088]",
  },
 
  {
    icon: Shield,
    title: "First Aid",
    description: "Essential emergency response and first aid certification",
    features: ["CPR Training", "Emergency Response", "Safety Protocols"],
    color: "from-[#0000a0] to-[#0000b8]",
  },
  {
    icon: Pill,
    title: "Pharmacy Assistant",
    description:
      "Professional pharmacy operations and customer service training",
    features: [
      "Medication Knowledge",
      "Customer Service",
      "Inventory Management",
    ],
    color: "from-[#0000b8] to-[#0000d0]",
  },
];





    export const testimonials = [
    {
      name: 'Priya Sharma',
      course: 'Nursing Program',
      rating: 5,
      text: 'The nursing program at Miracle Care Campus transformed my career. The practical training and expert faculty prepared me perfectly for working in a leading hospital. I highly recommend this institution.',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Rajesh Kumar',
      course: 'Japanese Language',
      rating: 5,
      text: 'Thanks to the Japanese language course, I was able to secure a job in Japan within 6 months of graduation. The cultural training along with language skills made all the difference.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Sunitha Fernando',
      course: 'Care Giver Training',
      rating: 5,
      text: 'The care giver course gave me the confidence and skills to work with elderly patients. The instructors were patient and thorough. I now have a rewarding career helping others.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      name: 'Mohamed Ali',
      course: 'Pharmacy Assistant',
      rating: 5,
      text: 'The pharmacy assistant program was comprehensive and practical. I learned everything from medication management to customer service. Got placed immediately after graduation.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];


    export const coursesMain = [
    {
      title: 'Nursing Courses',
      description: 'Comprehensive nursing programs covering patient care, medical procedures, and healthcare ethics.',
      duration: '12-18 months',
      students: '50+ enrolled',
      certification: 'Government Certified',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Patient Care', 'Medical Terminology', 'Clinical Skills', 'Healthcare Ethics']
    },
    {
      title: 'Care Giver Courses',
      description: 'Professional caregiver training focusing on elderly care, disability support, and patient assistance.',
      duration: '6-9 months',
      students: '40+ enrolled',
      certification: 'Industry Recognized',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Elderly Care', 'Disability Support', 'Communication Skills', 'Safety Protocols']
    },
    {
      title: 'First Aid',
      description: 'Essential first aid and emergency response training for various emergency situations.',
      duration: '2-4 weeks',
      students: '100+ enrolled',
      certification: 'Red Cross Certified',
      image: 'https://images.pexels.com/photos/6823566/pexels-photo-6823566.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['CPR Training', 'Emergency Response', 'Wound Care', 'Medical Emergencies']
    },

    {
      title: 'Pharmacy Assistant Course',
      description: 'Professional training for pharmacy assistants covering medication management and customer service.',
      duration: '4-6 months',
      students: '30+ enrolled',
      certification: 'Pharmacy Board Certified',
      image: 'https://images.pexels.com/photos/4226721/pexels-photo-4226721.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Medication Knowledge', 'Customer Service', 'Inventory Management', 'Pharmacy Operations']
    }
  ];
    export const certificationsGov = [
    {
      name: 'SLBFE',
      fullName: 'Sri Lanka Bureau of Foreign Employment',
      logo: 'https://res.cloudinary.com/dwml3axwl/image/upload/v1757562137/SLBFE_rwb3f4.jpg',
      description: 'Authorized training provider for overseas employment preparation'
    },
    {
      name: 'TVEC',
      fullName: 'Tertiary and Vocational Education Commission',
      logo: 'https://res.cloudinary.com/dwml3axwl/image/upload/v1757562138/TVEC_o7gecg.jpg',
      description: 'Accredited technical and vocational education provider'
    }
  ];

