import { Button } from '@/components/ui/button';
import { RotateCcw, Info } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

export default function CafeControlsOverlay() {
  const [showHelp, setShowHelp] = useState(true);

  const handleReset = () => {
    // This will be handled by the parent component or a custom hook
    window.location.reload();
  };

  return (
    <>
      {/* Help Card */}
      {showHelp && (
        <div className="absolute top-4 left-4 right-4 md:left-auto md:right-4 md:w-80 z-10 animate-fade-in pointer-events-auto">
          <Card className="glass-card">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Info className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold text-sm">Navigation Controls</h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowHelp(false)}
                  className="h-6 w-6 p-0"
                >
                  ×
                </Button>
              </div>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• <strong>Drag:</strong> Rotate view</li>
                <li>• <strong>Scroll:</strong> Zoom in/out</li>
                <li>• <strong>Two fingers:</strong> Pan (mobile)</li>
                <li>• <strong>Pinch:</strong> Zoom (mobile)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Reset Button */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-auto">
        <Button
          onClick={handleReset}
          size="lg"
          className="shadow-lg group"
          title="Reset view"
        >
          <RotateCcw className="h-5 w-5 transition-transform group-hover:rotate-180" />
          <span className="ml-2 hidden sm:inline">Reset View</span>
        </Button>
      </div>

      {/* Show Help Button (when hidden) */}
      {!showHelp && (
        <div className="absolute top-4 right-4 z-10 pointer-events-auto">
          <Button
            onClick={() => setShowHelp(true)}
            variant="outline"
            size="icon"
            className="shadow-lg"
            title="Show help"
          >
            <Info className="h-5 w-5" />
          </Button>
        </div>
      )}
    </>
  );
}
