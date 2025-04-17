'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ExternalLink, Github } from 'lucide-react';
import { apps } from '../../../data/apps';
import PlaceholderImage from '../../../components/PlaceholderImage';

interface AppDetailsPageProps {
  params: {
    id: string;
  };
}

export default function AppDetailsPage({ params }: AppDetailsPageProps) {
  const app = apps.find(app => app.id === params.id);
  
  if (!app) {
    notFound();
  }
  
  return (
    <div className="max-w-4xl mx-auto pb-12">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-[#AAAAAA] hover:text-[#F5F5F5] transition-colors">
          <ArrowLeft size={16} className="mr-2" />
          <span>Back to Directory</span>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-xl">
          {app.image.startsWith('/') ? (
            <PlaceholderImage 
              seed={app.title} 
              className="w-full h-full" 
              text={app.title}
            />
          ) : (
            <Image src={app.image} alt={app.title} fill className="object-cover" priority />
          )}
        </div>
        
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#F5F5F5] mb-2">{app.title}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <span className="px-3 py-1 bg-[#333333] text-[#F5F5F5] text-xs rounded-full">{app.category}</span>
              <span className="text-[#AAAAAA] text-sm">Released: {app.releaseDate}</span>
            </div>
            <p className="text-[#AAAAAA]">{app.description}</p>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 relative overflow-hidden rounded-full">
              {app.authorImage ? (
                <Image src={app.authorImage} alt={app.author} fill className="object-cover" />
              ) : (
                <PlaceholderImage seed={app.author} text="" width={40} height={40} />
              )}
            </div>
            <div>
              <p className="text-[#F5F5F5] font-medium">{app.author}</p>
              <p className="text-[#AAAAAA] text-sm">Developer</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <h3 className="text-[#AAAAAA] text-sm mb-2">Rating</h3>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < app.rating ? 'fill-[#FFD700] text-[#FFD700]' : 'text-[#333333]'}
                      />
                    ))}
                </div>
                <span className="text-[#F5F5F5]">{app.rating}/5</span>
              </div>
            </div>
            
            <div className="bg-[#1A1A1A] p-4 rounded-lg">
              <h3 className="text-[#AAAAAA] text-sm mb-2">Complexity</h3>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < app.complexity ? 'fill-[#FFD700] text-[#FFD700]' : 'text-[#333333]'}
                      />
                    ))}
                </div>
                <span className="text-[#F5F5F5]">{app.complexity}/5</span>
              </div>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={app.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-2 text-sm font-medium text-[#121212] transition hover:bg-[#FFD700] flex-1"
            >
              <ExternalLink size={16} />
              <span>Visit App</span>
            </a>
            
            {app.link.includes('github.com') && (
              <a 
                href={app.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#333333] px-6 py-2 text-sm font-medium text-[#F5F5F5] transition hover:bg-[#444444]"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 