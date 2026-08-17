'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Finish loading animation when path or search params change
    setProgress(100);
    const timer = setTimeout(() => {
      setLoading(false);
      setProgress(0);
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      if (!target) return;
      const href = target.getAttribute('href');
      if (
        href &&
        href.startsWith('/') &&
        !href.startsWith('#') &&
        href !== pathname
      ) {
        setLoading(true);
        setProgress(30);
        setTimeout(() => setProgress(70), 100);
      }
    };

    const anchors = document.querySelectorAll('a[href^="/"]');
    anchors.forEach((a) => a.addEventListener('click', handleAnchorClick as EventListener));

    return () => {
      anchors.forEach((a) => a.removeEventListener('click', handleAnchorClick as EventListener));
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[3px] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-[#ff5a00] via-[#09090b] to-[#ff5a00] transition-all duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
}
