'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <div className="max-w-6.5xl w-full bg-black border border-gray-800/30 rounded-xl">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex-1">
              <Link href="/" className="text-xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                Cursor Apps
              </Link>
            </div>
            <nav className="hidden md:flex flex-1 justify-center space-x-8">
              <Link href="/" className="text-[#F5F5F5] hover:text-[#AAAAAA] transition-colors text-center text-sm font-medium tracking-wide uppercase">
                Directory
              </Link>
              <Link href="#features" className="text-[#F5F5F5] hover:text-[#AAAAAA] transition-colors text-center text-sm font-medium tracking-wide uppercase">
                Features
              </Link>
              <Link href="#showcase" className="text-[#F5F5F5] hover:text-[#AAAAAA] transition-colors text-center text-sm font-medium tracking-wide uppercase">
                Showcase
              </Link>
            </nav>
            <div className="flex-1 flex justify-end">
              <a 
                href="https://www.cursor.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-1.5 text-sm font-medium text-black uppercase flex items-center gap-2 bg-[#F5F5F5] transition-all hover:bg-[#AAAAAA]"
              >
                <svg width="16" height="16" viewBox="0 0 256 256" className="fill-current">
                  <path d="M128 24.6L32 120.6V232h48V168h96v64h48V120.6L128 24.6zM128 144H80V96h48V144z"/>
                </svg>
                Download Cursor IDE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}