"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const reviews = [
    {
      name: "Sarah Ahmed",
      role: "Founder, TechNova UAE",
      quote: "Growize completely transformed our digital presence. The custom Next.js application they built is lightning fast, and our conversion rates have literally doubled since launch.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CMO, Elevate E-Commerce",
      quote: "Their understanding of the MENA market and RTL localization is unmatched. Combine that with their futuristic UI/UX design, and you have a world-class agency.",
      rating: 5
    },
    {
      name: "Fatima Al Mansoori",
      role: "Director, Al Mansoori Retail",
      quote: "From technical SEO to the flawless branding, the team at Growize delivered beyond our expectations. They don't just build websites; they build growth engines.",
      rating: 5
    }
  ];
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "For a custom Next.js corporate website or e-commerce platform, our typical timeline ranges from 6 to 12 weeks. This includes discovery, UI/UX design, development, and rigorous QA testing."
    },
    {
      question: "Do you handle bilingual (English & Arabic) RTL platforms?",
      answer: "Absolutely. We specialize in MENA localization. We engineer deep RTL (right-to-left) support from the ground up, ensuring the Arabic user experience is just as flawless as the English one."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer dedicated growth and maintenance retainers. This includes continuous SEO optimization, security updates, performance monitoring, and content updates."
    },
    {
      question: "How does your pricing structure work?",
      answer: "Every project is unique, so we avoid one-size-fits-all pricing. After our initial discovery call, we provide a detailed, customized proposal based on your specific technical requirements and business goals."
    },
    {
      question: "Will our website be optimized for search engines (SEO)?",
      answer: "Technical SEO is baked into our DNA. By utilizing Next.js Server-Side Rendering (SSR) and semantic HTML, we ensure your site is lightning-fast and perfectly structured for Google's crawlers."
    }
  ];
  
