import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Coffee, Sparkles } from 'lucide-react';
import CafeRoomScene from '../components/three/CafeRoomScene';
import CafeControlsOverlay from '../components/three/CafeControlsOverlay';

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section with 3D Scene */}
      <section className="relative h-[90vh] min-h-[600px] overflow-hidden">
        {/* 3D Canvas */}
        <div className="absolute inset-0">
          <Canvas
            camera={{ position: [0, 1.6, 5], fov: 60 }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <CafeRoomScene />
            </Suspense>
          </Canvas>
          <CafeControlsOverlay />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <div className="glass-card p-8 md:p-12 rounded-2xl pointer-events-auto">
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
                  Welcome to <span className="text-primary">Contour Café</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Experience our space in 3D. Drag to explore, scroll to zoom, and discover the perfect blend of design and comfort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/menu">
                    <Button size="lg" className="w-full sm:w-auto group">
                      View Menu
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Why Choose Contour Café?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More than just coffee—it's an experience crafted with care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: 'Premium Quality',
                description: 'Ethically sourced beans roasted to perfection, delivering exceptional flavor in every cup.',
              },
              {
                icon: Sparkles,
                title: 'Unique Ambiance',
                description: 'A thoughtfully designed space where contour lines meet comfort, creating the perfect atmosphere.',
              },
              {
                icon: ArrowRight,
                title: 'Interactive Experience',
                description: 'Explore our cafe in 3D before you visit. Navigate our space from anywhere in the world.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="glass-card p-8 rounded-xl hover:shadow-soft transition-smooth group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
