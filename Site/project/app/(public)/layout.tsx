import { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { NavigationProgress } from '@/components/ui/NavigationProgress';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-[#f4f4f5]">
      <Suspense fallback={null}>
        <NavigationProgress />
      </Suspense>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
