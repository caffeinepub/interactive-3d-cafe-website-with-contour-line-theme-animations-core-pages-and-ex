import { Link, useRouterState } from '@tanstack/react-router';
import { Menu, X, Coffee } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/menu', label: 'Menu' },
  { path: '/about', label: 'About Us' },
  { path: '/contact', label: 'Contact' },
  { path: '/export', label: 'Export' },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const currentPath = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <Coffee className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
          <span className="font-display text-xl font-bold text-foreground">Contour Café</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                currentPath === link.path
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[320px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.path}>
                  <Link
                    to={link.path}
                    className={`px-4 py-3 rounded-md text-base font-medium transition-smooth hover:bg-accent hover:text-accent-foreground ${
                      currentPath === link.path
                        ? 'bg-accent text-accent-foreground'
                        : 'text-foreground/80'
                    }`}
                  >
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
