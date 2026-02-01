'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden">
      {/* Decorative blur circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-105">
                <span className="text-primary font-black text-2xl">O</span>
              </div>
              <span className="font-black text-2xl uppercase tracking-tight">Omars</span>
            </div>
            <p className="text-white/80 font-medium leading-relaxed">
              Promoting Education. Amplifying Voices. Driving Impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { href: '/about', label: 'About Us' },
                { href: '/programs', label: 'Programs' },
                { href: '/outreach', label: 'Outreach & Advocacy' },
                { href: '/partnerships', label: 'Partnerships' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 font-medium hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">Resources</h3>
            <ul className="space-y-4">
              {[
                { href: '/publications', label: 'Publications' },
                { href: '/gallery', label: 'Gallery' },
                { href: '/contact', label: 'Get Involved' },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-white/80 font-medium hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-black text-white mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <div className="space-y-4">
              <a 
                href="mailto:omarscomandedultd@gmail.com" 
                className="flex items-start gap-3 text-white/80 hover:text-white transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-all duration-300">
                  <Mail size={18} />
                </div>
                <span className="font-medium text-sm mt-2">omarscomandedultd@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <span className="font-medium">+234</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex items-center justify-between flex-col sm:flex-row gap-6">
            <div className="flex gap-3">
              {[
                { href: 'https://facebook.com/omarseducation', icon: Facebook, label: 'Facebook' },
                { href: 'https://twitter.com/omarseducation', icon: Twitter, label: 'Twitter' },
                { href: 'https://instagram.com/omarseducation', icon: Instagram, label: 'Instagram' },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-white/70 font-medium">
              © {currentYear} Omars Communication and Education Limited. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
