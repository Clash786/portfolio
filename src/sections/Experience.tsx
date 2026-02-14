import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Briefcase, Award, Calendar } from 'lucide-react';

interface TimelineItem {
  id: number;
  type: 'education' | 'work' | 'certification';
  title: string;
  organization: string;
  period: string;
  description?: string;
}

const timelineItems: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Website Developer & Modifier',
    organization: 'Dubai Client (Freelance)',
    period: '2024 - Present',
    description: 'Developing and modifying websites for Dubai-based clients including yacht booking and medical center platforms',
  },
  {
    id: 2,
    type: 'education',
    title: 'BSCS in Computer Science',
    organization: 'FUUAST Islamabad',
    period: '2023 - Present',
    description: 'Currently pursuing Bachelor of Science in Computer Science',
  },
  {
    id: 3,
    type: 'work',
    title: 'Interlocutor',
    organization: 'M&M Institute Islamabad',
    period: 'June 2024 - Sep 2024',
    description: 'Conducted interviews and assessments for educational programs',
  },
  {
    id: 4,
    type: 'certification',
    title: 'Freelancing & Graphic Design',
    organization: 'DigiSkills Training Program',
    period: 'Jul 2022 - Oct 2022',
    description: 'Completed professional training in freelancing and graphic design',
  },
  {
    id: 5,
    type: 'education',
    title: 'Intermediate in ICS',
    organization: 'ICB G-6/3 Islamabad',
    period: '2021 - 2022',
    description: 'Intermediate in Computer Science',
  },
  {
    id: 6,
    type: 'education',
    title: 'Matric in Computer Science',
    organization: 'IMCB I-8/3 Islamabad',
    period: '2019 - 2020',
    description: 'Secondary education with computer science focus',
  },
];

const typeIcons = {
  education: <GraduationCap size={20} />,
  work: <Briefcase size={20} />,
  certification: <Award size={20} />,
};

const typeColors = {
  education: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  work: 'bg-green-500/20 text-green-400 border-green-500/30',
  certification: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

interface TimelineCardProps {
  item: TimelineItem;
  index: number;
  isVisible: boolean;
  isLeft: boolean;
}

function TimelineCard({ item, index, isVisible, isLeft }: TimelineCardProps) {
  return (
    <div
      className={`relative transition-all duration-700 ease-expo-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${isLeft ? 'lg:pr-12' : 'lg:pl-12'}`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
    >
      {/* Card */}
      <div className="group glass rounded-xl p-5 sm:p-6 hover:-translate-y-1 transition-transform duration-300">
        {/* Type Badge */}
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border mb-3 ${typeColors[item.type]}`}>
          {typeIcons[item.type]}
          <span className="capitalize">{item.type}</span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo transition-colors">
          {item.title}
        </h3>

        {/* Organization */}
        <p className="text-indigo text-sm font-medium mb-2">
          {item.organization}
        </p>

        {/* Period */}
        <div className="flex items-center gap-2 text-slate text-sm mb-3">
          <Calendar size={14} />
          <span>{item.period}</span>
        </div>

        {/* Description */}
        {item.description && (
          <p className="text-slate/80 text-sm leading-relaxed">
            {item.description}
          </p>
        )}
      </div>

      {/* Connector Dot - Desktop Only */}
      <div className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-indigo rounded-full border-4 border-charcoal shadow-glow ${
        isLeft ? '-right-2' : '-left-2'
      }`} />
    </div>
  );
}

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress line
          setTimeout(() => setProgress(100), 500);
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
      id="experience"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/20 to-charcoal" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
              Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Experience & <span className="text-gradient">Education</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              My professional journey and educational background that shaped my career
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center Line - Desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/10 -translate-x-1/2">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo to-purple-500 transition-all duration-1000 ease-expo-out"
                style={{ height: `${progress}%` }}
              />
            </div>

            {/* Timeline Items */}
            <div className="space-y-6 lg:space-y-0">
              {timelineItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 0 ? '' : 'lg:direction-rtl'
                  }`}
                >
                  {index % 2 === 0 ? (
                    <>
                      <TimelineCard
                        item={item}
                        index={index}
                        isVisible={isVisible}
                        isLeft={true}
                      />
                      <div className="hidden lg:block" />
                    </>
                  ) : (
                    <>
                      <div className="hidden lg:block" />
                      <TimelineCard
                        item={item}
                        index={index}
                        isVisible={isVisible}
                        isLeft={false}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
