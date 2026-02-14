import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Globe, Languages, Server, Smartphone } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const services: Service[] = [
  {
    icon: <Code2 size={32} />,
    title: 'Web Development',
    description: 'Custom websites and web applications built with modern technologies and best practices.',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Friendly', 'Clean Code'],
  },
  {
    icon: <Palette size={32} />,
    title: 'UI/UX Design',
    description: 'User-centered design that creates intuitive and engaging digital experiences.',
    features: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems'],
  },
  {
    icon: <Globe size={32} />,
    title: 'Freelance Services',
    description: 'Flexible development support tailored to your project needs and timeline.',
    features: ['Quick Turnaround', 'Clear Communication', 'Regular Updates', 'Ongoing Support'],
  },
  {
    icon: <Languages size={32} />,
    title: 'Multilingual Systems',
    description: 'Global-ready solutions with multi-language support and localization.',
    features: ['i18n Implementation', 'RTL Support', 'Content Management', 'Auto-translation'],
  },
  {
    icon: <Server size={32} />,
    title: 'Backend Development',
    description: 'Robust server-side solutions with secure APIs and database management.',
    features: ['RESTful APIs', 'Database Design', 'Authentication', 'Cloud Deployment'],
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Sub-domain Management',
    description: 'Expert handling of sub-domain creation, configuration, and maintenance.',
    features: ['DNS Configuration', 'SSL Setup', 'Load Balancing', 'Monitoring'],
  },
];

interface ServiceCardProps {
  service: Service;
  index: number;
  isVisible: boolean;
}

function ServiceCard({ service, index, isVisible }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative glass rounded-2xl p-6 sm:p-8 transition-all duration-700 ease-expo-out hover:-translate-y-2 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ 
        transitionDelay: `${index * 100 + 200}ms`,
        transform: isVisible ? `rotate(${index % 2 === 0 ? '-1' : '1'}deg)` : 'rotate(0deg)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo/20 to-purple-500/20 transition-opacity duration-500 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
      
      {/* Border Gradient */}
      <div className="absolute inset-0 rounded-2xl border border-indigo/20 transition-colors duration-300 group-hover:border-indigo/50" />

      <div className="relative z-10">
        {/* Icon */}
        <div className={`inline-flex items-center justify-center w-14 h-14 mb-5 text-indigo bg-indigo/10 rounded-xl transition-all duration-500 ${
          isHovered ? 'scale-110 rotate-3 bg-indigo/20' : ''
        }`}>
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate text-sm mb-5 leading-relaxed">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li 
              key={feature}
              className={`flex items-center gap-2 text-sm text-slate/80 transition-all duration-300 ${
                isHovered ? 'translate-x-1' : ''
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <span className="w-1.5 h-1.5 bg-indigo rounded-full" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/50 to-charcoal" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 sm:mb-16">
            <div
              className={`transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                What I <span className="text-gradient">Do</span>
              </h2>
            </div>
            
            <div
              className={`lg:pt-14 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <p className="text-slate text-lg leading-relaxed">
                I provide comprehensive digital solutions tailored to your needs, 
                from concept to deployment. Specializing in modern web technologies 
                and scalable architectures.
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
