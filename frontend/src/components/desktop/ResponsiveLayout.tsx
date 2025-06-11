// src/components/ResponsiveLayout.tsx
import { ReactNode } from 'react';
import { useIsDesktop } from '../hooks/useIsDesktop';
import { HomeSidebar } from './desktop/HomeSidebar';
import { Header } from './Header';
import { Navigation } from './Navigation';

export function ResponsiveLayout({ children }: { children: ReactNode }) {
  const isDesktop = useIsDesktop();

  if (isDesktop) {
    return (
      <div className="flex">
        <HomeSidebar />
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  // Mobile layout: header top, nav bottom
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navigation />
    </>
  );
}
