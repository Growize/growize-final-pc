"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ContactPage() {
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
    { name: "Facebook", url: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "Instagram", url: "#", path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.25 2.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" },
    { name: "LinkedIn", url: "#", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    { name: "WhatsApp", url: "https://wa.me/971555466945", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.218-1.253-6.242-3.534-8.524" 
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden font-sans flex flex-col relative w-full bg-black text-start">
      
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
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40"
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
             <a href="/about" className="text-white/70 hover:text-white transition-colors text-sm font-medium">About Us</a>
             <a href="/contact" className="text-white text-sm font-bold border-b-2 border-[#5e055b]">Contact</a>
          </div>
          <a href="https://wa.me/97150XXXXXXX" target="_blank" className="hidden md:flex items-center px-6 py-2.5 bg-[#5e055b] text-white font-bold rounded-full border border-white/20 hover:bg-[#4a0448] transition-all">
            WhatsApp Us
          </a>
        </nav>

        {/* --- 85% THIN SEPARATOR LINE --- */}
        <div className="w-[85%] h-[1px] bg-white/20 mx-auto z-50 relative" />

        {/* --- CONTACT HERO --- */}
        <section className="relative py-20 lg:py-32 px-6 lg:px-12 max-w-[1400px] w-full mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center px-4 py-1.5 mb-6 text-sm font-bold text-white bg-white/10 border border-white/20 backdrop-blur-md rounded-full">
                Get In Touch
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Let’s Connect and <br />
                <span className="font-['Montserrat'] text-white block mt-2 [text-shadow:0_0_15px_rgba(255,255,255,0.4),0_0_30px_#a31a9d,0_0_50px_#5e055b]">Collaborate</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                Ready to transform your vision into a digital masterpiece? Our team in Sharjah is ready to engineer your growth.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="relative aspect-video rounded-[2.5rem] bg-black border border-white/10 overflow-hidden shadow-2xl">
              <img src="/contact-hero.jpg" alt="Contact Growize" className="w-full h-full object-cover opacity-80" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* --- FORM SECTION --- */}
      <section className="relative py-24 bg-white z-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Leave your message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] outline-none" />
                <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] outline-none" />
              </div>
              <textarea rows={4} placeholder="How can we help you?" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-200 focus:border-[#5e055b] outline-none resize-none"></textarea>
              <button className="w-full py-5 bg-[#5e055b] text-white font-bold rounded-2xl hover:bg-[#4a0448] transition-all shadow-lg">Send Message</button>
            </form>
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="text-3xl font-bold text-slate-900 mb-6">Let's build something <span className="text-[#5e055b]">extraordinary</span>.</h4>
            <p className="text-slate-600 text-lg mb-12">Our office at Sharjah Publishing City is a hub for innovation.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { l: "Office", v: "Sharjah, UAE", i: "📍" },
                { l: "Email", v: "info@gro-wize.com", i: "✉️" }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                  <div className="text-2xl">{item.i}</div>
                  <div><p className="text-xs font-bold text-slate-400 uppercase mb-1">{item.l}</p><p className="text-sm font-bold text-slate-900">{item.v}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (Single Row Sync) --- */}
      <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
            <div className="lg:col-span-4 flex flex-col items-start text-start">
              <img src="/logo.png" alt="Growize" className="h-9 w-auto mb-8 object-contain" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">Architecting the digital future. We build high-performance, scalable, and localized web experiences for the MENA region.</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((s, i) => (
                  <a key={i} href={s.url} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5e055b] hover:border-[#5e055b] transition-all">
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 text-start">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Core Services</h4>
              <ul className="space-y-4">
                {["Next.js Engineering", "UI/UX Design", "SEO Optimization", "E-Commerce", "RTL Localization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#5e055b]" /><a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-2 text-start">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Company</h4>
              <ul className="space-y-4">
                {["About Us", "Case Studies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 rounded-full bg-[#5e055b]" /><a href={item === "About Us" ? "/about" : "#"} className="text-slate-400 hover:text-white text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-3 text-start">
              <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Get In Touch</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">✉️</div>
                  <a href="mailto:info@gro-wize.com" className="text-slate-400 hover:text-white text-sm transition-colors truncate">info@gro-wize.com</a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px]">📍</div>
                  <div className="text-slate-400 text-sm leading-relaxed">Sharjah, UAE<br /><span className="text-[10px] opacity-60 font-bold uppercase tracking-tighter">Serving the MENA region</span></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
            <p>© 2026 Growize Digital. All rights reserved.</p>
            <div className="flex items-center gap-8"><a href="#" className="hover:text-white transition-colors">Privacy Policy</a><a href="#" className="hover:text-white transition-colors">Terms of Service</a></div>
          </div>
        </div>
      </footer>

      {/* --- BACK TO TOP --- */}
      <AnimatePresence>
        {showTopButton && (
          <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} onClick={scrollToTop} className="fixed bottom-8 right-8 z-[100] w-14 h-14 bg-[#5e055b] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#4a0448] transition-all"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg></motion.button>
        )}
      </AnimatePresence>
    </main>
  );
}