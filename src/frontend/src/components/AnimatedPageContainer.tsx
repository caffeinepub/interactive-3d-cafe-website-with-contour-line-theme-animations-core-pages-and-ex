import { ReactNode, useEffect, useState } from 'react';

interface AnimatedPageContainerProps {
  children: ReactNode;
}

export default function AnimatedPageContainer({ children }: AnimatedPageContainerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, [children]);

  return (
    <div
      className={`transition-smooth ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}
