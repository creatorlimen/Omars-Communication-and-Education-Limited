'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Outreach & Advocacy', href: '/outreach' },
    { label: 'Programs', href: '/programs' },
    { label: 'Publications', href: '/publications' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-black text-xl">O</span>
            </div>
            <span className="font-black text-xl text-primary uppercase tracking-tight">O&apos;Mars</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20 scale-105'
                      : 'text-gray-600 hover:bg-primary/5 hover:text-primary hover:shadow-md'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl text-gray-600 hover:bg-primary/5 hover:text-primary transition-all duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 pt-2 border-t border-gray-100 mt-2 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-4 py-3 text-sm font-bold rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg shadow-primary/20'
                        : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
