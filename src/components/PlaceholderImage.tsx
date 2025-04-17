'use client';

import { useMemo } from 'react';

interface PlaceholderImageProps {
  seed?: string;
  width?: number;
  height?: number;
  className?: string;
  text?: string;
}

export default function PlaceholderImage({
  seed = 'default',
  width = 400,
  height = 300,
  className = '',
  text
}: PlaceholderImageProps) {
  const bgColor = useMemo(() => {
    // Generate a deterministic color based on the seed
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = seed.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 50%, 25%)`;
  }, [seed]);
  
  const textColor = '#F5F5F5';
  const displayText = text || seed;
  
  return (
    <div
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{
        backgroundColor: bgColor,
        width: width,
        height: height
      }}
    >
      <p className="text-xl font-bold text-center px-4" style={{ color: textColor }}>
        {displayText}
      </p>
    </div>
  );
} 