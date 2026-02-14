import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Youtube, Loader2, CheckCircle, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:umairanjum7866@gmail.com?subject=${subject}&body=${body}`;
    
    // Small delay for UX
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Open email client
    window.location.href = mailtoLink;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'umairanjum7866@gmail.com',
      href: 'mailto:umairanjum7866@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+92 333 1504378',
      href: 'tel:+923331504378',
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: '#',
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      value: '+92 333 1504378',
      href: 'https://wa.me/923331504378',
    },
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/Clash786',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/m-umair-anjum-2aa193397',
    },
    {
      icon: <Youtube size={20} />,
      label: 'YouTube',
      href: '#',
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 sm:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal-light/30 to-charcoal" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="inline-block px-4 py-1.5 text-sm font-medium text-indigo bg-indigo/10 rounded-full border border-indigo/20 mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left Column - Contact Info */}
            <div
              className={`lg:col-span-2 space-y-8 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-4 p-4 glass rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-12 h-12 flex items-center justify-center text-indigo bg-indigo/10 rounded-lg transition-all duration-300 group-hover:bg-indigo group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-slate mb-0.5">{item.label}</p>
                      <p className="text-sm font-medium text-white group-hover:text-indigo transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Follow Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-12 h-12 flex items-center justify-center text-slate bg-white/5 rounded-xl transition-all duration-300 hover:bg-indigo hover:text-white hover:scale-110 hover:rotate-6"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div
              className={`lg:col-span-3 transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 border-gradient"
              >
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 flex items-center justify-center text-green-400 bg-green-400/10 rounded-full mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-slate">Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                ) : (
                  <>
                    <div className="grid sm:grid-cols-2 gap-6 mb-6">
                      {/* Name Field */}
                      <div className="relative">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all"
                          placeholder="Your Name"
                        />
                        <label
                          htmlFor="name"
                          className="absolute left-4 -top-2.5 text-xs text-slate bg-charcoal px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo peer-focus:bg-charcoal"
                        >
                          Your Name
                        </label>
                      </div>

                      {/* Email Field */}
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all"
                          placeholder="Your Email"
                        />
                        <label
                          htmlFor="email"
                          className="absolute left-4 -top-2.5 text-xs text-slate bg-charcoal px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo peer-focus:bg-charcoal"
                        >
                          Your Email
                        </label>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div className="relative mb-6">
                      <textarea
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="peer w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-transparent focus:outline-none focus:border-indigo focus:ring-1 focus:ring-indigo transition-all resize-none"
                        placeholder="Your Message"
                      />
                      <label
                        htmlFor="message"
                        className="absolute left-4 -top-2.5 text-xs text-slate bg-charcoal px-1 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-slate peer-placeholder-shown:top-3.5 peer-placeholder-shown:bg-transparent peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-indigo peer-focus:bg-charcoal"
                      >
                        Your Message
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto px-8 py-3.5 text-white bg-indigo rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:shadow-glow-lg disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send size={18} className="transition-transform group-hover:translate-x-1" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-dark to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
