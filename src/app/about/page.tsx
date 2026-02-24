"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function AboutPage() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopButton(true);
      else setShowTopButton(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { 
      name: "LinkedIn", 
      url: "#", 
      path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" 
    },
    { 
      name: "Instagram", 
      url: "#", 
      path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.25 2.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" 
    },
    { 
      name: "TikTok", 
      url: "#", 
      path: "M9 12a4 4 0 104 4V4a5 5 0 005 5" 
    },
    { 
      name: "Facebook", 
      url: "#", 
      path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" 
    },
    { 
      name: "WhatsApp", 
      url: "https://wa.me/97150XXXXXXX", 
      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.218-1.253-6.242-3.534-8.524" 
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden font-sans flex flex-col relative w-full bg-black">
      
      {/* --- VERY TOP WHITE BAR --- */}
      <div className="w-full bg-white py-3 px-6 lg:px-12 flex items-center justify-center z-[60] border-b border-slate-200">
        <p className="text-[11px] md:text-xs font-bold text-slate-600 uppercase tracking-widest text-center">
          "We don't just build websites; we engineer digital legacies."
        </p>
      </div>

      {/* --- HEADER --- */}
      <div 
        className="relative w-full flex flex-col z-10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        <div className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'radial-gradient(ellipse 100% 100% at 50% 40%, black 50%, transparent 100%)',
          }}
        />

        <nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1400px] w-full mx-auto">
          <div className="flex items-center">
            <a href="/" className="transition-transform hover:scale-105">
              <img src="/logo.png" alt="Growize Digital" className="h-10 w-auto object-contain" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-8">
             <a href="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Home</a>
             <a href="/about" className="text-white text-sm font-bold border-b-2 border-[#5e055b]">About Us</a>
             <a href="/contact" className="text-white/70 hover:text-white transition-colors text-sm font-medium">Contact</a>
          </div>
          <a href="https://wa.me/97150XXXXXXX" target="_blank" className="hidden md:flex items-center px-6 py-2.5 bg-[#5e055b] text-white font-bold rounded-full border border-white/20 hover:bg-[#4a0448] transition-all">
            WhatsApp Us
          </a>
        </nav>

        {/* --- 85% THIN SEPARATOR LINE --- */}
        <div className="w-[85%] h-[1px] bg-white/20 mx-auto z-50 relative" />

        {/* --- HERO CONTENT WITH FLOATING ELEMENTS --- */}
        <section className="relative flex-1 flex items-center py-20 lg:py-32 px-6 lg:px-12 max-w-[1400px] w-full mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
            
            {/* Left Column: Text */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full">
                Our Story
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Architecting the <br />
                <span className="font-['Montserrat',sans-serif] font-bold text-white block mt-2 [text-shadow:0_0_15px_rgba(255,255,255,0.4),0_0_30px_#a31a9d,0_0_50px_#5e055b]">
                  Digital Future
                </span>
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                Growize Digital was founded in Sharjah to bridge the gap between complex engineering and intuitive design.
              </p>
            </motion.div>

            {/* Right Column: Main Image + Floating Elements */}
            <div className="relative">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative group z-10"
              >
                <div className="absolute -inset-1 bg-[#5e055b] rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-[4/3] rounded-[2.5rem] bg-black border border-white/10 overflow-hidden shadow-2xl">
                  <img src="/about-hero.jpg" alt="About Growize" className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-6 lg:-right-10 w-32 lg:w-48 aspect-square z-20 hidden sm:block"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-white/5 p-1 shadow-2xl">
                  <img src="/hero-float-1.jpg" alt="Tech Detail" className="w-full h-full object-cover rounded-xl opacity-80" />
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-6 lg:-left-10 w-28 lg:w-40 aspect-square z-20 hidden sm:block"
              >
                <div className="w-full h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-[#5e055b]/20 p-1 shadow-2xl">
                  <img src="/hero-float-2.jpg" alt="Design Detail" className="w-full h-full object-cover rounded-xl opacity-80" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute top-1/2 -right-4 translate-y-[-50%] z-30 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl hidden lg:block"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">Innovation Hub: Sharjah</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>

      {/* --- MISSION (Light Slate) --- */}
      <section className="relative w-full bg-slate-50 py-24 lg:py-32 z-20 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white shadow-2xl bg-slate-200">
                <img src="/mission-visual.jpg" alt="Our Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Empowering Brands Through <br />
                <span className="font-['Montserrat',sans-serif] text-[#5e055b]">Digital Excellence</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Our mission is to redefine the digital landscape of the UAE from our base in Sharjah Publishing City.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {t:"Strategic Growth",i:"📈", d:"Data-backed SEO & marketing."},
                  {t:"Bilingual Mastery",i:"🌍", d:"Native RTL (Arabic) engineering."},
                  {t:"Engineering First",i:"⚛️", d:"100/100 Core Web Vitals focus."},
                  {t:"Cinematic Design",i:"🎬", d:"Futuristic visual storytelling."}
                ].map((p, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200">
                    <div className="text-2xl mb-4">{p.i}</div>
                    <h4 className="font-bold text-slate-900 mb-2">{p.t}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- AUDIT ENGINE --- */}
      <section 
        className="relative py-24 lg:py-32 w-full z-20 overflow-hidden"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-md">Audit Engine v4.0</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                How We Evaluate Your <br />
                <span className="font-['Montserrat',sans-serif] text-white [text-shadow:0_0_20px_rgba(255,255,255,0.3)]">UAE Digital Presence</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-10">
                Operating from Sharjah Publishing City, we audit your technical stack against the unique requirements of the MENA digital ecosystem.
              </p>
              <a href="/contact" className="group inline-flex items-center px-8 py-4 bg-white text-[#5e055b] font-bold rounded-2xl shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1">
                Request Free Digital Audit <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute -inset-1 bg-white/20 rounded-[3.5rem] blur-xl opacity-50" />
              <div className="relative p-10 md:p-12 rounded-[3rem] bg-black/30 backdrop-blur-[40px] border border-white/20 shadow-2xl">
                <div className="flex items-center justify-between mb-12">
                  <h3 className="text-white font-bold text-2xl tracking-tight">Live Audit Metrics</h3>
                  <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/5 border border-white/10">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                    <span className="text-[10px] text-white font-bold uppercase tracking-widest">Processing</span>
                  </div>
                </div>
                <div className="space-y-10">
                  {[
                    { label: "RTL Accessibility", val: 98 },
                    { label: "UAE 5G Speed", val: 100 },
                    { label: "MENA SEO Rank", val: 92 },
                    { label: "UX Conversion", val: 95 }
                  ].map((metric, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[11px] text-slate-300 mb-3 font-bold tracking-[0.2em] uppercase"><span>{metric.label}</span><span>{metric.val}%</span></div>
                      <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden border border-white/10 p-[2px]">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${metric.val}%` }} transition={{ duration: 2, delay: i * 0.1, ease: "circOut" }} className="h-full bg-slate-300 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- COMMUNITY --- */}
      <section className="relative py-24 bg-white z-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-[#5e055b] bg-[#5e055b]/10 border border-[#5e055b]/20 rounded-full">Connect With Us</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-12">Join the <span className="font-['Montserrat',sans-serif] text-[#5e055b]">Growize Community</span></h2>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.url}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-4 px-8 py-5 rounded-3xl bg-slate-50 border border-slate-200 text-slate-700 font-bold transition-all shadow-sm group hover:border-[#5e055b]/30"
              >
                <svg className="w-6 h-6 text-[#5e055b] fill-current group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d={social.path} />
                </svg>
                {social.name}
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION --- */}
      <section 
        className="relative py-24 lg:py-32 w-full z-20 border-b border-white/10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight">Setting the <span className="font-['Montserrat',sans-serif] text-[#c4aec9]">New Standard</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-[#5e055b]/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">A Futuristic MENA</h3>
              <p className="text-slate-400 leading-relaxed italic">"We envision a Middle East where digital interfaces are hyper-realistic and culturally resonant."</p>
            </div>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-[#5e055b]/50 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">Performance Mastery</h3>
              <p className="text-slate-400 leading-relaxed italic">"Our goal is to remain the #1 agency for 100/100 Core Web Vitals scores in the Emirates."</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOUNDATIONS --- */}
      <section className="relative py-24 w-full bg-slate-50 z-20 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 tracking-tight">Our <span className="font-['Montserrat',sans-serif] text-[#5e055b]">Foundations</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Transparency", desc: "Open communication at every stage of the development lifecycle." },
              { title: "Excellence", desc: "Setting the benchmark for high-performance localized brands." },
              { title: "Localization", desc: "Native understanding of the Sharjah and broader UAE market." }
            ].map((v, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white border border-slate-200 hover:border-[#5e055b]/50 transition-all group">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#5e055b] transition-colors">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INDIGO GLASS CTA SECTION --- */}
      <section className="relative py-24 w-full z-20 overflow-hidden bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 lg:p-24 rounded-[4rem] overflow-hidden text-center border border-[#5e055b]/20 shadow-2xl"
            style={{ 
              background: "linear-gradient(135deg, #5e055b 0%, #3a0338 100%)",
              boxShadow: "0 25px 50px -12px rgba(94, 5, 91, 0.4)" 
            }}
          >
            <div className="absolute inset-0 z-0 backdrop-blur-xl bg-white/[0.03]" />
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-flex items-center px-5 py-2 mb-8 text-[11px] font-black text-white bg-white/10 border border-white/20 rounded-full uppercase tracking-[0.3em] backdrop-blur-md">
                Partner with Growize
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                Ready to Architect Your <br />
                <span className="font-['Montserrat'] text-white/90 italic">Digital Dominance?</span>
              </h2>
              <p className="text-slate-200 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
                Transform your vision into a high-performance business asset. From our HQ in Sharjah, we engineer scalable Next.js ecosystems designed to outpace the competition.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href="/contact" 
                  className="w-full sm:w-auto px-12 py-5 bg-white text-[#5e055b] font-black rounded-2xl shadow-xl hover:bg-slate-100 transition-all transform hover:-translate-y-1 text-base uppercase tracking-wider"
                >
                  Start Your Audit
                </a>
                <a 
                  href="https://wa.me/971555466945s" 
                  target="_blank"
                  className="w-full sm:w-auto px-12 py-5 bg-transparent text-white border border-white/30 font-bold rounded-2xl backdrop-blur-md hover:bg-white/10 transition-all text-base flex items-center justify-center gap-3"
                >
                  <span className="text-xl">💬</span> Fast-Track via WhatsApp
                </a>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-start">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-4 flex flex-col items-start">
              <img src="/logo.png" alt="Growize" className="h-9 w-auto mb-8 object-contain" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                Architecting the digital future. We build high-performance, scalable, and localized web experiences for the MENA region.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5e055b] hover:border-[#5e055b] transition-all">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Core Services</h4>
              <ul className="space-y-4">
                {["Next.js Engineering", "UI/UX Design", "SEO Optimization", "E-Commerce", "RTL Localization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5e055b]" />
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Case Studies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5e055b]" />
                    <a href={item === "About Us" ? "/about" : "#"} className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Get In Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">✉️</div>
                  <a href="mailto:info@gro-wize.com" className="text-slate-400 hover:text-white text-sm transition-colors truncate">info@gro-wize.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">📍</div>
                  <div className="text-slate-400 text-sm leading-relaxed">
                    Sharjah, UAE<br />
                    <span className="text-[10px] opacity-60 font-bold uppercase tracking-tighter">Serving the MENA region</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-[11px] tracking-wide">
              © 2026 Growize Digital. All rights reserved.
            </p>
            <div className="flex items-center gap-8 text-[11px] text-slate-500">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- BACK TO TOP --- */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#5e055b] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#4a0448] transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
          </motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}