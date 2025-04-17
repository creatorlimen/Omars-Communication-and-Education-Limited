'use client';

import Image from 'next/image';
import { Star, ChevronRight } from 'lucide-react';
import { AppData } from '../interfaces/app';
import PlaceholderImage from './PlaceholderImage';
import Link from 'next/link';

export default function AppCard({
  id,
  title,
  description,
  image,
  author,
  authorImage,
  category,
  rating,
  complexity,
  releaseDate,
  link
}: AppData) {
  return (
    <div className="w-full relative">
      {/* Glow effect container */}
      <div className="absolute -inset-[1px] rounded-xl overflow-hidden transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]">
        <div className="absolute inset-0 bg-[#1E1E1E] rounded-xl"></div>
        {/* Purple glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500 rounded-full blur-xl opacity-90"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-purple-400 rounded-full blur-lg opacity-80"></div>
        {/* Blue glow */}
        <div className="absolute -bottom-10 -left-5 w-40 h-40 bg-blue-400 rounded-full blur-xl opacity-90"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-300 rounded-full blur-lg opacity-80"></div>
      </div>

      {/* Main content */}
      <div className="relative rounded-xl p-5 bg-[#1E1E1E] border border-gray-800/30 transition-all duration-300 hover:border-[#D4AF37]/30 hover:translate-y-[-2px] group">
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
          {image.startsWith('/') ? (
            <PlaceholderImage 
              seed={title} 
              className="w-full h-full" 
              text={title}
            />
          ) : (
            <Image src={image} alt={title} fill className="object-cover" priority />
          )}
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-semibold leading-tight text-[#F5F5F5]">{title}</h2>

          <p className="text-xs text-[#AAAAAA]">{description}</p>

          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-[#AAAAAA]">DEVELOPER:</span>
            <div className="flex items-center gap-2">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={author}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ) : (
                <div className="w-6 h-6 rounded-full overflow-hidden">
                  <PlaceholderImage
                    seed={author}
                    width={24}
                    height={24}
                    text=""
                  />
                </div>
              )}
              <span className="text-xs text-[#F5F5F5]">{author}</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2">
            <div className="flex flex-col items-center">
              <span className="text-xs text-[#AAAAAA]">Rating</span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < rating 
                        ? 'stroke-purple-400 fill-orange-500' 
                        : 'text-[#333333]'}
                      style={i < rating ? {
                        fill: 'url(#starGradient)',
                        stroke: 'url(#starGradient)'
                      } : {}}
                    />
                  ))}
              </div>
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C084FC" />
                    <stop offset="50%" stopColor="#EC4899" />
                    <stop offset="100%" stopColor="#F97316" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-[#AAAAAA]">Complexity</span>
              <div className="flex">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className={i < complexity 
                        ? 'stroke-purple-400 fill-orange-500' 
                        : 'text-[#333333]'}
                      style={i < complexity ? {
                        fill: 'url(#starGradient)',
                        stroke: 'url(#starGradient)'
                      } : {}}
                    />
                  ))}
              </div>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs text-[#AAAAAA]">Category</span>
              <span className="text-xs text-[#F5F5F5]">{category}</span>
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-[#AAAAAA]">Released: {releaseDate}</div>

            <div className="flex items-center gap-4">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 px-6 py-2 text-sm font-medium text-[#121212] transition-all hover:opacity-90 hover:scale-105"
              >
                Visit
              </a>

              <Link href={`/app/${id}`} className="flex items-center text-xs text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors">
                <span>Details</span>
                <ChevronRight size={14} className="text-gradient-to-r from-purple-400 via-pink-500 to-orange-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}