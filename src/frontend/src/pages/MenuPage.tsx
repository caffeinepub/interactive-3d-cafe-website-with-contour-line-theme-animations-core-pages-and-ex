import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Coffee, Croissant, Cake } from 'lucide-react';

const menuSections = [
  {
    title: 'Coffee & Espresso',
    icon: Coffee,
    items: [
      { name: 'Espresso', description: 'Rich and bold single shot', price: '$3.50' },
      { name: 'Cappuccino', description: 'Espresso with steamed milk and foam', price: '$4.50' },
      { name: 'Latte', description: 'Smooth espresso with steamed milk', price: '$4.75' },
      { name: 'Americano', description: 'Espresso with hot water', price: '$3.75' },
      { name: 'Mocha', description: 'Espresso with chocolate and steamed milk', price: '$5.25' },
      { name: 'Cold Brew', description: 'Smooth, refreshing cold-steeped coffee', price: '$4.50', badge: 'Popular' },
    ],
  },
  {
    title: 'Specialty Drinks',
    icon: Cake,
    items: [
      { name: 'Caramel Macchiato', description: 'Vanilla, espresso, and caramel drizzle', price: '$5.50' },
      { name: 'Chai Latte', description: 'Spiced tea with steamed milk', price: '$4.75' },
      { name: 'Matcha Latte', description: 'Premium matcha with steamed milk', price: '$5.25', badge: 'New' },
      { name: 'Hot Chocolate', description: 'Rich chocolate with whipped cream', price: '$4.25' },
    ],
  },
  {
    title: 'Pastries & Treats',
    icon: Croissant,
    items: [
      { name: 'Butter Croissant', description: 'Flaky, buttery French pastry', price: '$3.75' },
      { name: 'Almond Croissant', description: 'Filled with almond cream', price: '$4.50' },
      { name: 'Blueberry Muffin', description: 'Fresh baked with real blueberries', price: '$3.50' },
      { name: 'Chocolate Chip Cookie', description: 'Warm and gooey', price: '$2.75' },
      { name: 'Avocado Toast', description: 'Sourdough with fresh avocado', price: '$7.50', badge: 'Popular' },
      { name: 'Breakfast Sandwich', description: 'Egg, cheese, and your choice of protein', price: '$6.50' },
    ],
  },
];

export default function MenuPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium coffee, specialty drinks, and fresh pastries.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="space-y-16">
          {menuSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-slide-up"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-8">
                <section.icon className="h-8 w-8 text-primary" />
                <h2 className="font-display text-3xl font-bold">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item, itemIndex) => (
                  <Card
                    key={item.name}
                    className="hover:shadow-soft transition-smooth group"
                    style={{ animationDelay: `${(sectionIndex * 100) + (itemIndex * 50)}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                          {item.name}
                        </CardTitle>
                        {item.badge && (
                          <Badge variant={item.badge === 'Popular' ? 'default' : 'secondary'}>
                            {item.badge}
                          </Badge>
                        )}
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold text-primary">{item.price}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <Card className="glass-card max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <p className="text-muted-foreground">
                All prices are subject to change. Ask about our seasonal specials and daily offerings.
                We also offer plant-based milk alternatives for an additional $0.75.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