// 1. Animated Counter Component
function AnimatedCounter({ from = 0, to, duration = 2 }: { from?: number, to: number, duration?: number }) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: duration, ease: "easeOut" });
    return () => controls.stop();
  }, [count, to, duration]);

  return <motion.span>{rounded}</motion.span>;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { question: "What is your typical project timeline?", answer: "Typically 6 to 12 weeks including discovery, design, development, and QA testing." },
    { question: "Do you handle bilingual (English & Arabic) RTL platforms?", answer: "Yes, we specialize in high-performance MENA localization and engineering." },
    { question: "Do you provide ongoing support after launch?", answer: "We offer dedicated growth and maintenance retainers for long-term success." }
  ];
  const floatingAnimation = {
    y: [-8, 8, -8],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: index * 0.15, ease: "easeOut" },
    }),
  };

  const services = [
    { 
      title: "High-Performance Web Apps", 
      description: "Custom React & Next.js architectures built for lightning-fast load times and seamless user experiences.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "Immersive UI/UX Design", 
      description: "Clean, conversion-focused interfaces utilizing fluid motion and intuitive layouts to captivate your audience.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "SEO & Growth Engine", 
      description: "Data-driven organic strategies and technical SEO to dominate search rankings and drive high-intent traffic.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "Digital Marketing", 
      description: "Targeted campaigns, PPC, and data-driven social media strategies designed to maximize your ROI and amplify brand visibility.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "Branding & Creative Design", 
      description: "Strategic brand identity development, stunning visual assets, and storytelling that perfectly resonates with your target audience.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "Content & Media Creation", 
      description: "High-quality video production, professional photography, and engaging copywriting that brings your brand's unique voice to life.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "E-Commerce Solutions", 
      description: "High-converting online stores tailored for the modern consumer, optimized for seamless checkouts and inventory scaling.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "AI & Automation", 
      description: "Intelligent chatbots and automated business workflows to streamline your operations and scale effortlessly.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    },
    { 
      title: "MENA Localization (RTL)", 
      description: "Native-feeling Arabic translations and right-to-left layout engineering designed specifically for the UAE market.", 
      icon: <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-3.6-9m3.6 9a9 9 0 003.6-9m-3.6-9a9 9 0 00-3.6 9m3.6-9a9 9 0 013.6 9" /></svg>, 
      accent: "bg-[#5e055b]/10 text-[#5e055b]", 
      hoverText: "group-hover:text-[#5e055b]" 
    }
  ];

  const reasons = [
    { title: "UAE Market Native", description: "Deep understanding of the MENA digital landscape, offering flawless English & Arabic (RTL) dual-language architectures.", icon: "🌍" },
    { title: "Obsessed with Performance", description: "We don't use bloated website builders. We engineer custom Next.js applications designed for instantaneous load times.", icon: "🚀" },
    { title: "Conversion-Centric", description: "Every pixel, glassmorphic panel, and animation is strategically placed to guide your users toward hitting that 'Contact' button.", icon: "🎯" }
  ];

  const metrics = [
    { label: "Performance", score: 99 },
    { label: "Accessibility", score: 100 },
    { label: "Best Practices", score: 100 },
    { label: "SEO", score: 100 }
  ];
const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 500px
      if (window.scrollY > 500) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="min-h-screen overflow-hidden font-sans flex flex-col relative w-full bg-black">
      
      {/* --- HERO SECTION --- */}
      <div 
        className="relative w-full flex flex-col z-10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        {/* Simple White Grid with radial mask */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 40%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 40%, black 50%, transparent 100%)'
          }}
        />

        {/* Top Announcement Bar */}
        <div className="w-full bg-white text-[#5e055b] py-2 text-center text-sm font-bold tracking-wide relative z-50">
          We don’t just market brands We grow them 🚀
        </div>

       <nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1400px] w-full mx-auto">
          <div className="flex items-center">
            {/* Logo links back to Home */}
            <a href="/" className="transition-transform hover:scale-105 active:scale-95">
              <img src="/logo.png" alt="Growize Digital" className="h-10 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Menu Links */}
          <div className="hidden md:flex items-center gap-10">
            <a href="/" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Home</a>
            <a href="/about" className="text-white/80 hover:text-white text-sm font-medium transition-colors">About Us</a>
            <a href="/contact" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Contact</a>
            <a href="/#services" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Services</a>
          </div>

          <a 
  href="https://wa.me/971555466945" 
  target="_blank" 
  rel="noopener noreferrer"
  className="hidden md:flex items-center px-6 py-2.5 bg-white/10 backdrop-blur-md text-white font-bold rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer"
>
  Let's Talk
