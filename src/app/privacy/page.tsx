"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
  const socialLinks = [
    { name: "LinkedIn", url: "#", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
    { name: "Instagram", url: "#", path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 110 10 5 5 0 010-10zm5.25 2.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" },
    { name: "Facebook", url: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
    { name: "WhatsApp", url: "https://wa.me/971555466945", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.218-1.253-6.242-3.534-8.524" }
  ];

  return (
    <main className="min-h-screen bg-black font-sans text-start">
      {/* --- TOP WHITE BAR --- */}
      <div className="w-full bg-white py-3 px-6 lg:px-12 flex items-center justify-center z-[60] border-b border-slate-200">
        <p className="text-[11px] font-bold text-slate-600 uppercase tracking-widest text-center">
          "We don't just build websites; we engineer digital legacies."
        </p>
      </div>

      {/* --- HEADER --- */}
      <div 
        className="relative w-full flex flex-col z-10"
        style={{ background: "radial-gradient(ellipse at 50% 30%, #5e055b 0%, #000000 100%)" }}
      >
        <nav className="relative z-50 flex items-center justify-between px-6 lg:px-12 py-6 max-w-[1400px] w-full mx-auto">
          <Link href="/"><img src="/logo.png" alt="Growize" className="h-10 w-auto" /></Link>
          <div className="hidden md:flex items-center gap-8">
             <Link href="/" className="text-white/70 hover:text-white text-sm font-medium">Home</Link>
             <Link href="/about" className="text-white/70 hover:text-white text-sm font-medium">About Us</Link>
             <Link href="/contact" className="text-white/70 hover:text-white text-sm font-medium">Contact</Link>
          </div>
          <a href="https://wa.me/971555466945" target="_blank" className="hidden md:flex items-center px-6 py-2.5 bg-[#5e055b] text-white font-bold rounded-full border border-white/20">
            WhatsApp Us
          </a>
        </nav>
        <div className="w-[85%] h-[1px] bg-white/20 mx-auto z-50 relative" />

        <section className="py-20 lg:py-32 px-6 lg:px-12 max-w-[1400px] mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6">Privacy <span className="text-[#5e055b]">Policy</span></h1>
          <p className="text-slate-400 text-lg">Last Updated: February 2026</p>
        </section>
      </div>

      {/* --- POLICY CONTENT --- */}
      <section className="py-24 bg-white text-slate-800">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 prose prose-slate">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">1. Introduction</h2>
          <p className="mb-8">At Growize Digital, based in Sharjah, UAE, we are committed to protecting your privacy. This policy outlines how we handle personal information collected through our Next.js engineering and digital marketing services.</p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">2. Information We Collect</h2>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li><strong>Personal Details:</strong> Name, email, and phone number (+971 55 546 6945) when you contact us.</li>
            <li><strong>Usage Data:</strong> IP addresses and browser types to optimize our high-performance web apps.</li>
          </ul>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">3. How We Use Data</h2>
          <p className="mb-8">We use your data strictly to provide digital audits, respond to project inquiries, and improve our localized MENA architectures. We do not sell your personal data to third parties.</p>

          <h2 className="text-3xl font-bold text-slate-900 mb-8">4. Contact Information</h2>
          <p className="mb-8">For any privacy-related concerns, please contact our Sharjah office:</p>
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 inline-block">
            <p className="font-bold mb-1">Growize Digital HQ</p>
            <p>Sharjah Publishing City, UAE</p>
            <p>Email: info@gro-wize.com</p>
            <p>Phone: +971 55 546 6945</p>
          </div>
        </div>
      </section>

      <footer className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/5">
  {/* Defining socialLinks inside the scope to prevent reference errors */}
  {(() => {
    const socialLinks = [
      { name: "Facebook", url: "#", path: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
      { name: "Instagram", url: "#", path: "M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zM12 7a5 5 0 110 10 5 5 0 010-10zm5.25 2.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" },
      { name: "LinkedIn", url: "#", path: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" },
      { name: "WhatsApp", url: "https://wa.me/971555466945", path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.554 4.189 1.602 6.006L0 24l6.149-1.613a11.77 11.77 0 005.9 1.594h.005c6.632 0 12.028-5.398 12.03-12.032.003-3.218-1.253-6.242-3.534-8.524" }
    ];

    return (
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-start">
        {/* Main Grid: Forces 4 columns into one row on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Branding (Span 4) */}
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

          {/* Column 2: Core Services (Span 3) */}
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

          {/* Column 3: Company (Span 2) */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] uppercase tracking-widest mb-8">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white text-sm transition-colors">About Us</Link></li>
              <li><Link href="#" className="text-slate-400 hover:text-white text-sm transition-colors">Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 4: Get In Touch (Span 3) */}
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

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-[11px] tracking-wide">
            © 2026 Growize Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-[11px] text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    );
  })()}
</footer>
    </main>
  );
}