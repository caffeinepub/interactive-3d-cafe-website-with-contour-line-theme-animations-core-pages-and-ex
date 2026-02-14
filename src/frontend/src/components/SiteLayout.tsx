import { ReactNode } from 'react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import ContourBackground from './ContourBackground';
import AnimatedPageContainer from './AnimatedPageContainer';

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <ContourBackground />
      <SiteHeader />
      <AnimatedPageContainer>
        <main className="flex-1 relative z-10">
          {children}
        </main>
      </AnimatedPageContainer>
      <SiteFooter />
    </div>
  );
}
