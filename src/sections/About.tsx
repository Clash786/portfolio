import { useEffect, useRef, useState } from 'react';
import { Download, MapPin, Mail, Phone } from 'lucide-react';

interface Skill {
  name: string;
  level: 'expert' | 'advanced' | 'intermediate';
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 'expert' },
  { name: 'JavaScript', level: 'expert' },
  { name: 'React', level: 'advanced' },
  { name: 'Node.js', level: 'advanced' },
  { name: 'TypeScript', level: 'advanced' },
  { name: 'Tailwind CSS', level: 'expert' },
  { name: 'PHP', level: 'advanced' },
  { name: 'Laravel', level: 'advanced' },
  { name: 'JSON', level: 'expert' },
  { name: 'SEO', level: 'advanced' },
  { name: 'C#', level: 'intermediate' },
  { name: 'Java', level: 'intermediate' },
  { name: 'Python', level: 'intermediate' },
  { name: 'SQL', level: 'advanced' },
  { name: 'Git', level: 'advanced' },
  { name: 'UI/UX', level: 'advanced' },
];

const skillColors: Record<string, string> = {
  expert: 'bg-indigo text-white border-indigo',
  advanced: 'bg-indigo/20 text-indigo border-indigo/50',
  intermediate: 'bg-white/5 text-slate border-white/20',
};

export default function About() {
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
      id="about"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/30 to-charcoal" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Image */}
            <div
              className={`relative transition-all duration-1000 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
            >
              <div className="relative group perspective-1000">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden border border-indigo/20 transition-transform duration-500 group-hover:scale-[1.02]">
                  <img
                    src="/profile-photo.jpg"
                    alt="Umair Anjum"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                </div>

                {/* Floating Shapes */}
                <div className="absolute -top-6 -right-6 w-12 h-12 border border-indigo/30 rounded-lg rotate-12 animate-float" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-indigo/20 rounded-full animate-float-slow" />

                {/* Info Card */}
                <div className="absolute -bottom-6 -right-6 glass rounded-xl p-4 shadow-glass">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo/20 rounded-lg flex items-center justify-center">
                      <MapPin size={18} className="text-indigo" />
                    </div>
                    <div>
                      <p className="text-xs text-slate">Location</p>
                      <p className="text-sm font-medium text-white">Islamabad, PK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div>
              {/* Header */}
              <div
                className={`mb-8 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
                  About Me
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Passionate <span className="text-gradient">Developer</span>
                </h2>
              </div>

              {/* Bio */}
              <div
                className={`space-y-4 mb-8 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <p className="text-slate leading-relaxed">
                  I'm a passionate software developer and freelancer based in Islamabad, Pakistan. 
                  With expertise in modern web technologies and a keen eye for design, I create 
                  digital experiences that make an impact.
                </p>
                <p className="text-slate leading-relaxed">
                  Currently pursuing my BSCS in Computer Science at FUUAST while working on exciting 
                  projects. I specialize in building scalable web applications, multilingual systems, 
                  and delivering innovative solutions for clients worldwide.
                </p>
              </div>

              {/* Contact Info */}
              <div
                className={`grid sm:grid-cols-2 gap-4 mb-8 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-indigo" />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Email</p>
                    <p className="text-sm font-medium text-white">umairanjum7866@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-indigo/10 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-indigo" />
                  </div>
                  <div>
                    <p className="text-xs text-slate">Phone</p>
                    <p className="text-sm font-medium text-white">+92 333 1504378</p>
                  </div>
                </div>
              </div>

              {/* Skills Cloud */}
              <div
                id="skills"
                className={`transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">Skills & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={skill.name}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full border transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 cursor-default ${
                        skillColors[skill.level]
                      } ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                      style={{ 
                        animationDelay: `${index * 50 + 700}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div
                className={`mt-8 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <a
                  href="/CV.pdf"
                  download="Umair_Anjum_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 text-white bg-indigo rounded-full font-medium transition-all duration-300 hover:bg-indigo-dark hover:scale-105 hover:shadow-glow"
                >
                  <Download size={18} />
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
