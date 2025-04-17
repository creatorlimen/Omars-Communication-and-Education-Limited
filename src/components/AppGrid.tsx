import { AppData } from '../interfaces/app';
import AppCard from './AppCard';

interface AppGridProps {
  apps: AppData[];
}

export default function AppGrid({ apps }: AppGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {apps.map((app) => (
        <div key={app.id}>
          <AppCard {...app} />
        </div>
      ))}
    </div>
  );
}