</a>
        </nav>
        {/* 85% Width Thin Line Separator */}
        <div className="w-[85%] mx-auto h-[1px] bg-white/10 relative z-20" />

        {/* Hero Content */}
        <section className="relative flex-1 flex items-center py-16 px-6 lg:px-12 max-w-[1400px] w-full mx-auto z-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center w-full">
            
            {/* LEFT COLUMN */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col max-w-2xl lg:col-span-6"
            >
              <div className="inline-flex items-center w-max px-4 py-1.5 mb-6 text-sm text-white font-bold bg-white/10 border border-white/20 rounded-full backdrop-blur-md">
                Architecting the Future 🤝
              </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                High-Performance <br />
                Solutions for <br />
                {/* Neon Glow Effect: White core with stacked magenta drop shadows */}
                <span className="font-['Montserrat',sans-serif] font-bold text-white block mt-2 tracking-normal [text-shadow:0_0_15px_rgba(255,255,255,0.4),0_0_30px_#a31a9d,0_0_50px_#5e055b]">
                  Digital Growth
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg font-medium">
                Leverage cutting-edge web architectures, futuristic UI/UX, and intelligent digital solutions to streamline operations and accelerate your brand's success.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-16">
               <button 
  onClick={() => {
    const element = document.getElementById('contact-us');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }}
  className="px-8 py-3.5 bg-[#5e055b] text-white font-bold rounded-full border border-[#5e055b] hover:bg-[#4a0448] shadow-lg transition-all"
>
  Get Started
</button>
                <button 
  onClick={() => {
    const element = document.getElementById('services');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  }}
  className="px-8 py-3.5 bg-white/5 backdrop-blur-md text-white font-medium rounded-full border border-white/20 hover:bg-white/10 transition-colors flex items-center gap-2 shadow-sm"
>
  Explore Solutions
  <svg className="w-4 h-4 rtl:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>
              </div>

              {/* Stats Row */}
              <div className="flex flex-wrap items-center gap-8 lg:gap-12 pt-8 border-t border-white/10">
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 flex items-center">
                    <AnimatedCounter to={120} duration={2} />
                    <span className="text-[#5e055b] ms-1">+</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Digital Projects</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 flex items-center">
                    <AnimatedCounter to={98} duration={2.5} />
                    <span className="text-[#5e055b] ms-1">%</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1 flex items-center">
                    <AnimatedCounter to={4} duration={1.5} />
                    <span className="text-[#5e055b] ms-1">x</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Growth Delivered</div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT COLUMN */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none lg:mx-0 lg:col-span-5 lg:col-start-8 xl:translate-x-4"
            >
              <div className="absolute inset-0 bg-black/50 border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center relative group">
                <img 
                   src="/hero-graphic.webp" 
                   alt="Growize Digital"
                   className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500" 
                />
              </div>

              {/* Floating Card 1 */}
              <motion.div 
                animate={floatingAnimation}
                className="absolute top-[12%] -start-6 lg:-start-16 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-5 z-20"
              >
                <div className="w-14 h-14 bg-[#5e055b]/80 border border-white/10 rounded-xl flex items-center justify-center text-3xl shadow-inner text-white">📊</div>
                <div>
                  <div className="text-base font-bold text-white uppercase tracking-wider">SEO Ranking</div>
                  <div className="text-sm text-slate-200 font-medium">Optimization</div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div 
                animate={floatingAnimation}
                style={{ animationDelay: "1s" }}
                className="absolute bottom-[12%] -start-4 lg:-start-12 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl flex items-center gap-5 z-20"
              >
                <div className="w-14 h-14 bg-[#5e055b]/80 border border-white/10 rounded-xl flex items-center justify-center text-3xl shadow-inner text-white">✉️</div>
                <div>
                  <div className="text-base font-bold text-white uppercase tracking-wider">Web Apps</div>
                  <div className="text-sm text-slate-200 font-medium">Scalable Systems</div>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div 
                animate={floatingAnimation}
                style={{ animationDelay: "2s" }}
                className="absolute top-[40%] -end-6 lg:-end-12 bg-white/10 backdrop-blur-xl border border-white/20 p-7 rounded-2xl shadow-xl z-20 text-center"
              >
                <div className="text-sm font-bold text-white uppercase tracking-wider mb-3">Social Media</div>
                <div className="w-20 h-20 bg-white/5 rounded-xl border border-white/10 shadow-inner flex items-center justify-center mx-auto text-4xl">📱</div>
              </motion.div>
            </motion.div>

          </div>
        </section>
      </div>

  {/* Services Section (Frosted Glassmorphism Theme) */}
      <section id="services" className="relative w-full bg-slate-50 py-24 z-20 overflow-hidden">
        
        {/* Ambient Background Blobs (Crucial for making the glass blur visible!) */}
        <div className="absolute top-[10%] left-[-5%] w-[40%] h-[50%] bg-[#5e055b]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-bold text-[#5e055b] bg-[#5e055b]/10 border border-[#5e055b]/20 rounded-full backdrop-blur-md">
                Our Capabilities
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Engineering the <span className="font-['Montserrat',sans-serif] font-bold text-[#5e055b] tracking-normal">Digital Edge</span>
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                We don't just build websites; we engineer scalable digital ecosystems designed to outpace the competition.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={serviceVariants}
                whileHover={{ y: -8 }}
                /* Frosted Glassmorphism Classes applied here */
                className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(94,5,91,0.1)] hover:bg-white/60 transition-all duration-500 overflow-hidden"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6 transition-transform duration-300 group-hover:scale-110 ${service.accent} border border-white shadow-sm backdrop-blur-md`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold text-slate-900 mb-3 transition-colors duration-300 ${service.hoverText}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                  {service.description}
                </p>
                {/* Accent bar at the bottom */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#5e055b] group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US & FOOTER WRAPPER --- */}
      <div 
        className="w-full relative z-20 overflow-hidden flex flex-col"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        
        {/* White Grid */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)'
          }}
        />

        {/* Why Choose Us Section */}
        <section className="relative py-24 px-6 lg:px-12 max-w-[1400px] w-full mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full">
                The Growize Advantage
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Brands Trust <br className="hidden md:block" />
                {/* Corporate Montserrat font matching the Hero and Services sections */}
                <span className="font-['Montserrat',sans-serif] font-bold text-[#c4aec9] tracking-normal">
                  Growize
                </span>
              </h2>
              <p className="text-slate-300 mb-10 text-lg">
                We combine futuristic aesthetics with hardcore software engineering. 
                The result? Digital experiences that look incredible and perform flawlessly.
              </p>

              <div className="space-y-8">
                {reasons.map((reason, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-14 h-14 bg-white/10 border border-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-2xl group-hover:bg-[#5e055b] group-hover:border-[#5e055b] transition-all duration-300 shadow-md">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                        {reason.title}
                      </h4>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Core Web Vitals Card - Glassmorphism */}
              <div className="relative p-8 md:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
                  <h3 className="text-2xl font-bold text-white">Core Web Vitals</h3>
                  <span className="px-3 py-1 bg-white/10 text-white border border-white/20 text-xs font-bold rounded-md uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="space-y-8">
                  {metrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-slate-200 font-medium">{metric.label}</span>
                        <span className="text-white font-bold text-lg">{metric.score}</span>
                      </div>
                      <div className="w-full h-3 bg-black/40 rounded-full overflow-hidden shadow-inner border border-white/5">
                        {/* Fixed syntax error here & updated to light gray */}
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${metric.score}%` }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ duration: 1.5, delay: 0.5 + (index * 0.2), ease: "easeOut" }}
                          className="h-full bg-slate-300 rounded-full relative"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Fixed the double <<div typo here */}
                <div className="mt-10 p-4 bg-black/40 border border-white/10 rounded-xl text-center backdrop-blur-sm">
                  <p className="text-sm text-slate-300">
                    Built with <span className="text-white font-bold">Next.js 15</span> & <span className="text-white font-bold">Tailwind v4</span>
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

      {/* --- INSPIRATIONAL QUOTE SECTION (Light Gray Glassmorphism Theme) --- */}
        <section className="relative py-24 lg:py-32 w-full flex items-center justify-center overflow-hidden bg-slate-100 border-t border-b border-slate-200">
          
          {/* Wavy 3D Mesh Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-10 mix-blend-multiply"
            style={{
              backgroundImage: "url('/wavy-mesh.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Ambient colorful blobs to make the glassmorphism pop on light mode */}
          <div className="absolute top-[30%] left-[30%] w-64 h-64 bg-indigo-300/30 blur-[80px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-[30%] right-[30%] w-64 h-64 bg-[#5e055b]/20 blur-[80px] rounded-full pointer-events-none z-0" />

          {/* Subtle Background Watermark (Massive transparent dark 'G') */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] lg:text-[500px] font-extrabold text-slate-900/[0.04] pointer-events-none select-none font-['Montserrat',sans-serif] leading-none z-0">
            G
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10 px-6 lg:px-12"
          >
            {/* Center-Aligned Glassmorphism Card */}
            <div className="relative p-10 md:p-14 lg:p-16 rounded-[2rem] bg-white/60 backdrop-blur-2xl border border-white shadow-[0_20px_60px_rgba(0,0,0,0.05)] mb-10 flex flex-col items-center">
              
              {/* Elegant Quote Icon */}
              <div className="text-[#5e055b] opacity-20 mb-6">
                <svg className="w-12 h-12 md:w-16 md:h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Impressive Quote Text */}
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-slate-800 leading-relaxed md:leading-relaxed font-['Montserrat',sans-serif]">
                "Success in the digital world requires constant adaptation, innovation, and a vision that goes beyond the ordinary."
              </h3>
            </div>
            
            {/* Author / Title (Cleanly positioned below the card) */}
            <div className="flex flex-col items-center">
              <span className="font-bold text-slate-900 text-xl tracking-wide">Sundar Pichai</span>
              <span className="text-[#5e055b] font-bold text-sm mt-1.5 uppercase tracking-widest">CEO of Google</span>
            </div>
          </motion.div>
        </section>
{/* --- STRATEGIC INSIGHTS / CORE PILLARS SECTION --- */}
     {/* --- STRATEGIC INSIGHTS / CORE PILLARS SECTION --- */}
        <section 
          className="relative py-24 lg:py-32 w-full z-20 overflow-hidden border-t border-white/10"
          /* Background now matches Hero Section Radial Gradient */
          style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
        >
          
          {/* Matches Hero Grid Overlay for Visual Consistency */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-50"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 100% 100% at 50% 50%, black 50%, transparent 100%)'
            }}
          />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Section Header */}
            <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-white bg-white/5 border border-white/10 backdrop-blur-md rounded-full">
                  Strategic Insights
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                  The <span className="font-['Montserrat',sans-serif] text-[#c4aec9] tracking-normal">Core Pillars</span> of Our Methodology
                </h2>
              </div>
              <p className="text-slate-400 max-w-md text-lg leading-relaxed">
                We don't guess. We rely on data-backed strategies, futuristic design principles, and modern architectures to build digital systems that dominate the MENA market.
              </p>
            </div>

            {/* Insight Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              
              {/* Insight 1: Engineering */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="group p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#5e055b]/50 hover:bg-white/10 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#5e055b]/20 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner text-white group-hover:scale-110 transition-transform duration-500">
                    ⚛️
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Headless Architecture</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    By decoupling the frontend UI from the backend database using Next.js, we achieve instantaneous page loads, unbreakable security, and limitless scalability for your e-commerce platforms.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center text-[#5e055b] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                  Explore Tech Stack <span className="ml-2">→</span>
                </a>
              </motion.div>

              {/* Insight 2: UI/UX Design */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#5e055b]/50 hover:bg-white/10 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#5e055b]/20 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner text-white group-hover:scale-110 transition-transform duration-500">
                    👁️
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Neuro-Design Principles</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    We don't just make things look pretty. We utilize human psychology, visual hierarchy, and strategic micro-interactions to subconsciously guide users directly toward conversion points.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center text-[#5e055b] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                  View Case Studies <span className="ml-2">→</span>
                </a>
              </motion.div>

              {/* Insight 3: Growth / Marketing */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="group p-8 lg:p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#5e055b]/50 hover:bg-white/10 transition-all duration-500 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 bg-[#5e055b]/20 border border-white/10 rounded-2xl flex items-center justify-center text-3xl mb-8 shadow-inner text-white group-hover:scale-110 transition-transform duration-500">
                    📈
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Omnichannel Growth</h3>
                  <p className="text-slate-400 leading-relaxed mb-8">
                    A beautiful website is useless if no one sees it. We integrate technical SEO, high-conversion PPC campaigns, and viral media creation to dominate your industry's search volume.
                  </p>
                </div>
                <a href="#" className="inline-flex items-center text-[#5e055b] font-bold text-sm uppercase tracking-widest hover:text-white transition-colors">
                  See Our Results <span className="ml-2">→</span>
                </a>
              </motion.div>

            </div>
          </div>
        </section>
        {/* --- HAPPY CLIENTS / REVIEWS SECTION (Light Gray Theme) --- */}
        <section className="relative py-24 lg:py-32 w-full bg-slate-50 z-20 overflow-hidden border-t border-slate-200">
          
          {/* Ambient light flares to make the glassmorphism refract color */}
          <div className="absolute top-[30%] right-[-5%] w-[40%] h-[40%] bg-[#5e055b]/10 blur-[150px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

          {/* Background Grid (Inverted for light background) */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-40"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
              maskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 40%, transparent 100%)'
            }}
          />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-16 md:mb-24">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-bold text-[#5e055b] bg-[#5e055b]/10 border border-[#5e055b]/20 rounded-full backdrop-blur-md">
                  Client Success Stories
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                  Trusted by <span className="font-['Montserrat',sans-serif] text-[#5e055b] tracking-normal">Visionary Brands</span>
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Don't just take our word for it. Here is what our partners have to say about collaborating with the Growize team.
                </p>
              </motion.div>
            </div>

            {/* Light Glassmorphism Reviews Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {reviews.map((review, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative p-8 lg:p-10 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(94,5,91,0.08)] flex flex-col justify-between group hover:bg-white/80 transition-all duration-500"
                >
                  {/* Faint Quote Watermark (Darkened) */}
                  <div className="absolute top-6 right-8 text-slate-900/5 font-serif text-8xl leading-none pointer-events-none select-none">
                    "
                  </div>

                  <div>
                    {/* 5-Star Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-[#5e055b]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
                      "{review.quote}"
                    </p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-4 border-t border-slate-200 pt-6 mt-auto">
                    {/* Placeholder Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5e055b] to-indigo-900 border border-white/50 flex items-center justify-center text-white font-bold text-lg shadow-inner">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-base">{review.name}</h4>
                      <p className="text-slate-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>
{/* --- FAQ SECTION (Dark Gradient - No Grid) --- */}
        <section 
          className="relative py-24 lg:py-32 w-full z-20 overflow-hidden"
          /* Matches Hero & Insights Gradient */
          style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
        >
          
          {/* Ambient light flares for depth (No Grid Overlay here) */}
          <div className="absolute top-[10%] left-[-5%] w-[40%] h-[50%] bg-[#5e055b]/10 blur-[150px] rounded-full pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

          <div className="max-w-[800px] mx-auto px-6 lg:px-12 relative z-10">
            
            {/* Header */}
            <div className="text-center mb-16">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-1.5 mb-4 text-sm font-bold text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                  Got Questions?
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                  Frequently Asked <span className="font-['Montserrat',sans-serif] text-[#c4aec9] tracking-normal">Questions</span>
                </h2>
              </motion.div>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-white/10 rounded-2xl bg-white/5 backdrop-blur-md overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-[#5e055b]/50 shadow-[0_0_20px_rgba(94,5,91,0.15)] bg-white/10' : 'hover:bg-white/10'}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                  >
                    <span className="text-white font-bold text-lg md:text-xl pr-4">{faq.question}</span>
                    <span 
                      className={`flex-shrink-0 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white transition-all duration-300 ${openFaq === index ? 'rotate-180 bg-[#5e055b] border-[#5e055b]' : 'bg-white/5'}`}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? 'auto' : 0, opacity: openFaq === index ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-0 text-slate-400 leading-relaxed text-base md:text-lg border-t border-white/5 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

          </div>
        </section>
        
        {/* --- CONTACT US SECTION --- */}
        <section id="contact-us" className="relative py-24 lg:py-32 bg-white z-20 overflow-hidden">
          {/* Ambient Background Glows */}
          <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#5e055b]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-[10%] left-[-5%] w-[30%] h-[30%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              
              {/* Left Column: Glassmorphism Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50/50 backdrop-blur-xl border border-slate-200 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 font-['Montserrat',sans-serif]">
                  Leave your <span className="text-[#5e055b]">message</span>
                </h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] focus:ring-2 focus:ring-[#5e055b]/20 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input type="email" placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] focus:ring-2 focus:ring-[#5e055b]/20 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <input type="text" placeholder="How can we help?" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] focus:ring-2 focus:ring-[#5e055b]/20 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] focus:ring-2 focus:ring-[#5e055b]/20 outline-none transition-all resize-none"></textarea>
                  </div>
                  <button className="w-full py-5 bg-[#5e055b] text-white font-bold rounded-2xl shadow-lg shadow-[#5e055b]/30 hover:bg-[#4a0448] transition-all transform hover:-translate-y-1">
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Right Column: Info & Details */}
              <div className="flex flex-col justify-center h-full">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                    Let’s Connect and <br />
                    <span className="font-['Montserrat',sans-serif] text-[#5e055b]">Collaborate</span>
                  </h2>
                  <p className="text-slate-600 text-lg mb-12 leading-relaxed max-w-lg">
                    Ready to scale your digital presence? Reach out to us for inquiries, assistance, or to discuss how we can help grow your business.
                  </p>
                </motion.div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { label: "Office Address:", value: "Sharjah Publishing City, UAE", icon: "📍" },
                    { label: "Call Us:", value: "+971 55 546 6945", icon: "📞" },
                    { label: "Working Hours:", value: "9:00 AM to 6:00 PM", icon: "⏰" },
                    { label: "Mail Us:", value: "info@gro-wize.com", icon: "✉️" }
                  ].map((info, idx) => (
                    <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex items-center gap-5 group hover:border-[#5e055b]/30 transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:bg-[#5e055b] group-hover:text-white transition-all">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</p>
                        <p className="text-sm font-bold text-slate-900">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                  <p className="text-slate-500 italic">
                    "Your Growth Starts with a Conversation – Contact us today and let's create something exceptional together!"
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* Footer Section */}
<footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
  {/* Defining socialLinks here ensures it is never "undefined" */}
  {(() => {
    const socialLinks = [
      { name: "Facebook", url: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
      { name: "Instagram", url: "#", path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.25 2.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" },
      { name: "LinkedIn", url: "#", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
      { name: "WhatsApp", url: "https://wa.me/971555466945", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.218-1.253-6.242-3.534-8.524" }
    ];

    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-start">
        {/* Force 4 columns in one row on large screens */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* 1. Branding (Span 4) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <img src="/logo.png" alt="Growize" className="h-9 w-auto mb-8 object-contain" />
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
              Architecting the digital future. We build high-performance, scalable, and localized web experiences for the MENA region and beyond.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5e055b] transition-all">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>

          {/* 2. Core Services (Span 3) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Core Services</h4>
            <ul className="space-y-4">
              {['Next.js Engineering', 'UI/UX Design', 'SEO Optimization', 'E-Commerce', 'RTL Localization'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5e055b]" />
                  <Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* 4. Get In Touch (Span 3) - Fits in the same row */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Get In Touch</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">📞</div>
                <a href="tel:+971555466945" className="text-slate-400 hover:text-white text-sm transition-colors tracking-tight">+971 55 546 6945</a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">✉️</div>
                <a href="mailto:info@gro-wize.com" className="text-slate-400 hover:text-white text-sm transition-colors truncate">info@gro-wize.com</a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">📍</div>
                <div className="text-slate-400 text-sm leading-relaxed">
                  Sharjah, UAE<br />
                  <span className="text-[10px] opacity-60 font-bold uppercase tracking-tighter">Sharjah Publishing City</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
<div className="flex items-center gap-8 uppercase font-bold tracking-widest">
  <Link 
    href="/privacy" 
    className="hover:text-white transition-colors duration-300"
  >
    Privacy Policy
  </Link>
  <Link 
    href="/terms"  // Update this to point to the new /terms route
    className="hover:text-white transition-colors duration-300"
  >
    Terms of Use
  </Link>
</div>
      </div>
    );
  })()}
</footer>
        {/* --- BACK TO TOP BUTTON --- */}
          {showTopButton && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#5e055b] text-white rounded-full shadow-[0_0_20px_rgba(94,5,91,0.4)] flex items-center justify-center border border-white/20 backdrop-blur-md hover:bg-[#4a0448] transition-all transform hover:-translate-y-2 active:scale-90 group"
              aria-label="Back to top"
            >
              <svg 
                className="w-6 h-6 transition-transform group-hover:-translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={3}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          )}
        
      </div>
    </main>
  );
}
