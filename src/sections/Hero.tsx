import { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const fullText = 'Software & Web Developer | Freelancer';
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);

    return () => clearInterval(typeInterval);
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-indigo/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo/5 rounded-full blur-3xl animate-pulse" />
        
        {/* Particle Grid */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(99, 102, 241, 0.5) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-1/4 right-1/4 w-4 h-4 border border-indigo/30 rotate-45 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-indigo/20 rounded-full animate-float-slow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />

      {/* Main Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Profile Image */}
            <div
              className={`relative transition-all duration-1000 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <div className="relative group perspective-1000">
                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo to-purple-500 opacity-50 blur-xl animate-pulse-glow group-hover:opacity-70 transition-opacity" />
                
                {/* Image Container */}
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-indigo/30 transition-transform duration-500 group-hover:scale-105 preserve-3d">
                  <img
                    src="/profile-photo.jpg"
                    alt="Umair Anjum"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Orbital Dots */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute -top-2 left-1/2 w-3 h-3 bg-indigo rounded-full shadow-glow" />
                </div>
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-500 rounded-full" />
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              {/* Greeting */}
              <div
                className={`transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
                  Welcome to my portfolio
                </span>
              </div>

              {/* Name */}
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                Hi, I'm{' '}
                <span className="text-gradient">Umair Anjum</span>
              </h1>

              {/* Typewriter Title */}
              <div
                className={`h-8 mb-6 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '800ms' }}
              >
                <span className="text-xl sm:text-2xl text-slate font-mono">
                  {displayText}
                  <span
                    className={`inline-block w-0.5 h-6 bg-indigo ml-1 align-middle ${
                      showCursor ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-base sm:text-lg text-slate max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
                }`}
                style={{ transitionDelay: '1000ms' }}
              >
                Crafting digital experiences with code and creativity. I build scalable web applications, 
                multilingual systems, and deliver innovative solutions that make an impact.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1200ms' }}
              >
                <button
                  onClick={handleScrollToProjects}
                  className="group relative px-8 py-3.5 text-white bg-indigo rounded-full font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    View My Work
                    <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-dark to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>

                <button
                  onClick={handleScrollToContact}
                  className="px-8 py-3.5 text-white border border-indigo/50 rounded-full font-semibold transition-all duration-300 hover:bg-indigo/10 hover:border-indigo hover:scale-105"
                >
                  Contact Me
                </button>
              </div>

              {/* Social Links */}
              <div
                className={`flex gap-4 justify-center lg:justify-start transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '1400ms' }}
              >
                <a
                  href="https://github.com/Clash786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate hover:text-white bg-white/5 rounded-full transition-all duration-300 hover:bg-indigo/20 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/m-umair-anjum-2aa193397"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 text-slate hover:text-white bg-white/5 rounded-full transition-all duration-300 hover:bg-indigo/20 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-indigo/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-indigo rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
