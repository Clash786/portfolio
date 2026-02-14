import { Heart, Github, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: 'https://github.com/Clash786', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/m-umair-anjum-2aa193397', label: 'LinkedIn' },
    { icon: <Youtube size={18} />, href: '#', label: 'YouTube' },
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo to-transparent" />

      {/* Background */}
      <div className="absolute inset-0 bg-charcoal" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center mb-8">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-bold text-white mb-4 hover:text-indigo transition-colors"
            >
              Umair<span className="text-indigo"> Anjum</span>
            </a>

            {/* Tagline */}
            <p className="text-slate mb-6 max-w-md">
              Crafting digital experiences with code and creativity. Let's build something amazing together.
            </p>

            {/* Navigation */}
            <nav className="flex flex-wrap justify-center gap-6 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-sm text-slate hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3 mb-8">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center text-slate bg-white/5 rounded-full transition-all duration-300 hover:bg-indigo hover:text-white hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-sm text-slate flex items-center gap-1">
                © {currentYear} Umair Anjum. Made with{' '}
                <Heart size={14} className="text-red-500 fill-red-500" /> in Pakistan
              </p>

              {/* Back to Top */}
              <button
                onClick={handleScrollToTop}
                className="group flex items-center gap-2 text-sm text-slate hover:text-indigo transition-colors"
              >
                Back to top
                <span className="w-8 h-8 flex items-center justify-center bg-white/5 rounded-full transition-all duration-300 group-hover:bg-indigo group-hover:text-white">
                  <ArrowUp size={14} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
