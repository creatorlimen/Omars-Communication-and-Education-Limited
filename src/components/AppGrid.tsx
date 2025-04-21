import { useState } from 'react';
import { AppData } from '../interfaces/app';
import AppCard from './AppCard';

interface AppGridProps {
  apps: AppData[];
}

export default function AppGrid({ apps }: AppGridProps) {
  const [visibleCount, setVisibleCount] = useState(9);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {apps.slice(0, visibleCount).map((app) => (
          <div key={app.id}>
            <AppCard {...app} />
          </div>
        ))}
      </div>
      {visibleCount < apps.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500 px-6 py-2 text-s font-medium text-[#F5F5F5] transition-all hover:opacity-90 hover:scale-105 flex items-center gap-2"
          >
            Load More Apps
          </button>
        </div>
      )}
    </div>
  );
}