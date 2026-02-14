import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Go Yachting Dubai',
    description: 'Luxury yacht booking platform with multilingual support, real-time availability, and seamless reservation system for premium maritime experiences.',
    image: '/project-yachting.PNG',
    tags: ['React', 'Node.js', 'MongoDB', 'i18n'],
    liveUrl: 'https://www.goyachtingdubai.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Cosmos Care Medical',
    description: 'Healthcare management system with appointment booking, patient records, and integrated medical services portal.',
    image: '/project-medical.PNG',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    liveUrl: 'https://www.cosmoscaremedicalcenter.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Mart Management System',
    description: 'Comprehensive inventory and sales management solution with real-time tracking, analytics dashboard, and automated reporting.',
    image: '/project-mart.jpg',
    tags: ['C#', '.NET', 'SQL Server', 'Bootstrap'],
    githubUrl: 'https://github.com/Clash786',
  },
  {
    id: 4,
    title: 'Library Management',
    description: 'Digital library system with catalog management, borrowing tracking, and user authentication for educational institutions.',
    image: '/project-library.jpg',
    tags: ['Java', 'MySQL', 'Spring Boot', 'JSP'],
    githubUrl: 'https://github.com/Clash786',
  },
];

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden transition-all duration-700 ease-expo-out ${
        project.featured ? 'md:col-span-2 md:row-span-2' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 150 + 300}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card Background */}
      <div className="relative h-full min-h-[280px] sm:min-h-[320px] glass border-gradient">
        {/* Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-700 ease-expo-out ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent transition-opacity duration-500 ${
            isHovered ? 'opacity-95' : 'opacity-90'
          }`} />
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-xs font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 transition-transform duration-500 ${
            isHovered ? 'translate-y-0' : 'translate-y-0'
          }`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className={`text-sm text-slate mb-4 line-clamp-2 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-80'
          }`}>
            {project.description}
          </p>

          {/* Links */}
          <div className={`flex gap-3 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo rounded-full hover:bg-indigo-dark transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            )}
          </div>
        </div>

        {/* Hover Arrow */}
        <div className={`absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-indigo rounded-full transition-all duration-500 ${
          isHovered ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-45'
        }`}>
          <ArrowUpRight size={18} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
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
      id="projects"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              A selection of my recent work, showcasing real-world applications built with modern technologies
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>

          {/* View More */}
          <div
            className={`text-center mt-12 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '900ms' }}
          >
            <a
              href="https://github.com/Clash786"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-white border border-indigo/50 rounded-full font-medium transition-all duration-300 hover:bg-indigo/10 hover:border-indigo"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
