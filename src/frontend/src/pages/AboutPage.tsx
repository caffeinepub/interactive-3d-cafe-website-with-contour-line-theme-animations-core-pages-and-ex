import { Card, CardContent } from '@/components/ui/card';
import { Coffee, Heart, Users, Award } from 'lucide-react';

const highlights = [
  {
    icon: Coffee,
    title: 'Premium Quality',
    description: 'We source only the finest beans from sustainable farms around the world.',
  },
  {
    icon: Heart,
    title: 'Made with Love',
    description: 'Every cup is crafted with care by our experienced baristas.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in creating a welcoming space for everyone.',
  },
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for excellence in coffee and customer experience.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">About Contour Café</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Where design meets flavor, and every visit is an experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20 animate-slide-up">
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Contour Café was born from a passion for exceptional coffee and innovative design. 
                  We envisioned a space where the art of coffee-making meets the beauty of thoughtful architecture, 
                  creating an environment that inspires creativity and connection.
                </p>
                <p>
                  Our unique contour-line aesthetic isn't just about looks—it represents the layers of flavor in every 
                  cup we serve and the depth of community we've built. Each line tells a story, just like each bean 
                  has its own journey from farm to cup.
                </p>
                <p>
                  Today, we're proud to be a gathering place for coffee enthusiasts, remote workers, students, and 
                  friends. We've pioneered an interactive 3D experience that lets you explore our space from anywhere 
                  in the world, bringing our vision of accessible, beautiful design to everyone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Highlights Grid */}
        <div className="mb-20">
          <h2 className="font-display text-3xl font-bold text-center mb-12">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card
                key={highlight.title}
                className="hover:shadow-soft transition-smooth group text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <highlight.icon className="h-12 w-12 text-primary mx-auto mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card">
            <CardContent className="p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Sustainability:</strong> We partner with farms that 
                    prioritize environmental stewardship and fair labor practices.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Quality:</strong> From bean selection to brewing technique, 
                    we never compromise on excellence.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Innovation:</strong> We embrace new technologies and design 
                    approaches to enhance your experience.
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-foreground">Community:</strong> We're more than a café—we're a gathering 
                    place that brings people together.
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
